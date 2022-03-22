import React, {useState, useEffect, useMemo, useCallback} from 'react';
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Button } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import './Planets.css';
import GridHome from '../GridHome';
import { findAllPlanets } from '../../services/resource/planets';
import { setPlanets } from "./action";
import AddPlanet from "../AddPlanet/AddPlanet";

const Planets = ({ setPlanets, planets}) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    async function onFindAllPlanets() {
      const planetData = await findAllPlanets()
      if (!planetData.error) {
        setPlanets(planetData);
      }
    }
    onFindAllPlanets()
  }, [setPlanets]);

  const successAddPlanet = useCallback(() => {
    toast.success("Planet has been added!");
  }, []);

  const PlanetsData = useMemo(() => {
    return {
      header: [
        'name',
        'rotation_period',
        'orbital_period',
        'diameter',
        'climate',
        'gravity',
        'terrain',
        'surface_water',
        'films',
        'residents'
      ],
      values: planets.list,
      actions: [
        {
          label: 'Details',
          action: (row) => {
            navigate('/planetDetail', { state: row.url })
          }
        },
        {
          label: 'Go to Films',
          action: (row) => {
            navigate('/films', { state: row.filmsList })
          },
          hide: row => !row.filmsList.length
        },
        {
          label: 'Go to Residents',
          action: (row) => {
            navigate('/residents', { state: row.residentsList })
          },
          hide: row => !row.residentsList.length
        }
      ]
    };
  }, [planets]);

  return (
    <div className='App'>
      <AddPlanet isOpen={isOpen} setIsOpen={setIsOpen} onSuccess={successAddPlanet} />
      <Button onClick={() => setIsOpen(prev => !prev)} className='add-planet'>Add Planet</Button>
      <GridHome data={PlanetsData} />
      <ToastContainer
          position="bottom-right"
          autoClose={5000}
          theme='dark'
          pauseOnHover={true}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  planets: state.planets
});

const mapDispatchToProps = dispatch => {
  return {
    setPlanets: data => dispatch(setPlanets(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Planets);

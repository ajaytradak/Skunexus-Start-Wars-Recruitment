import axios from 'axios';
import { useLocation } from 'react-router-dom';
import React, {useEffect, useMemo, useState} from 'react';

import './PlanetsDetails.css';
import GridPages from '../GridPages';
import {connect} from "react-redux";
import {clearPlanetDetails, setPlanetDetails} from "./action";

const PlanetsDetails = ({ planetsDetails, setPlanetDetails, clearPlanetDetails }) => {
  const { state } = useLocation();

  useEffect(() => {
    return clearPlanetDetails;
  }, [clearPlanetDetails]);

  useEffect(() => {
    axios.get(`${state}`)
      .then(resp => {
        setPlanetDetails(resp.data);
      }).catch(error => {
        console.log(error)
      })
  }, [setPlanetDetails]);

  const planetsDetailsData = useMemo(() => {
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
        'population'
      ],
      values: [planetsDetails.data],
    };
  }, [planetsDetails]);

  return (
    <div className='App'>
      <h1>Planet Details</h1>
      <GridPages data={planetsDetailsData} />
    </div>
  );
};

const mapStateToProps = state => ({
  planetsDetails: state.planetsDetails
});

const mapDispatchToProps = dispatch => {
  return {
    setPlanetDetails: data => dispatch(setPlanetDetails(data)),
    clearPlanetDetails: () => dispatch(clearPlanetDetails())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsDetails);

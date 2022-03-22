import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import axios from 'axios';

import './Residents';
import GridPages from '../GridPages';
import {connect} from "react-redux";
import {clearResidents, setResidents} from "./action";

const Residents = ({ residents, setResidents, clearResidents }) => {
  const { state } = useLocation();

  useEffect(() => {
    return clearResidents;
  }, [clearResidents]);

  useEffect(() => {
    state.forEach(resident => {
      axios.get(`${resident}`)
          .then(resp => {
            setResidents({ ...resp.data });
          }).catch(error => {
        console.log(error)
      })
    });
  }, [setResidents]);

  const dataForGrid = {
    header: [
      'birth_year',
      'eye_color',
      'gender',
      'hair_color',
      'height',
      'mass',
      'skin_color',
    ],
    values: residents.list,
  }

  return (
    <div className='App'>
      <h1>Star Wars Residents</h1>
      <GridPages data={dataForGrid} />
    </div>
  );
};

const mapStateToProps = state => ({
  residents: state.residents
});

const mapDispatchToProps = dispatch => {
  return {
    setResidents: data => dispatch(setResidents(data)),
    clearResidents: () => dispatch(clearResidents())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Residents);


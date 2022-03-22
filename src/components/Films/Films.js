import React, {useState, useEffect, useMemo} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import './Films.css';
import GridPages from '../GridPages/GridPages';
import { connect } from "react-redux";
import { clearFilms, setFilms } from "./action";

const Films = ({ films, setFilms, clearFilms }) => {
  const { state } = useLocation();

  useEffect(() => {
    return clearFilms;
  }, [clearFilms]);

  useEffect(() => {
    state.forEach(film => {
      axios.get(`${film}`)
        .then(resp => {
          setFilms({ ...resp.data })
        }).catch(error => {
        console.log(error)
      })
    });
  }, [setFilms]);

  const filmsData = useMemo(() => {
    return {
      header: [
        'director',
        'producer',
        'release_date',
        'title'
      ],
      values: films.list,
    }
  }, [films]);

  return (
    <div className='App'>
      <h1>Star Wars Films</h1>
      <GridPages data={filmsData} />
    </div>
  );
};

const mapStateToProps = state => ({
  films: state.films
});

const mapDispatchToProps = dispatch => {
  return {
    setFilms: data => dispatch(setFilms(data)),
    clearFilms: () => dispatch(clearFilms())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Films);

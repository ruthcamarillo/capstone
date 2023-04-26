import React from 'react';
// import { BrowserRouter, Route, Link } from "react-router-dom";
import '../styles/About.css';
import SearchBar from "../components/Card";
import Card from "../components/Card";
import { getByTitle } from '@testing-library/react';

function About() {
  return (
    <div className='about'>
      <h1>About</h1>
      <h3>Here Jorge will add some info about each of us. Just need everyones pic and info.</h3>

      <SearchBar data={Card} />

      <Card data ={Card} />

    </div>
  );
}

export default About;

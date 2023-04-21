import React from 'react';
// import { BrowserRouter, Route, Link } from "react-router-dom";
import '../styles/About.css';
import SearchBar from "../components/Card";
import Card from "../components/Card";

// const CardData = [
//   {
//     "id": 1,
//     "title": "title one",
//     "description": "description one",
//     "image": "image one"
//   },
//   {
//     "id": 2,
//     "title": "title two",
//     "description": "description two",
//     "image": "image two"
//   },
//   {
//     "id": 3,
//     "title": "title three",
//     "description": "description three",
//     "image": "image three"
//   },
//   {
//     "id": 4,
//     "title": "title four",
//     "description": "description four",
//     "image": "image four"
//   },
// ];

function About() {
  return (
    <div>
      <h1>About</h1>
      <h3>Here Jorge will add some info about each of us. Just need everyones pic and info.</h3>
      <SearchBar data={Card} />
      <Card data={Card} />
    </div>
  );
}

export default About;

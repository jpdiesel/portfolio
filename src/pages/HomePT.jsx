import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePT extends Component {
  render() {
    return (
      <section>
        <Link to="/sobre">Sobre mim</Link>
        <Link to="/projetos-e-skills">Projetos e skills</Link>
        <Link to="/galeria">Galeria</Link>
      </section>
    );
  };
}

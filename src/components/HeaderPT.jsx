import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePT extends Component {
  render() {
    return (
      <section>
        <Link to="/sobre">Sobre mim</Link>
        <Link to="/sobre">Projetos</Link>
        <Link to="/sobre">Skills</Link>
        <Link to="/sobre">Experiências</Link>
        <Link to="/sobre">Contato</Link>
      </section>
    );
  };
}

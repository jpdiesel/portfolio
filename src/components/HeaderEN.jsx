import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class HomeEN extends Component {
  render() {
    return (
      <section>
        <Link to="/about">About me</Link>
        <Link to="/projects-and-skills">Projects and Skills</Link>
      </section>
    )
  }
}

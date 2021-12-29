import React, { Component } from 'react'
import HeaderEN from '../components/HeaderEN';
import { Link } from 'react-router-dom';

export default class About extends Component {
  render() {
    return (
      <div>
        <header>
          <HeaderEN />
        </header>
        <h2>About me</h2>
        <article>
          <p>My name is João Pedro Araújo Diesel, born in 29/01/2002 in Santa Maria, in the state of Rio Grande do Sul, in Brazil.
            Since i was little, i've always been interested in technology, in the beginning, i liked to use my computer to play games, 
            but as i was maturing, i started to develop some interest in the functionality of the games, in cyber defense 
            and for hacking in general. In the middle of 2021, a friend of mine presented me to <Link
            to={{ pathname: "https://www.betrybe.com/" }} target="_blank" >Trybe</Link> and then i started learning about programming,
            and my interest grew higher. Today i can't see myself in an area other than programming.
          </p>
        </article>
      </div>
    )
  }
}

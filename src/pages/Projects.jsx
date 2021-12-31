import React, { Component } from 'react'
import HeaderEN from '../components/HeaderEN';
import { Link } from 'react-router-dom';

export default class Projects extends Component {
  render() {
    return (
      <div>
        <header>
          <HeaderEN />
        </header>
        <nav>
          <h2> My Projects </h2>
          <ul>
            <li>
              <Link to={{ pathname: "https://github.com/jpdiesel/trybe-project-pixels-art" }} target="_blank">
                Pixels Art
              </Link>
            </li>
            <p>This project was built using only JS, HTML and CSS. It's a board to paint pixels and create your own art, 
              even though it's just a 5x5 board.</p>
            <li>
              <Link to={{ pathname: "https://github.com/jpdiesel/trybe-project-shopping-cart" }} target="_blank">
                Shopping Cart
              </Link>
            </li>
            <p>This project was built using JS, HTML and CSS, but this one used a "Mercado Libre"(a famous latin company of 
              buying and selling, like Amazon) API, so it required a lot more effort, specially because this was my first 
              API project.</p>
            <li>
              <Link to={{ pathname: "https://github.com/jpdiesel/trybe-project-todo-list" }} target="_blank">
                To Do List
              </Link>
            </li>
            <p>This project wa build using JS, HTML and CSS.</p>
            <li>
              <Link to={{ pathname: "https://github.com/jpdiesel/trybe-project-trybetunes" }} target="_blank">
                TrybeTunes
              </Link>
            </li>
            <p>This project was built using REACT and it's easily one of my favorites, because every requirement was very challenging, 
              and i had to work really hard on this one and when i was done, i was really tired, but i was also glad, because this project
              forced me to learn new things. It's a Trybe version of ITunes.
            </p>
            <li>
              <Link to={{ pathname: "https://github.com/jpdiesel/trybe-project-tryunfo" }} target="_blank">
                Tryunfo
              </Link>
            </li>
            <p>This project was built using REACT. This one was particularly the hardest project i've ever made, not in terms of complexity,
              but because it was my first project using REACT and it brought me to my knees. It's a card of Trunfo generator.</p>
          </ul>
        </nav>
      </div>
    )
  }
}

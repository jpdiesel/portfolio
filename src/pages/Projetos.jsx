import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderPT from '../components/HeaderPT';

export default class Projetos extends Component {
  render() {
    return (
      <div>
        <header>
          <HeaderPT />
        </header>
        <nav>
          <h2> My Projects </h2>
          <ul>
            <li>
              <Link to={{ pathname: "https://github.com/jpdiesel/trybe-project-pixels-art" }} target="_blank">
                Pixels Art
              </Link>
            </li>
            <p>Esse projeto foi criado usando o HTML, CSS e JS. É um quadro para pintar pixeis e criar a sua própria arte, 
              apesar de ser um 5x5.</p>
            <li>
              <Link to={{ pathname: "https://github.com/jpdiesel/trybe-project-shopping-cart" }} target="_blank">
                Shopping Cart
              </Link>
            </li>
            <p>Esse projeto foi criado usando HTML, CSS e JS. É uma página de compra que utiliza a API do Mercado Livre, o que tornou
              o processo de criação desse projeto um pouco mais difícil, já que foi minha primeira vez lidando com API.
            </p>
            <li>
              <Link to={{ pathname: "https://github.com/jpdiesel/trybe-project-todo-list" }} target="_blank">
                To Do List
              </Link>
            </li>
            <p>Esse projeto foi criado usando HTML, CSS e JS. É uma lista de tarefas.</p>
            <li>
              <Link to={{ pathname: "https://github.com/jpdiesel/trybe-project-trybetunes" }} target="_blank">
                TrybeTunes
              </Link>
            </li>
            <p>Esse projeto foi criado usando REACT. Esse projeto é facilmente um dos meu favoritos, porque todo requisito era muito
              desafiador e eu tive que trabalhar bastante e quando terminei, estave exausto, mas feliz porque esse projeto me forçou a 
              aprender coisas novas. É uma versão da Trybe do ITunes. 
            </p>
            <li>
              <Link to={{ pathname: "https://github.com/jpdiesel/trybe-project-tryunfo" }} target="_blank">
                Tryunfo
              </Link>
            </li>
            <p>Esse projeto foi criado usando REACT. Particularmente, esse foi o projeto mais difícil que eu fiz, não por causa
              da complexidade do código, já que esses méritos são do TrybeTunes, mas porque foi meu primeiro projeto usando
              REACT. É um gerador de cartas de baralho do jogo Trunfo
            </p>
          </ul>
        </nav>
      </div>
    )
  }
}

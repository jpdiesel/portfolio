import React, { Component } from 'react';
import HeaderPT from '../components/HeaderPT';
import { Link } from 'react-router-dom';

export default class Sobre extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <HeaderPT />
        </header>
        <h2>Sobre Mim</h2>
        <article>
          <p>Me chamo João Pedro Araújo Diesel, nascido em 29/01/2002 em Santa Maria, no estado do Rio Grande do Sul.
            Desde pequeno, sempre tive interesse por tecnologia, no começo, gostava de utilizar meu computador para jogar, 
            mas conforme fui amadurecendo, comecei a desenvolver interesse pela funcionalidade dos jogos, por defesa cibernética 
            e por hacking em geral. No meio de 2021, um amigo meu me apresentou à <Link
            to={{ pathname: "https://www.betrybe.com/" }} target="_blank" >Trybe</Link> e foi a partir do Desafio Prático que eu 
            comecei a aprender programação e conforme fui aprendendo, meu interesse aumentou cada vez mais. Hoje não me vejo em nenhuma
            outra área se não a de programação.
          </p>
        </article>
      </div>
    )
  }
}

// ***********************************************************************
// link externo feito com a ajuda do link:
// https://stackoverflow.com/questions/42914666/react-router-external-link
// ***********************************************************************
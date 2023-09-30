import React, { Component } from 'react';
import { Redirect } from 'react-router';
import '../styles/pages/LanguageSelect.css';
import brazilFlag from '../img/brazilFlag.png';
import usaFlag from '../img/usaFlag.jpg';

export default class LanguageSelect extends Component {
  constructor() {
    super()
    this.state = {
      checkPT: false,
      checkEN: false,
      redirectToPT: false,
      redirectToEN: false,
      styledInputPT: false,
      styledInputEN: false,
    }
    this.checkValidation = this.checkValidation.bind(this);
    this.redirectFunction = this.redirectFunction.bind(this);
  }

  checkValidation = ({target}) => {
    const language = target.id; 
    if (language === "pt") {
      this.setState({
        checkEN: false,
        checkPT: true,
        styledInputEN: false,
        styledInputPT: true,
      })
    } if (language === "en") {
      this.setState({
        checkEN: true,
        checkPT: false,
        styledInputEN: true,
        styledInputPT: false,
      })
    }
  }

  redirectFunction = ({target}) => {
    const bttnId = target.id;
    if (bttnId === "pt-button") {
      this.setState({ redirectToPT: true });
    } if (bttnId === "en-button") {
      this.setState({ redirectToEN: true });
    }
  }

  render() {
    const StylesPT = {
      border: "solid 2px #e6eaf0",
      backgroundImage: `url(${brazilFlag})`,
      backgroundSize: "cover",
      color: "white",
      
    }
    const StylesEN = {
      border: "solid 2px #e6eaf0",
      backgroundImage: `url(${usaFlag})`,
      backgroundSize: "cover",
      color: "white",
    }
    const { 
      checkEN,
      checkPT,
      redirectToEN,
      redirectToPT,
      styledInputEN,
      styledInputPT,
     } = this.state;
    return (
      <div className="outside">
        <section className="board" id="language-board">
          {checkPT ? <p className='pt-title'>ESCOLHA SEU IDIOMA</p> : null }
          {checkEN ? <p className='en-title'>SELECT YOUR LANGUAGE</p> : null}
          {!checkEN && !checkPT ? <p className='title'>ESCOLHA SEU IDIOMA</p> : null}
          <label style={styledInputEN ? StylesEN : null} className='en-label' htmlFor="en">
            <input type="radio" id="en" name="language" onChange={ this.checkValidation }/>
            EN-US
          </label>
          <label style={styledInputPT ? StylesPT : null} className='pt-label' htmlFor="pt">
            <input type="radio" id="pt" name="language" onChange={ this.checkValidation }/>
            PT-BR
          </label>
          <div className='space'/>
          {checkPT ? <button value="IR PARA PÁGINA PRINCIPAL" type="submit" id="pt-button" onClick={ this.redirectFunction }></button> : null}
          {checkEN ? <button value="PROCEED TO MAIN PAGE" type="submit" id="en-button" onClick={ this.redirectFunction }></button> : null}
          {redirectToPT ? <Redirect to="/sobre"/> : null}
          {redirectToEN ? <Redirect to="/about"/> : null}
        </section>
      </div>
    );
  };
}
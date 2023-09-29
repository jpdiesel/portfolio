import React, { Component } from 'react';
import { Redirect } from 'react-router';
import '../styles/pages/LanguageSelect.css'

export default class LanguageSelect extends Component {
  constructor() {
    super()
    this.state = {
      checkPT: false,
      checkEN: false,
      redirectToPT: false,
      redirectToEN: false,
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
      })
    } if (language === "en") {
      this.setState({
        checkEN: true,
        checkPT: false,
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
    const { 
      checkEN,
      checkPT,
      redirectToEN,
      redirectToPT,
     } = this.state;
    return (
      <div className="outside">
        <section className="board" id="language-board">
          {checkPT ? <p className='pt-title'>Escolha seu idioma</p> : null }
          {checkEN ? <p className='en-title'>Choose your language</p> : null}
          {!checkEN && !checkPT ? <p className='pt-title'>Escolha seu idioma</p> : null}
          <label className='en-label' htmlFor="en">
            <input type="radio" id="en" name="language" onChange={ this.checkValidation }/>
            EN-US
          </label>
          <label className='pt-label' htmlFor="pt">
            <input type="radio" id="pt" name="language" onChange={ this.checkValidation }/>
            PT-BR
          </label>
          <div className='space' />
          {checkPT ? <button type="submit" id="pt-button" onClick={ this.redirectFunction }>Ir para página principal</button> : null}
          {checkEN ? <button type="submit" id="en-button" onClick={ this.redirectFunction }>Proceed to main page</button> : null}
          {redirectToPT ? <Redirect to="/sobre"/> : null}
          {redirectToEN ? <Redirect to="/about"/> : null}
        </section>
      </div>
    );
  };
}
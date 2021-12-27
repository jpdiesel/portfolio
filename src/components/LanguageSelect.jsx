import React, { Component } from 'react';

export default class LanguageSelect extends Component {
  constructor() {
    super()
    this.state = {
      checkPT: false,
      checkEN: false,
    }
    this.checkValidation = this.checkValidation.bind(this)
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

  render() {
    const { 
      checkEN,
      checkPT,
     } = this.state;
    return (
      <section className="board" id="language-board">
        {checkPT ? <p>Escolha seu idioma</p> : null }
        {checkEN ? <p>Choose your language</p> : null}
        {!checkEN && !checkPT ? <p>Escolha seu idioma</p> : null}
        <label htmlFor="pt">
          🇧🇷 PT-BR
          <input type="radio" id="pt" name="language" onChange={ this.checkValidation }/>
        </label>
        <label htmlFor="en">
          🇺🇸 EN-US
          <input type="radio" id="en" name="language" onChange={ this.checkValidation }/>
        </label>
        {checkPT ? <button type="submit">Ir para página principal</button> : null}
        {checkEN ? <button type="submit">Proceed to main page</button> : null}
      </section>
    );
  };
}
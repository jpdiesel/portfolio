import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom';
// import me from '../img/3x4-sbg.png';
import '../styles/MainPage.css';
import Popup from "../components/Popup.jsx";
// import { requestProjects } from '../api/app.js';

export default class Sobre extends Component {
  constructor() {
    super()
    this.state = {
      openPopup1: false,
      openPopup2: false,
      openPopup3: false,
      openPopup4: false,
      openPopup5: false,
      openPopup6: false,
      openPopup7: false,
      openPopup8: false,
      openPopup9: false,
      openPopup10: false,
      openPopup11: false,
      openPopup12: false,
      projetos: [],
      theme: "dark-theme",
      checkbox: false,
      svgColor: "#ffffff",
    }
    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
  }

  openPopup = (id) => {
    const openPopup = `{ "openPopup${id}": true }`;
    this.setState(JSON.parse(openPopup));
  };

  closePopup = (id) => {
    const closePopup = `{ "openPopup${id}": false }`
    this.setState(JSON.parse(closePopup));
  };

  changeTheme = () => {
    if (this.state.theme === "dark-theme") {
      document.body.style.backgroundColor = "#fafafa";
      this.setState({ theme: "light-theme" });
      this.setState({ svgColor: "#10273d" })
    } else {
      document.body.style.backgroundColor = "#10273d";
      this.setState({ theme: "dark-theme" });
      this.setState({ svgColor: "#ffffff" })
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/projects')
    .then((response) => response.json())
    .then(data => {
      this.setState({ projetos: data });
    });
  }

  render() {
    const styles = {
      mixBlendMode: 'normal'
    };
    const { 
      openPopup1, 
      openPopup2,
      openPopup3,
      openPopup4,
      openPopup5,
      openPopup6,
      openPopup7,
      openPopup8,
      openPopup9,
      openPopup10,
      openPopup11,
      openPopup12,
      projetos,
      theme,
      svgColor
     } = this.state
    return (
      <div>
        <header className={["header", theme].join(" ")}>
          <nav className="page-sections">
            <label className="switch" htmlFor='switch'>
              <input id="switch" type="checkbox" onChange={() => this.changeTheme()}></input>
              <span className="slider round"></span>
            </label>
            {/* <HashLink className='links' smooth to="#about">Sobre mim</HashLink> */}
            <HashLink className='links' smooth to="#my-projects">Projects</HashLink>
            <HashLink className='links' smooth to="#skills-section">Skills</HashLink>
            <HashLink className='links' smooth to="#experience">Experience</HashLink>
            <HashLink className='links' smooth to="#contact-bar">Contact</HashLink>
          </nav>
        </header>
        <figure className='profile-container'>
          <div>
            <h2 className='name'>
              JOÃO PEDRO DIESEL
            </h2>
            <h3 className='subtext'>
              WEB DEVELOPER
            </h3>
          </div>
        </figure>
        {/* <h2 className='title-text' id="about">Sobre Mim</h2>
          <figure>
            <img src={me} className="profile-img" alt="Eu"></img>
          </figure>
          <article>
            <p>Me chamo João Pedro Araújo Diesel, nascido em 29/01/2002 em Santa Maria, no estado do Rio Grande do Sul.
              Desde pequeno, sempre tive interesse por tecnologia, no começo, gostava de utilizar meu computador para jogar, 
              mas conforme fui amadurecendo, comecei a desenvolver interesse pela funcionalidade dos jogos, por defesa cibernética 
              e por hacking em geral. No meio de 2021, um amigo meu me apresentou à <Link
              to={{ pathname: "https://www.betrybe.com/" }} target="_blank" >Trybe</Link> e foi a partir do Desafio Prático que eu 
              comecei a aprender programação e conforme fui aprendendo, meu interesse aumentou cada vez mais. Hoje não me vejo em nenhuma
              outra área se não a de programação.
            </p>
          </article> */}
        <h2 className={['title-text', theme].join(" ")} id="my-projects">Projects</h2>
        <nav>
          <ul className={theme} id="projects">
            <div className='upper-row'>
            <li>
              <div className={['project-links', theme].join(" ")} onClick={() => this.openPopup(1)} >
                <svg id="sc" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0,0,256,256">
                  <g fill={svgColor} fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={styles}><g transform="scale(5.12,5.12)"><path d="M44,8h-2v-2h-2v-2h-2h-2h-2v2h-2h-2v2v2h-2v2v2v2h-2h-1h-1h-2v-2v-2v-2h-2v-2v-2h-2h-2v-2h-2h-2h-2v2h-2v2h-2h-2v2v21v1h1h1h3v4h4v5h7v5h5h5v-5h7v-5h4v-4h3h1h1v-1v-21v-2zM44,30h-5v4h-4v5h-7v5h-3h-3v-5h-7v-5h-4v-4h-5v-20h2h2v-2h2v-2h2v2h2h2v4h2v2v2v2h2h2h1h1h2h2v-2v-2v-2h2v-4h2h2v-2h2v2h2v2h2h2z"></path></g></g>
                </svg>
              </div>
              <p className={["project-name", theme].join(" ")}>Pixels Art</p>   
              {openPopup1 ? <Popup closePopup={() => this.closePopup(1)} svg={svgColor} theme={theme} projectId={1} project={ projetos[0] } openPopup={ this.openPopup }/> : null}
            </li>
            {/* <p>Esse projeto foi criado usando o HTML, CSS e JS. É um quadro para pintar pixeis e criar a sua própria arte, 
              apesar de ser um 5x5.</p> */}
            <li>
              <div className={['project-links', theme,].join(" ")} onClick={() => this.openPopup(2)}>
                <svg id="sc" xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
              </div>
              <p className={["project-name", theme].join(" ")}>Shopping Cart</p>
              { openPopup2 ? <Popup closePopup={() => this.closePopup(2) } svg={svgColor} theme={theme} projectId={2} project={ projetos[1] } openPopup={ this.openPopup }/> : null}
            </li>
            {/* <p>Esse projeto foi criado usando HTML, CSS e JS. É uma página de compra que utiliza a API do Mercado Livre, o que tornou
              o processo de criação desse projeto um pouco mais difícil, já que foi minha primeira vez lidando com API.
            </p> */}
            <li>
              <div className={['project-links', theme].join(" ")} onClick={() => this.openPopup(3)}>
                <svg id="sc" xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-list-check" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
                </svg>
              </div>
              <p className={["project-name", theme].join(" ")}>To Do List</p>
              {openPopup3 ? <Popup closePopup={() => this.closePopup(3)} svg={svgColor} theme={theme} projectId={3} project={ projetos[2] } openPopup={ this.openPopup }/> : null}
            </li>
            {/* <p>Esse projeto foi criado usando HTML, CSS e JS. É uma lista de tarefas.</p> */}
            <li>
              <div className={['project-links', theme].join(" ")} onClick={() => this.openPopup(4)}>
                <svg id="sc" xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-headphones" viewBox="0 0 16 16">
                  <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5z"/>
                </svg>
              </div>
              <p className={["project-name", theme].join(" ")}>FakeTunes</p>
              {openPopup4 ? <Popup closePopup={() => this.closePopup(4)} svg={svgColor} theme={theme} projectId={4} project={ projetos[3] } openPopup={ this.openPopup }/> : null}
            </li>
            {/* <p>Esse projeto foi criado usando REACT. Esse projeto é facilmente um dos meu favoritos, porque todo requisito era muito
              desafiador e eu tive que trabalhar bastante e quando terminei, estave exausto, mas feliz porque esse projeto me forçou a 
              aprender coisas novas. É uma versão da Trybe do ITunes. 
            </p> */}
            <li>
              <div className={['project-links', theme].join(" ")} onClick={() => this.openPopup(5)}>
                <svg id="sc" xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-person-vcard" viewBox="0 0 16 16">
                  <path d="M5  8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z"/>
                  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z"/>
                </svg>
              </div>
              <p className={["project-name", theme].join(" ")}>Trunfo</p>
              {openPopup5 ? <Popup closePopup={() => this.closePopup(5)} svg={svgColor} theme={theme} projectId={5} project={ projetos[4] } openPopup={ this.openPopup }/> : null}
            </li>
            {/* <p>Esse projeto foi criado usando REACT. Particularmente, esse foi o projeto mais difícil que eu fiz, não por causa
              da complexidade do código, já que esses méritos são do TrybeTunes, mas porque foi meu primeiro projeto usando
              REACT. É um gerador de cartas de baralho do jogo Trunfo
            </p> */}
             <li>
              <div className={['project-links', theme].join(" ")} onClick={() => this.openPopup(6)}>
                <svg id="sc" xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-wallet2" viewBox="0 0 16 16">
                  <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>
                </svg>
              </div>
              <p className={["project-name", theme].join(" ")}>E-Wallet</p>
              {openPopup6 ? <Popup closePopup={() => this.closePopup(6)} svg={svgColor} theme={theme} projectId={6} project={ projetos[5] } openPopup={ this.openPopup }/> : null}
            </li>
            </div>
            <div className="lower-row">
            <li>
              <div className={['project-links', theme].join(" ")} onClick={() => this.openPopup(7)}>
                <svg id="sc" xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-box-seam" viewBox="0 0 16 16">
                  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                </svg>
              </div>
              <p className={["project-name", theme].join(" ")}>Dianome</p>
              {openPopup7 ? <Popup closePopup={() => this.closePopup(7)} svg={svgColor} theme={theme} projectId={7} project={ projetos[6] } openPopup={ this.openPopup }/> : null}
            </li>
            <li>
              <div className={['project-links', theme].join(" ")} onClick={() => this.openPopup(8)}>
                <svg id="sc" xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-dice-6-fill" viewBox="0 0 16 16">
                  <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm1 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M4 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                </svg>
              </div>
              <p className={["project-name", theme].join(" ")}>D&D</p>
              {openPopup8 ? <Popup closePopup={() => this.closePopup(8)} svg={svgColor} theme={theme} projectId={8} project={ projetos[7] } openPopup={ this.openPopup }/> : null}
            </li>
            <li>
              <div className={['project-links', theme].join(" ")} onClick={() => this.openPopup(9)}>
                <svg id="sc" xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-globe-americas" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
                </svg>
              </div>
              <p className={["project-name", theme].join(" ")}>Planet Search</p>
              {openPopup9 ? <Popup closePopup={() => this.closePopup(9)} svg={svgColor} theme={theme} projectId={9} project={ projetos[8] } openPopup={ this.openPopup }/> : null}
            </li>
            <li>
              <div className={['project-links', theme].join(" ")} onClick={() => this.openPopup(10)}>
                <svg id="sc" xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-shop" viewBox="0 0 16 16">
                  <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"/>
                </svg>
              </div>
              <p className={["project-name", theme].join(" ")}>Store Manager</p>
              {openPopup10 ? <Popup closePopup={() => this.closePopup(10)} svg={svgColor} theme={theme} projectId={10} project={ projetos[9] } openPopup={ this.openPopup }/> : null}
            </li>
            <li>
              <div className={['project-links', theme].join(" ")} onClick={() => this.openPopup(11)}>
                <svg id="sc" xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-globe2" viewBox="0 0 16 16">
                  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
                </svg> 
              </div>
              <p className={["project-name", theme].join(" ")}>Blog Api</p>
              {openPopup11 ? <Popup closePopup={() => this.closePopup(11)} svg={svgColor} theme={theme} projectId={11} project={ projetos[10] } openPopup={ this.openPopup }/> : null}
            </li>
            <li>
              <div className={['project-links', theme].join(" ")} onClick={() => this.openPopup(12)}>
                <svg className="sofa" id="sc" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M8.90473 4.25001C8.93606 4.25001 8.96781 4.25002 9 4.25002H15C15.0322 4.25002 15.0639 4.25001 15.0953 4.25001C15.9333 4.24988 16.4668 4.24981 16.9267 4.34129C18.811 4.71609 20.2839 6.18906 20.6587 8.07334L19.9231 8.21966L20.6587 8.07334C20.7284 8.4234 20.7449 8.81605 20.7488 9.35321C21.9037 9.67929 22.75 10.7408 22.75 12V14.4445C22.75 15.9742 21.9522 17.3176 20.75 18.0813V19C20.75 19.4142 20.4142 19.75 20 19.75C19.5858 19.75 19.25 19.4142 19.25 19V18.6748C18.989 18.7242 18.7198 18.75 18.4444 18.75H5.55556C5.28024 18.75 5.01095 18.7242 4.75 18.6748V19C4.75 19.4142 4.41421 19.75 4 19.75C3.58579 19.75 3.25 19.4142 3.25 19V18.0813C2.04779 17.3176 1.25 15.9742 1.25 14.4445V12C1.25 10.7408 2.09631 9.67929 3.25116 9.35321C3.25505 8.81605 3.27164 8.4234 3.34127 8.07334C3.71608 6.18906 5.18904 4.71609 7.07332 4.34129C7.53324 4.24981 8.06666 4.24988 8.90473 4.25001ZM4.75168 9.35401C5.90507 9.68103 6.75 10.7419 6.75 12V13.2C6.75 13.2276 6.77239 13.25 6.8 13.25H17.2C17.2276 13.25 17.25 13.2276 17.25 13.2V12C17.25 10.7419 18.0949 9.68103 19.2483 9.35401C19.2443 8.84457 19.231 8.58419 19.1876 8.36598C18.9311 7.07673 17.9233 6.06891 16.634 5.81247C16.3384 5.75365 15.9653 5.75002 15 5.75002H9C8.03474 5.75002 7.66164 5.75365 7.36596 5.81247C6.07671 6.06891 5.06889 7.07673 4.81245 8.36597C4.76904 8.58419 4.75569 8.84457 4.75168 9.35401ZM4 10.75C3.30964 10.75 2.75 11.3097 2.75 12V14.4445C2.75 15.9939 4.00609 17.25 5.55556 17.25H18.4444C19.9939 17.25 21.25 15.9939 21.25 14.4445V12C21.25 11.3097 20.6904 10.75 20 10.75C19.3096 10.75 18.75 11.3097 18.75 12V13.2C18.75 14.0561 18.056 14.75 17.2 14.75H6.8C5.94396 14.75 5.25 14.0561 5.25 13.2V12C5.25 11.3097 4.69036 10.75 4 10.75Z" fill={svgColor}></path> </g>
                </svg>
              </div>
              <p className={["project-name", theme].join(" ")}>Sofa Cleaner</p>
              {openPopup12 ? <Popup closePopup={() => this.closePopup(12)} svg={svgColor} theme={theme} projectId={12} project={ projetos[11] } openPopup={ this.openPopup }/> : null}
            </li>
            </div>
          </ul>
        </nav>
        <h2 className={['title-text', theme].join(" ")}>Skills</h2>
        <section className={theme} id="skills-section">
          <ul className="skills-list">
            <div className='upper-row'>
              <li title="Javascript">
              <svg id="js" className={['skills', theme].join(" ")} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                <g fill={svgColor} fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={styles}><g transform="scale(5.12,5.12)"><path d="M6.66797,4c-1.46094,0 -2.66797,1.20703 -2.66797,2.66797v36.66406c0,1.46094 1.20703,2.66797 2.66797,2.66797h36.66406c1.46094,0 2.66797,-1.20312 2.66797,-2.66797v-36.66406c0,-1.46094 -1.20312,-2.66797 -2.66797,-2.66797zM6.66797,6h36.66406c0.37109,0 0.66797,0.29688 0.66797,0.66797v36.66406c0,0.37109 -0.29687,0.66797 -0.66797,0.66797h-36.66406c-0.37109,0 -0.66797,-0.29687 -0.66797,-0.66797v-36.66406c0,-0.37109 0.29688,-0.66797 0.66797,-0.66797zM23,23v12.57422c0,1.92969 -0.73047,2.42578 -2,2.42578c-1.32812,0 -2.25,-0.82812 -2.85937,-1.90234l-3.14062,1.90234c0.91016,1.92578 3.14063,4 6.23438,4c3.42188,0 5.76563,-1.82031 5.76563,-5.81641v-13.18359zM35.45313,23c-3.40625,0 -5.58984,2.17969 -5.58984,5.04297c0,3.10547 1.83203,4.57422 4.58594,5.74609l0.95313,0.41016c1.73828,0.76172 2.59766,1.22656 2.59766,2.53516c0,1.08984 -0.82812,1.87891 -2.41016,1.87891c-1.88281,0 -2.77344,-1.27734 -3.58984,-2.61328l-3,2c1.12109,2.21484 3.13281,4 6.67578,4c3.625,0 6.32422,-1.88281 6.32422,-5.31641c0,-3.1875 -1.82812,-4.60547 -5.07422,-5.99609l-0.95312,-0.40625c-1.63672,-0.71094 -2.34766,-1.17187 -2.34766,-2.31641c0,-0.92578 0.71094,-1.63672 1.82813,-1.63672c1.09766,0 1.80078,0.46484 2.45313,1.63672l2.97266,-1.90625c-1.25391,-2.21484 -3,-3.05859 -5.42578,-3.05859z"></path></g></g>
              </svg>
            </li>
            <li title="HTML">
              <svg id='html' className={['skills', theme].join(" ")} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                <g fill={svgColor} fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={styles}><g transform="scale(5.12,5.12)"><path d="M5.28125,2c-0.51562,0.09375 -0.87109,0.57422 -0.8125,1.09375l3.53125,39.4375c0.04688,0.40234 0.33203,0.73438 0.71875,0.84375l16,4.59375c0.18359,0.05469 0.37891,0.05469 0.5625,0l16,-4.59375c0.38672,-0.10937 0.67188,-0.44141 0.71875,-0.84375l3.53125,-39.4375c0.02734,-0.28125 -0.06641,-0.55859 -0.25781,-0.76953c-0.19141,-0.20703 -0.46094,-0.32422 -0.74219,-0.32422h-39.0625c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0zM6.5625,4h36.875l-3.34375,37.65625l-15.09375,4.28125l-15.09375,-4.28125zM12.53125,10.0625c-0.51562,0.09375 -0.87109,0.57422 -0.8125,1.09375l1.34375,14.78125c0.03125,0.51563 0.45313,0.92188 0.96875,0.9375h15.96875l-0.4375,4.59375l-4.53125,0.96875l-4.59375,-0.96875l-0.15625,-1.625c-0.03125,-0.52734 -0.47266,-0.9375 -1,-0.9375h-4.875c-0.28125,0 -0.55078,0.11719 -0.74219,0.32422c-0.19141,0.21094 -0.28516,0.48828 -0.25781,0.76953l0.5625,6.125c0.03125,0.40234 0.30078,0.75 0.6875,0.875l9.9375,3.03125l0.125,0.03125c0.18359,0.05469 0.37891,0.05469 0.5625,0l10.0625,-3.0625c0.39844,-0.11328 0.68359,-0.46094 0.71875,-0.875l1.3125,-15.03125c0.02734,-0.27734 -0.0625,-0.55078 -0.24609,-0.75781c-0.18359,-0.20703 -0.44531,-0.32812 -0.72266,-0.33594h-17.03125l-0.25,-3.09375h17.71875c0.51953,0.00391 0.95313,-0.39062 1,-0.90625l0.4375,-4.84375c0.02734,-0.28125 -0.06641,-0.55859 -0.25781,-0.76953c-0.19141,-0.20703 -0.46094,-0.32422 -0.74219,-0.32422h-24.5625c-0.0625,-0.00781 -0.125,-0.00781 -0.1875,0zM13.8125,12.0625h22.375l-0.25,2.84375h-17.90625c-0.28125,0 -0.55078,0.11719 -0.74219,0.32422c-0.19141,0.21094 -0.28516,0.48828 -0.25781,0.76953l0.46875,5.09375c0.04688,0.50391 0.46484,0.89453 0.96875,0.90625h16.84375l-1.1875,13.28125l-9.125,2.75l-9.125,-2.75l-0.375,-4.375h2.875l0.125,1.46875c0.03125,0.44141 0.34766,0.80859 0.78125,0.90625l5.5625,1.15625c0.13281,0.02734 0.27344,0.02734 0.40625,0l5.46875,-1.15625c0.43359,-0.09766 0.75,-0.46484 0.78125,-0.90625l0.59375,-6.4375c0.01563,-0.27734 -0.08203,-0.54687 -0.26953,-0.74609c-0.19141,-0.20312 -0.45312,-0.31641 -0.73047,-0.31641h-16.15625z"></path></g></g>
              </svg>
            </li>
            <li title="CSS">
              <svg id='css' className={['skills', theme].join(" ")} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                <g fill={svgColor} fillRule="evenodd" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={styles}><g transform="scale(5.12,5.12)"><path d="M39,40l-14,4l-14,-4l-3,-34h34c-1,11.33203 -2,22.66797 -3,34zM39.81641,8h-29.63281l2.6875,30.45313l12.12891,3.46875l12.12891,-3.46875zM16.80078,28h4l0.09766,2.5l4.10156,1.39844l4.10156,-1.39844l0.29688,-4.5h-8.79687l-0.20312,-4h9.20313l0.29688,-4h-13.79687l-0.30078,-4h18.30078l-0.5,8l-0.70312,11.5l-7.89844,2.60156l-7.89844,-2.60156z"></path></g></g>
              </svg>
            </li>
            <li title="React.js">
              <svg id='react' className={['skills', theme].join(" ")} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                <g fill={svgColor} fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={styles}><g transform="scale(8.53333,8.53333)"><path d="M10.67969,4.18164c-0.611,0 -1.17769,0.13678 -1.67969,0.42578c-1.56887,0.90579 -2.16603,3.11312 -1.84961,5.86133c-2.53769,1.10008 -4.15039,2.71992 -4.15039,4.53125c0,1.81133 1.6127,3.43117 4.15039,4.53125c-0.31626,2.7481 0.28074,4.95554 1.84961,5.86133c0.501,0.289 1.06769,0.42578 1.67969,0.42578c1.30263,0 2.80816,-0.65377 4.32031,-1.77539c1.51228,1.12162 3.01964,1.77539 4.32227,1.77539c0.611,0 1.17769,-0.13678 1.67969,-0.42578c1.56886,-0.90579 2.16602,-3.11315 1.84961,-5.86133c2.53674,-1.10007 4.14844,-2.72031 4.14844,-4.53125c0,-1.81133 -1.6127,-3.43117 -4.15039,-4.53125c0.31626,-2.7481 -0.28074,-4.95554 -1.84961,-5.86133c-0.501,-0.29 -1.06769,-0.42578 -1.67969,-0.42578c-1.30263,0 -2.80816,0.65377 -4.32031,1.77539c-1.51224,-1.12162 -3.01814,-1.77539 -4.32031,-1.77539zM10.67969,5.93164c0.78163,0 1.81527,0.41561 2.9375,1.18555c-0.65982,0.62268 -1.30604,1.33074 -1.92774,2.11914c-1.00837,0.14459 -1.95911,0.35536 -2.83984,0.61914c-0.00473,-0.06108 -0.01593,-0.12517 -0.01953,-0.18555c-0.107,-1.78 0.28392,-3.10688 1.04492,-3.54687c0.225,-0.13 0.48769,-0.19141 0.80469,-0.19141zM19.32031,5.93164c0.316,0 0.57969,0.06141 0.80469,0.19141c0.761,0.439 1.15192,1.76687 1.04492,3.54688c-0.00363,0.06038 -0.01478,0.12447 -0.01953,0.18555c-0.88129,-0.26394 -1.83272,-0.47454 -2.8418,-0.61914c-0.62169,-0.78829 -1.26598,-1.49653 -1.92578,-2.11914c1.12215,-0.76981 2.15627,-1.18555 2.9375,-1.18555zM15,8.22852c0.27108,0.24674 0.54027,0.50752 0.8125,0.79297c-0.26978,-0.00906 -0.53813,-0.02148 -0.8125,-0.02148c-0.27371,0 -0.5414,0.01247 -0.81055,0.02148c0.27199,-0.28515 0.53972,-0.54647 0.81055,-0.79297zM15,10.75c0.82869,0 1.61413,0.04632 2.35938,0.12695c0.45449,0.61774 0.9024,1.27086 1.32227,1.99805c0.40243,0.69703 0.7583,1.41049 1.07227,2.125c-0.31401,0.71494 -0.66959,1.4295 -1.07227,2.12695c-0.41856,0.72509 -0.86536,1.374 -1.31836,1.99023c-0.77157,0.08442 -1.56306,0.13281 -2.36328,0.13281c-0.82869,0 -1.61413,-0.04632 -2.35937,-0.12695c-0.45449,-0.61774 -0.9024,-1.26891 -1.32227,-1.99609c-0.40267,-0.69745 -0.75816,-1.41201 -1.07226,-2.12695c0.31388,-0.71451 0.66983,-1.42797 1.07226,-2.125c0.41872,-0.72509 0.86525,-1.37595 1.31836,-1.99219c0.77157,-0.08442 1.56306,-0.13281 2.36328,-0.13281zM19.74609,11.29102c0.39675,0.09579 0.77816,0.19919 1.13672,0.31445c-0.08123,0.36705 -0.18058,0.74114 -0.29297,1.11914c-0.12868,-0.24147 -0.25347,-0.48371 -0.39258,-0.72461c-0.14313,-0.2478 -0.30202,-0.47044 -0.45117,-0.70898zM10.25195,11.29297c-0.14865,0.23781 -0.30655,0.46002 -0.44922,0.70703c-0.13907,0.24094 -0.26394,0.48311 -0.39258,0.72461c-0.11265,-0.37878 -0.21361,-0.75331 -0.29492,-1.12109c0.36514,-0.11537 0.7456,-0.21753 1.13672,-0.31055zM7.46875,12.24609c0.2107,0.88962 0.50298,1.81182 0.87891,2.75195c-0.37513,0.9379 -0.66618,1.85841 -0.87695,2.74609c-1.74147,-0.84094 -2.7207,-1.88777 -2.7207,-2.74414c0,-0.879 0.95188,-1.88073 2.54688,-2.67773c0.05444,-0.02724 0.11625,-0.04957 0.17188,-0.07617zM22.5293,12.25586c1.74147,0.84094 2.7207,1.88777 2.7207,2.74414c0,0.879 -0.95188,1.88073 -2.54687,2.67773c-0.05444,0.02723 -0.11625,0.04957 -0.17187,0.07617c-0.21082,-0.89014 -0.50071,-1.81321 -0.87695,-2.75391c0.37468,-0.93709 0.66441,-1.8572 0.875,-2.74414zM15,13c-1.105,0 -2,0.895 -2,2c0,1.105 0.895,2 2,2c1.105,0 2,-0.895 2,-2c0,-1.105 -0.895,-2 -2,-2zM9.41016,17.27539c0.12872,0.24156 0.25537,0.48362 0.39453,0.72461c0.14297,0.24762 0.30023,0.47061 0.44922,0.70898c-0.39675,-0.09579 -0.77816,-0.19919 -1.13672,-0.31445c0.08129,-0.36728 0.18048,-0.7409 0.29297,-1.11914zM20.58984,17.27734c0.11252,0.37842 0.21367,0.75171 0.29492,1.11914c-0.36514,0.11537 -0.7456,0.21753 -1.13672,0.31055c0.14865,-0.23781 0.30655,-0.46002 0.44922,-0.70703c0.13878,-0.24044 0.26418,-0.48166 0.39258,-0.72266zM8.84961,20.14453c0.88129,0.26394 1.83272,0.47454 2.8418,0.61914c0.62188,0.78867 1.26568,1.49826 1.92578,2.12109c-1.12215,0.76972 -2.15592,1.18555 -2.9375,1.18555c-0.316,0 -0.57969,-0.06336 -0.80469,-0.19336c-0.761,-0.439 -1.15192,-1.76492 -1.04492,-3.54492c0.00366,-0.06101 0.01472,-0.12578 0.01953,-0.1875zM21.15039,20.14453c0.00479,0.06172 0.01589,0.12649 0.01953,0.1875c0.107,1.78 -0.28392,3.10492 -1.04492,3.54492c-0.225,0.13 -0.48769,0.19336 -0.80469,0.19336c-0.78158,0 -1.81535,-0.4157 -2.9375,-1.18555c0.66015,-0.6229 1.30573,-1.33231 1.92773,-2.12109c1.00837,-0.14459 1.95911,-0.35536 2.83984,-0.61914zM14.1875,20.97852c0.26978,0.00906 0.53813,0.02148 0.8125,0.02148c0.27437,0 0.54272,-0.01242 0.8125,-0.02148c-0.27223,0.28545 -0.54142,0.54625 -0.8125,0.79297c-0.27108,-0.24674 -0.54027,-0.50752 -0.8125,-0.79297z"></path></g></g>
              </svg>
            </li>
            <li title="Typescript">
              <svg id='ts' className={['skills', theme].join(" ")} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                <g fill={svgColor} fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={styles}><g transform="scale(5.12,5.12)"><path d="M5,4c-0.55226,0.00006 -0.99994,0.44774 -1,1v40c0.00006,0.55226 0.44774,0.99994 1,1h40c0.55226,-0.00006 0.99994,-0.44774 1,-1v-40c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM6,6h38v38h-38zM15,23v3.44531h5v15.55469h4v-15.55469h5v-3.44531zM36.69141,23.00977c-3.11462,-0.0124 -6.67383,0.93145 -6.67383,5.31445c0,5.73 7.7207,5.73141 7.7207,8.31641c0,0.245 0.10391,2.02539 -2.62109,2.02539c-2.725,0 -4.99609,-1.71289 -4.99609,-1.71289v4.1582c0,0 11.88086,3.84273 11.88086,-4.82227c-0.001,-5.625 -7.79297,-5.34367 -7.79297,-8.13867c0,-1.083 0.76939,-2.0957 2.90039,-2.0957c2.131,0 4.01758,1.25781 4.01758,1.25781l0.14063,-3.70508c0,0 -2.15369,-0.58801 -4.57617,-0.59766z"></path></g></g>
              </svg>
            </li>
            <li title="MYSQL">
              <svg id='mysql' className={['skills', theme].join(" ")} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                <g fill={svgColor} fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={styles}><g transform="scale(5.12,5.12)"><path d="M31.16797,8c-0.46875,-0.01172 -0.87891,0.16797 -1.08984,0.6875c-0.35937,0.87109 0.53516,1.72266 0.85547,2.16797c0.22266,0.30859 0.51172,0.65625 0.67188,1.00391c0.10547,0.23047 0.12109,0.46094 0.21094,0.70313c0.22266,0.59766 0.57813,1.27734 0.86328,1.83203c0.14453,0.28125 0.30469,0.57422 0.48828,0.82422c0.11328,0.15234 0.30469,0.22266 0.33594,0.45703c-0.1875,0.26563 -0.19922,0.67578 -0.30469,1.01172c-0.47656,1.50391 -0.29687,3.375 0.39453,4.48438c0.21484,0.34375 0.71875,1.07422 1.40625,0.79688c0.60156,-0.24609 0.46875,-1.00781 0.64063,-1.68359c0.03906,-0.14844 0.01563,-0.26172 0.09375,-0.36328v0.03125c0.17969,0.36719 0.36328,0.73438 0.54688,1.09766c0.41016,0.65625 1.13281,1.33984 1.74219,1.80469c0.31641,0.23828 0.56641,0.65234 0.97656,0.79297v-0.03125h-0.03125c-0.07812,-0.125 -0.20312,-0.17578 -0.30469,-0.27344c-0.23828,-0.23437 -0.50391,-0.52734 -0.69922,-0.79687c-0.55859,-0.75391 -1.05078,-1.58203 -1.49609,-2.44141c-0.21484,-0.41016 -0.40234,-0.86328 -0.58203,-1.28125c-0.07031,-0.16406 -0.07031,-0.40625 -0.21484,-0.49219c-0.19922,0.30859 -0.48828,0.55469 -0.64062,0.91797c-0.24219,0.57813 -0.27734,1.28516 -0.36719,2.01563c-0.05469,0.01953 -0.03125,0.00391 -0.05859,0.03125c-0.42578,-0.10547 -0.57812,-0.54297 -0.73437,-0.91797c-0.39844,-0.94922 -0.47656,-2.48047 -0.12109,-3.57031c0.08984,-0.28516 0.5,-1.17578 0.33594,-1.4375c-0.07812,-0.26172 -0.34375,-0.41016 -0.48828,-0.60937c-0.18359,-0.24609 -0.36328,-0.57031 -0.48828,-0.85547c-0.32812,-0.74219 -0.63672,-1.60156 -0.98437,-2.35156c-0.16406,-0.35937 -0.44141,-0.71875 -0.67187,-1.03906c-0.25391,-0.35156 -0.53516,-0.60937 -0.73437,-1.03906c-0.06641,-0.14844 -0.16406,-0.39062 -0.05859,-0.54687c0.03125,-0.10547 0.07813,-0.14844 0.18359,-0.18359c0.17578,-0.13672 0.66797,0.04297 0.85547,0.12109c0.48828,0.20313 0.89844,0.39844 1.3125,0.67188c0.19922,0.13281 0.39844,0.38672 0.64063,0.46094h0.27344c0.43359,0.09766 0.91406,0.02734 1.3125,0.15234c0.71094,0.21484 1.34766,0.55078 1.92188,0.91406c1.76172,1.10938 3.20313,2.69141 4.18359,4.57813c0.16016,0.30469 0.23047,0.59766 0.37109,0.91797c0.27734,0.64844 0.63281,1.32031 0.91406,1.95313c0.27734,0.63672 0.55078,1.27344 0.94531,1.80078c0.20703,0.27734 1.01172,0.42969 1.375,0.58203c0.25391,0.10938 0.67578,0.22266 0.91406,0.36719c0.46484,0.27734 0.91016,0.60938 1.34375,0.91797c0.21875,0.15234 0.88281,0.48438 0.91797,0.76172c-1.07422,-0.02734 -1.89453,0.07031 -2.59375,0.36719c-0.19922,0.08594 -0.51953,0.08594 -0.55078,0.33594c0.10547,0.11328 0.125,0.28516 0.21094,0.42578c0.16797,0.26953 0.44922,0.63281 0.70313,0.82422c0.27734,0.20703 0.55859,0.42969 0.85547,0.61328c0.52344,0.31641 1.10938,0.5 1.61719,0.82031c0.29688,0.19141 0.59766,0.42969 0.88672,0.64063c0.14453,0.10938 0.23828,0.27344 0.42578,0.33984v-0.03125c-0.09766,-0.125 -0.12109,-0.29687 -0.21094,-0.42578l-0.40234,-0.40234c-0.38672,-0.51172 -0.87891,-0.96484 -1.40234,-1.33984c-0.41797,-0.30078 -1.35156,-0.70703 -1.52344,-1.19141l-0.03125,-0.03125c0.29297,-0.03125 0.64063,-0.14062 0.91406,-0.21484c0.46094,-0.12109 0.86719,-0.08984 1.33984,-0.21094c0.21484,-0.0625 0.42969,-0.125 0.64453,-0.18359v-0.125c-0.23828,-0.24219 -0.41016,-0.57031 -0.67187,-0.79297c-0.68359,-0.58203 -1.42969,-1.16406 -2.19922,-1.64844c-0.42578,-0.26953 -0.95312,-0.44531 -1.40234,-0.67187c-0.15234,-0.07812 -0.41797,-0.11719 -0.51953,-0.24609c-0.23828,-0.30078 -0.36719,-0.68359 -0.55078,-1.03516c-0.38281,-0.73828 -0.75781,-1.54297 -1.09766,-2.32031c-0.23047,-0.52734 -0.38281,-1.05078 -0.67187,-1.52734c-1.38672,-2.27734 -2.87891,-3.65625 -5.19141,-5.00781c-0.49219,-0.28906 -1.08203,-0.39844 -1.70703,-0.54687c-0.33984,-0.02344 -0.67187,-0.04297 -1.01172,-0.0625c-0.20312,-0.08594 -0.41797,-0.33594 -0.60937,-0.46094c-0.48047,-0.30078 -1.42578,-0.82422 -2.20703,-0.83594zM34.47656,11.3125c-0.22266,-0.00391 -0.38281,0.02734 -0.55078,0.0625v0.03125h0.03125c0.10547,0.21875 0.29688,0.35938 0.42969,0.54688c0.10156,0.21484 0.19922,0.42969 0.30078,0.64453l0.03125,-0.03125c0.1875,-0.13281 0.27734,-0.34766 0.27734,-0.67187c-0.07812,-0.07812 -0.08984,-0.17969 -0.15234,-0.27344c-0.08984,-0.12891 -0.25781,-0.19922 -0.36719,-0.30859zM1.86719,23.99609c-0.30078,0.01172 -0.62891,0.07031 -0.98438,0.18359c-0.59375,0.17969 -0.88672,0.53516 -0.88672,1.25781v7.5625h2.00391v-7.37891l2.77734,6.30859c0.34375,0.78516 0.8125,1.06641 1.73047,1.06641c0.92188,0 1.37109,-0.28125 1.71484,-1.06641l2.77734,-6.14844v7.21875h2v-7.5625c0,-0.72266 -0.28906,-1.07812 -0.88672,-1.25781c-1.42187,-0.44922 -2.37891,-0.0625 -2.80859,0.91016l-2.85156,6.41406l-2.75781,-6.41406c-0.3125,-0.73047 -0.9375,-1.12891 -1.82812,-1.09375zM26.24609,24c-0.78906,0 -3.24609,0.09375 -3.24609,2v1.23438c0,0.875 0.76953,1.58984 2.4375,1.76563c0.1875,0.01172 0.375,0.02734 0.5625,0.02734c0,0 1.94531,-0.03906 2,-0.02734c1.125,0 1,0.875 1,1v1c0,0.13672 -0.03125,1 -1.01172,1h-4.98828v1h5.00781c0.65625,0 1.29297,-0.13672 1.80078,-0.375c0.84375,-0.38672 1.19141,-0.91016 1.19141,-1.59766v-1.42969c0,-1.53516 -1.90625,-1.59766 -3,-1.59766h-2c-0.78516,0 -0.90625,-0.47656 -1,-1v-1c0.09375,-0.39844 0.26953,-0.9375 0.96484,-1h5.03516v-1zM33.98047,24c-1.47656,0.20313 -1.99609,0.9375 -1.99609,2v5c0,0.97266 0.54297,1.55859 1.66016,1.86328c0.375,0.10547 0.71484,0.14844 1.03516,0.14844l2.22656,-0.01172h1.30859l1.11328,1h2.25l-1.54687,-1.39453c0.72656,-0.30078 0.95313,-0.76172 0.95313,-1.625v-4.98047c0,-1.0625 -0.69141,-1.79687 -2.16797,-2zM42,24v6.95703c0,1.20703 0.68359,1.88672 2.49219,2.02344c0.16797,0.00781 0.33984,0.01953 0.50781,0.01953h5v-1h-4.62109c-1.03125,0 -1.37891,-0.43359 -1.37891,-1.05078v-6.94922zM35.17188,25h2.57422c0.67969,0 1.13672,0.54688 1.23828,1c0,0 0.01563,4.65625 0.01563,5c0,0.34375 -0.19141,0.5 -0.19141,0.5l-0.54297,-0.5h-2.26562l1.11328,1h-1.94141c-0.69531,0 -1.08594,-0.51562 -1.1875,-1v-4.89844c0,-0.53125 0.40625,-1.10156 1.1875,-1.10156zM14,27c0.03906,0.03906 0,4.26172 0,4.34375c0.01563,0.875 1.125,1.64063 2.86328,1.65625h3.13672v0.06641c0,0.1875 0.13672,0.8125 -1,0.93359c-0.01172,0 -4.98828,0 -5,0v1h5.21484c0.88281,-0.02734 2.79688,-0.22656 2.78516,-1.75781c0,-0.02734 0.00781,-6.24219 0,-6.24219h-2v5c-0.03125,0 -2.47656,0.00781 -2.96875,0c-0.96484,-0.01562 -1.04687,-0.56641 -1.03125,-0.77734v-4.22266z"></path></g></g>
              </svg>
            </li>
          </div>
          <div className='lower-row'>
          <li title="Python">
              <svg id="python" className={['skills', theme].join(" ")} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                <g fill={svgColor} fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={styles}><g transform="scale(5.12,5.12)"><path d="M25,2c-4.05859,0 -6.8125,0.96875 -8.5625,2.375c-1.75,1.40625 -2.4375,3.21484 -2.4375,4.71875v4.90625h10v1h-14.90625c-1.82812,0 -3.68359,0.79297 -5,2.46875c-1.31641,1.67578 -2.09375,4.17578 -2.09375,7.53125c0,3.35547 0.77734,5.85547 2.09375,7.53125c1.31641,1.67578 3.17188,2.46875 5,2.46875h4.90625v5.90625c0,1.50391 0.6875,3.3125 2.4375,4.71875c1.75,1.40625 4.50391,2.375 8.5625,2.375c4.05859,0 6.8125,-0.96875 8.5625,-2.375c1.75,-1.40625 2.4375,-3.21484 2.4375,-4.71875v-4.90625h-10v-1h14.90625c1.82813,0 3.68359,-0.79297 5,-2.46875c1.31641,-1.67578 2.09375,-4.17578 2.09375,-7.53125c0,-3.35547 -0.77734,-5.85547 -2.09375,-7.53125c-1.31641,-1.67578 -3.17187,-2.46875 -5,-2.46875h-4.90625v-5.90625c0,-1.54297 -0.68359,-3.35547 -2.4375,-4.75c-1.75391,-1.39453 -4.50781,-2.34375 -8.5625,-2.34375zM25,4c3.74609,0 6.01563,0.875 7.3125,1.90625c1.29688,1.03125 1.6875,2.23047 1.6875,3.1875v11.90625c0,1.65625 -1.34375,3 -3,3h-12c-2.05859,0 -3.83203,1.26953 -4.59375,3.0625c-0.12891,0.29688 -0.24609,0.61328 -0.3125,0.9375c-0.06641,0.32422 -0.09375,0.65625 -0.09375,1v4h-4.90625c-1.26953,0 -2.44531,-0.49609 -3.40625,-1.71875c-0.96094,-1.22266 -1.6875,-3.23828 -1.6875,-6.28125c0,-3.04297 0.72656,-5.05859 1.6875,-6.28125c0.96094,-1.22266 2.13672,-1.71875 3.40625,-1.71875h16.90625v-5h-10v-2.90625c0,-0.89453 0.38672,-2.11328 1.6875,-3.15625c1.30078,-1.04297 3.57031,-1.9375 7.3125,-1.9375zM20,7c-1.10156,0 -2,0.89844 -2,2c0,1.10156 0.89844,2 2,2c1.10156,0 2,-0.89844 2,-2c0,-1.10156 -0.89844,-2 -2,-2zM36,17h4.90625c1.26953,0 2.44531,0.49609 3.40625,1.71875c0.96094,1.22266 1.6875,3.23828 1.6875,6.28125c0,3.04297 -0.72656,5.05859 -1.6875,6.28125c-0.96094,1.22266 -2.13672,1.71875 -3.40625,1.71875h-16.90625v5h10v2.90625c0,0.89453 -0.38672,2.11328 -1.6875,3.15625c-1.30078,1.04297 -3.57031,1.9375 -7.3125,1.9375c-3.74219,0 -6.01172,-0.89453 -7.3125,-1.9375c-1.30078,-1.04297 -1.6875,-2.26172 -1.6875,-3.15625v-11.90625c0,-0.20703 0.02344,-0.39844 0.0625,-0.59375c0.28125,-1.36719 1.48828,-2.40625 2.9375,-2.40625h12c2.74609,0 5,-2.25391 5,-5zM30,39c-1.10156,0 -2,0.89844 -2,2c0,1.10156 0.89844,2 2,2c1.10156,0 2,-0.89844 2,-2c0,-1.10156 -0.89844,-2 -2,-2z"></path></g></g>
              </svg>
            </li>
            <li title="GIT">
              <svg id="git" className={['skills', theme].join(" ")} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                <g fill={svgColor} fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={styles}><g transform="scale(5.12,5.12)"><path d="M25,4c0.56641,0 1.09766,0.21875 1.49609,0.62109l18.88281,18.88281c0.82813,0.82422 0.82813,2.16797 0,2.99219l-18.88281,18.88281c-0.39844,0.40234 -0.92969,0.62109 -1.49609,0.62109c-0.56641,0 -1.09766,-0.21875 -1.49609,-0.62109l-18.88281,-18.88281c-0.82813,-0.82422 -0.82813,-2.16797 0,-2.99219l12.32031,-12.32031l2.27344,2.27344c-0.54687,2.03125 0.00391,4.24609 1.54297,5.78516c0.36719,0.36719 0.78516,0.68359 1.24219,0.94531v9.62891c-1.82031,1.05078 -3,3.00781 -3,5.18359c0,3.30859 2.69141,6 6,6c3.30859,0 6,-2.69141 6,-6c0,-2.17578 -1.17969,-4.13281 -3,-5.18359v-7.57422l1.21484,1.21484c-0.54687,2.03125 0.00391,4.24609 1.54297,5.78516c1.13281,1.13281 2.64063,1.75781 4.24219,1.75781c1.60156,0 3.10938,-0.625 4.24219,-1.75781c2.33984,-2.33984 2.33984,-6.14453 0,-8.48437c-1.12891,-1.12891 -2.625,-1.75 -4.22266,-1.75c-0.52734,0 -1.05469,0.07031 -1.5625,0.20703l-2.67187,-2.67187c0.54688,-2.03125 -0.00391,-4.24609 -1.54297,-5.78516c-1.12891,-1.12891 -2.625,-1.75 -4.22266,-1.75c-0.52734,0 -1.05469,0.07031 -1.5625,0.20703l-2.27344,-2.27344l2.32031,-2.32031c0.39844,-0.40234 0.92969,-0.62109 1.49609,-0.62109M25,2c-1.05469,0 -2.10937,0.40234 -2.91016,1.20703l-3.73437,3.73437l4.62109,4.62109c0.62891,-0.36719 1.33594,-0.55469 2.04297,-0.55469c1.01563,0 2.03125,0.38672 2.80859,1.16406c1.31641,1.31641 1.50781,3.31641 0.60547,4.84766l4.54297,4.54297c0.62891,-0.36719 1.33594,-0.55469 2.04297,-0.55469c1.01563,0 2.03125,0.38672 2.80859,1.16406c1.5625,1.5625 1.5625,4.09375 0,5.65625c-0.78125,0.78125 -1.80469,1.17188 -2.82812,1.17188c-1.02344,0 -2.04687,-0.39062 -2.82812,-1.17187c-1.31641,-1.31641 -1.50781,-3.31641 -0.60547,-4.85156l-4.54297,-4.54297c-0.32422,0.19141 -0.66797,0.33203 -1.02344,0.42188v12.28516c1.72266,0.44531 3,1.99609 3,3.85938c0,2.21094 -1.78906,4 -4,4c-2.20703,0 -4,-1.78906 -4,-4c0,-1.86328 1.27734,-3.41406 3,-3.85937v-12.28516c-0.66797,-0.17187 -1.30469,-0.50391 -1.82812,-1.02734c-1.31641,-1.31641 -1.50781,-3.31641 -0.60547,-4.84766l-4.625,-4.625l-13.73437,13.73438c-1.60938,1.60547 -1.60938,4.21484 0,5.82031l18.88281,18.88281c0.80078,0.80469 1.85547,1.20703 2.91016,1.20703c1.05469,0 2.10938,-0.40234 2.91016,-1.20703l18.88281,-18.88281c1.60938,-1.60547 1.60938,-4.21484 0,-5.82031l-18.88281,-18.88281c-0.80078,-0.80469 -1.85547,-1.20703 -2.91016,-1.20703z"></path></g></g>
              </svg>
            </li>
            <li title="REDUX">
              <svg id="redux" className={['skills', theme].join(" ")} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                <g fill={svgColor} fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={styles}><g transform="scale(5.12,5.12)"><path d="M24,2c-7.168,0 -13,8.29233 -13,18.48633c0,5.09469 1.485,9.66818 3.8418,13.00586c-0.56313,0.7336 -0.8418,1.62253 -0.8418,2.50781c0,0.97222 0.31868,1.95788 1.00195,2.72656c0.68327,0.76868 1.74805,1.27344 2.99805,1.27344c1.25,0 2.31477,-0.50476 2.99805,-1.27344c0.68327,-0.76868 1.00195,-1.75434 1.00195,-2.72656c0,-0.97222 -0.31868,-1.95788 -1.00195,-2.72656c-0.68327,-0.76868 -1.74805,-1.27344 -2.99805,-1.27344c-0.58208,0 -1.11768,0.11792 -1.59961,0.3125c-2.08268,-2.99471 -3.40039,-7.16846 -3.40039,-11.82617c0,-9.091 4.935,-16.48633 11,-16.48633c5.419,0 9.92322,5.90939 10.82422,13.65039c0.707,0.269 1.40852,0.57225 2.10352,0.90625c-0.681,-9.29 -6.21773,-16.55664 -12.92773,-16.55664zM22,15c-1.25,0 -2.31477,0.50476 -2.99805,1.27344c-0.68327,0.76868 -1.00195,1.75434 -1.00195,2.72656c0,0.97222 0.31868,1.95788 1.00195,2.72656c0.68327,0.76868 1.74805,1.27344 2.99805,1.27344c1.25,0 2.31477,-0.50476 2.99805,-1.27344c0.42704,-0.48043 0.69619,-1.04889 0.84961,-1.64258c3.57759,-0.15386 7.59823,0.90312 11.29492,3.11914c7.894,4.732 11.87028,12.98358 8.86328,18.39258c-1.074,1.931 -2.94892,3.30189 -5.41992,3.96289c-3.462,0.928 -7.71444,0.35748 -11.77344,-1.47852c-0.586,0.471 -1.20575,0.91666 -1.84375,1.34766c3.325,1.679 6.84375,2.56836 10.09375,2.56836c1.411,0 2.77102,-0.16586 4.04102,-0.50586c3.007,-0.805 5.30739,-2.50783 6.65039,-4.92383c3.524,-6.342 -0.77498,-15.79713 -9.58398,-21.07812c-3.97605,-2.38508 -8.34435,-3.55176 -12.2832,-3.42383c-0.14255,-0.64807 -0.42592,-1.27042 -0.88867,-1.79102c-0.68327,-0.76868 -1.74805,-1.27344 -2.99805,-1.27344zM22,17c0.75,0 1.18523,0.24524 1.50195,0.60156c0.31673,0.35632 0.49805,0.87066 0.49805,1.39844c0,0.52778 -0.18132,1.04212 -0.49805,1.39844c-0.31673,0.35632 -0.75195,0.60156 -1.50195,0.60156c-0.75,0 -1.18523,-0.24524 -1.50195,-0.60156c-0.31673,-0.35632 -0.49805,-0.87066 -0.49805,-1.39844c0,-0.52778 0.18132,-1.04212 0.49805,-1.39844c0.31673,-0.35632 0.75195,-0.60156 1.50195,-0.60156zM9.16211,23.33203c-6.964,5.44 -10.06006,13.57437 -6.91406,19.23438c1.343,2.416 3.64339,4.11688 6.65039,4.92188c1.271,0.34 2.63002,0.50781 4.04102,0.50781c3.8,0 7.97158,-1.20837 11.76758,-3.48437c4.55573,-2.73123 7.83664,-6.57859 9.50586,-10.5332c1.15487,-0.05535 2.14227,-0.5287 2.78516,-1.25195c0.68327,-0.76868 1.00195,-1.75434 1.00195,-2.72656c0,-0.97222 -0.31868,-1.95788 -1.00195,-2.72656c-0.68327,-0.76868 -1.74805,-1.27344 -2.99805,-1.27344c-1.25,0 -2.31477,0.50476 -2.99805,1.27344c-0.68327,0.76868 -1.00195,1.75434 -1.00195,2.72656c0,0.97222 0.31868,1.95788 1.00195,2.72656c0.33207,0.37358 0.75828,0.68109 1.24805,0.90234c-1.56845,3.40879 -4.53476,6.74766 -8.57227,9.16797c-4.75,2.849 -10.08167,3.88172 -14.26367,2.76172c-2.472,-0.662 -4.34497,-2.03189 -5.41797,-3.96289c-2.542,-4.573 -0.08114,-11.16794 5.50586,-15.96094c-0.145,-0.751 -0.25784,-1.52073 -0.33984,-2.30273zM34,28c0.75,0 1.18523,0.24524 1.50195,0.60156c0.31673,0.35632 0.49805,0.87066 0.49805,1.39844c0,0.52778 -0.18132,1.04212 -0.49805,1.39844c-0.31673,0.35632 -0.75195,0.60156 -1.50195,0.60156c-0.75,0 -1.18523,-0.24524 -1.50195,-0.60156c-0.31673,-0.35632 -0.49805,-0.87066 -0.49805,-1.39844c0,-0.52778 0.18132,-1.04212 0.49805,-1.39844c0.31673,-0.35632 0.75195,-0.60156 1.50195,-0.60156zM18,34c0.75,0 1.18523,0.24524 1.50195,0.60156c0.31673,0.35632 0.49805,0.87066 0.49805,1.39844c0,0.52778 -0.18132,1.04212 -0.49805,1.39844c-0.31673,0.35632 -0.75195,0.60156 -1.50195,0.60156c-0.75,0 -1.18523,-0.24524 -1.50195,-0.60156c-0.31673,-0.35632 -0.49805,-0.87066 -0.49805,-1.39844c0,-0.52778 0.18132,-1.04212 0.49805,-1.39844c0.31673,-0.35632 0.75195,-0.60156 1.50195,-0.60156z"></path></g></g>
              </svg>
            </li>
            <li title="Node.js">
              <svg id="nodejs" className={['skills', theme].join(" ")} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                <g fill={svgColor} fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={styles}><g transform="scale(8,8)"><path d="M15.99414,3c-0.365,0 -0.72992,0.08953 -1.04492,0.26953l-9.91016,5.7207c-0.64,0.37 -1.03906,1.07055 -1.03906,1.81055v10.37891c0,0.75 0.39906,1.44055 1.03906,1.81055l2.60156,1.5c1.26,0.62 1.7093,0.61914 2.2793,0.61914c1.87,0 2.93945,-1.12984 2.93945,-3.08984v-10.70898c0,-0.16 -0.12906,-0.29102 -0.28906,-0.29102h-1.25c-0.17,0 -0.29101,0.13102 -0.29101,0.29102v10.69922c0,0.88 -0.90891,1.73977 -2.37891,1.00977l-2.7207,-1.57031c-0.1,-0.05 -0.16016,-0.15953 -0.16016,-0.26953v-10.36914c0,-0.12 0.06016,-0.22125 0.16016,-0.28125l9.91016,-5.71875c0.09,-0.06 0.21055,-0.06 0.31055,0l9.91016,5.71875c0.1,0.06 0.16016,0.16148 0.16016,0.27148v10.37891c0,0.11 -0.06039,0.21953 -0.15039,0.26953l-9.91992,5.73047c-0.09,0.05 -0.22055,0.05 -0.31055,0l-2.55078,-1.50977c-0.07,-0.05 -0.16828,-0.05953 -0.23828,-0.01953c-0.71,0.4 -0.84,0.44969 -1.5,0.67969c-0.16,0.05 -0.41016,0.14969 0.08984,0.42969l3.30859,1.96094c0.32,0.18 0.68102,0.2793 1.04101,0.2793c0.37,0 0.72883,-0.0993 1.04883,-0.2793l9.92188,-5.73047c0.64,-0.37 1.03906,-1.06055 1.03906,-1.81055v-10.36914c0,-0.75 -0.39906,-1.44055 -1.03906,-1.81055l-9.92188,-5.73047c-0.315,-0.18 -0.67992,-0.26953 -1.04492,-0.26953zM18.66016,11.00586c-2.83,0 -4.51953,1.19922 -4.51953,3.19922c0,2.17 1.67844,2.76906 4.39844,3.03906c3.25,0.32 3.5,0.80141 3.5,1.44141c0,1.1 -0.88852,1.57031 -2.97852,1.57031c-2.63,0 -3.21039,-0.66094 -3.40039,-1.96094c-0.02,-0.14 -0.1393,-0.24023 -0.2793,-0.24023h-1.29101c-0.16,0 -0.2793,0.13125 -0.2793,0.28125c0,1.67 0.91,3.6582 5.25,3.6582c3.14,0 4.93945,-1.23844 4.93945,-3.39844c0,-2.14 -1.45023,-2.71109 -4.49023,-3.12109c-3.09,-0.4 -3.40039,-0.61008 -3.40039,-1.33008c0,-0.6 0.27078,-1.38867 2.55078,-1.38867c2.03,0 2.78961,0.43859 3.09961,1.80859c0.03,0.13 0.1393,0.23047 0.2793,0.23047h1.29102c0.08,0 0.14898,-0.03961 0.20898,-0.09961c0.05,-0.05 0.08031,-0.1307 0.07031,-0.2207c-0.2,-2.36 -1.76922,-3.46875 -4.94922,-3.46875z"></path></g></g>
              </svg>
            </li>
            <li title="Java">
              <svg className={['skills', theme].join(" ")} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                <g fill={svgColor} fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={styles}><g transform="scale(5.12,5.12)"><path d="M28.1875,0c2.75,6.36328 -9.85937,10.29297 -11.03125,15.59375c-1.07422,4.87109 7.49219,10.53125 7.5,10.53125c-1.30078,-2.01562 -2.25781,-3.67578 -3.5625,-6.8125c-2.20703,-5.30469 13.44141,-10.10547 7.09375,-19.3125zM36.5625,8.8125c0,0 -11.0625,0.71094 -11.625,7.78125c-0.25,3.14844 2.91016,4.80469 3,7.09375c0.07422,1.87109 -1.875,3.4375 -1.875,3.4375c0,0 3.54688,-0.67578 4.65625,-3.53125c1.23047,-3.16797 -2.39844,-5.30859 -2.03125,-7.84375c0.35156,-2.42578 7.875,-6.9375 7.875,-6.9375zM19.1875,25.15625c0,0 -10.125,-0.14453 -10.125,2.71875c0,2.99219 13.25391,3.21484 22.71875,1.375c0,0 2.51563,-1.73047 3.1875,-2.375c-6.20312,1.26563 -20.34375,1.40625 -20.34375,0.3125c0,-1.00781 4.5625,-2.03125 4.5625,-2.03125zM38.65625,25.15625c-0.99219,0.07813 -2.0625,0.46094 -3.03125,1.15625c2.28125,-0.49219 4.21875,0.92188 4.21875,2.53125c0,3.625 -5.25,7.03125 -5.25,7.03125c0,0 8.125,-0.92187 8.125,-6.875c0,-2.70312 -1.87891,-4.01562 -4.0625,-3.84375zM16.75,30.71875c-1.55469,0 -3.875,1.21875 -3.875,2.375c0,2.32422 11.6875,4.11328 20.34375,0.71875l-3,-1.84375c-5.86719,1.87891 -16.67187,1.26563 -13.46875,-1.25zM18.1875,35.9375c-2.12891,0 -3.53125,1.28516 -3.53125,2.25c0,2.98438 12.71484,3.28516 17.75,0.25l-3.1875,-2.03125c-3.76172,1.58984 -13.20312,1.83203 -11.03125,-0.46875zM11.09375,38.625c-3.46875,-0.07031 -5.71875,1.48828 -5.71875,2.78125c0,6.875 35.5,6.55859 35.5,-0.46875c0,-1.16797 -1.34766,-1.73437 -1.84375,-2c2.90234,6.71875 -29.0625,6.18359 -29.0625,2.21875c0,-0.90234 2.35156,-1.76562 4.53125,-1.34375l-1.84375,-1.0625c-0.54297,-0.08203 -1.06641,-0.11328 -1.5625,-0.125zM44.625,43.25c-5.39844,5.11719 -19.07812,6.97266 -32.84375,3.8125c13.76172,5.63281 32.77734,2.47266 32.84375,-3.8125z"></path></g></g>
              </svg>
            </li>
            <li title="Springboot">
              <svg className={['skills', theme].join(" ")} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                <g fill={svgColor} fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={styles}><g transform="scale(6.4,6.4)"><path d="M63.266,-77.509l-13.88,-24.04c-1.96,-3.39 -5.61,-5.5 -9.53,-5.5h-27.76c-3.92,0 -7.57,2.11 -9.53,5.5l-13.88,24.04c-1.96,3.39 -1.96,7.61 0,11l13.88,24.04c1.96,3.4 5.61,5.5 9.53,5.5h27.76c3.92,0 7.57,-2.1 9.53,-5.5l13.88,-24.04c1.96,-3.39 1.96,-7.61 0,-11zM40.856,-58.259c-3.58,3.97 -8.49,6.31 -13.83,6.59c-0.36,0.02 -0.71,0.03 -1.07,0.03c-4.95,0 -9.66,-1.8 -13.37,-5.14c-8.2,-7.38 -8.87,-20.06 -1.48,-28.27c0.57,-0.63 1.18,-1.23 1.83,-1.78c1.25,-1.08 3.14,-0.94 4.23,0.32c1.08,1.25 0.93,3.15 -0.33,4.23c-0.44,0.38 -0.87,0.8 -1.27,1.25c-5.17,5.74 -4.71,14.62 1.04,19.79c2.78,2.51 6.36,3.78 10.11,3.58c3.74,-0.2 7.18,-1.84 9.68,-4.62c5.17,-5.74 4.7,-14.62 -1.04,-19.79c-1.23,-1.11 -1.33,-3.01 -0.22,-4.24c1.11,-1.23 3,-1.33 4.24,-0.22c8.2,7.38 8.86,20.06 1.48,28.27zM22.976,-73.039v-16.96c0,-1.66 1.35,-3 3,-3c1.66,0 3,1.34 3,3v16.96c0,1.65 -1.34,3 -3,3c-0.82,0 -1.58,-0.34 -2.12,-0.88c-0.54,-0.54 -0.88,-1.3 -0.88,-2.12zM38.096,16.701l-6.2,-10.5c-0.56,-0.95 -1.35,-1.73 -2.27,-2.27l-0.16,-0.28h-0.34c-0.87,-0.42 -1.84,-0.65 -2.83,-0.65h-12.63c-1,0 -1.96,0.23 -2.83,0.65h-0.44l-0.22,0.37c-0.85,0.54 -1.58,1.28 -2.11,2.18l-6.2,10.5c-0.57,0.97 -0.87,2.04 -0.9,3.12l-0.1,0.18l0.1,0.18c0.03,1.08 0.33,2.15 0.9,3.12l6.2,10.5c0.53,0.9 1.26,1.64 2.12,2.18l0.21,0.36h0.42c0.88,0.43 1.84,0.66 2.85,0.66h12.63c1,0 1.97,-0.23 2.85,-0.66h0.32l0.15,-0.26c0.93,-0.55 1.72,-1.32 2.28,-2.28l6.2,-10.5c0.6,-1.02 0.9,-2.16 0.9,-3.3c0,-1.14 -0.3,-2.28 -0.9,-3.3zM15.656,25.071c2.66,2.4 6.78,2.18 9.17,-0.48c2.4,-2.66 2.18,-6.78 -0.48,-9.17c-0.62,-0.56 -0.67,-1.51 -0.11,-2.12c0.55,-0.62 1.5,-0.67 2.12,-0.11c3.89,3.5 4.2,9.52 0.7,13.41c-1.87,2.08 -4.46,3.14 -7.06,3.14c-2.27,0 -4.54,-0.81 -6.35,-2.44c-3.89,-3.5 -4.21,-9.52 -0.7,-13.41c0.27,-0.3 0.56,-0.59 0.86,-0.85c0.63,-0.54 1.58,-0.46 2.12,0.16c0.54,0.63 0.47,1.58 -0.16,2.12c-0.21,0.18 -0.41,0.37 -0.6,0.58c-2.39,2.66 -2.17,6.78 0.49,9.17zM18.496,18.501v-7c0,-0.83 0.68,-1.5 1.5,-1.5c0.83,0 1.5,0.67 1.5,1.5v7c0,0.83 -0.67,1.5 -1.5,1.5c-0.82,0 -1.5,-0.67 -1.5,-1.5zM33.126,85.461c-0.07,-0.77 -0.3,-1.52 -0.7,-2.21l-4.33,-7.5c-0.4,-0.7 -0.94,-1.28 -1.58,-1.73l-0.3,-0.52h-0.6c-0.71,-0.33 -1.48,-0.5 -2.28,-0.5h-8.66c-0.8,0 -1.57,0.17 -2.28,0.5h-0.6l-0.3,0.52c-0.64,0.45 -1.18,1.03 -1.58,1.73l-4.33,7.5c-0.4,0.69 -0.63,1.44 -0.7,2.21l-0.3,0.52l0.29,0.51c0.07,0.78 0.3,1.56 0.71,2.26l4.33,7.5c0.41,0.71 0.97,1.31 1.62,1.76l0.26,0.45h0.51c0.73,0.35 1.54,0.54 2.37,0.54h8.66c0.83,0 1.64,-0.19 2.37,-0.54h0.51l0.26,-0.45c0.65,-0.45 1.21,-1.05 1.62,-1.76l4.33,-7.5c0.41,-0.7 0.64,-1.48 0.71,-2.26l0.29,-0.51zM16.036,89.511c1.82,1.63 4.63,1.49 6.26,-0.33c1.64,-1.82 1.49,-4.62 -0.33,-6.26c-0.46,-0.42 -0.49,-1.13 -0.08,-1.59c0.42,-0.46 1.13,-0.5 1.59,-0.08c2.74,2.46 2.96,6.7 0.5,9.44c-1.2,1.32 -2.84,2.11 -4.62,2.2c-0.12,0.01 -0.24,0.01 -0.36,0.01c-1.65,0 -3.23,-0.6 -4.46,-1.72c-1.33,-1.19 -2.11,-2.83 -2.21,-4.61c-0.09,-1.79 0.52,-3.5 1.71,-4.83c0.19,-0.21 0.39,-0.41 0.61,-0.59c0.47,-0.41 1.18,-0.35 1.59,0.12c0.4,0.47 0.35,1.18 -0.12,1.58c-0.15,0.13 -0.28,0.26 -0.41,0.4c-0.79,0.88 -1.19,2.01 -1.13,3.2c0.06,1.18 0.58,2.27 1.46,3.06zM17.876,85.851v-5.73c0,-0.62 0.51,-1.12 1.13,-1.12c0.62,0 1.12,0.5 1.12,1.12v5.73c0,0.62 -0.5,1.13 -1.12,1.13c-0.62,0 -1.13,-0.51 -1.13,-1.13zM25.636,129.631c-0.05,-0.49 -0.21,-0.97 -0.47,-1.41l-2.05,-3.49c-0.26,-0.43 -0.6,-0.8 -1.01,-1.08l-0.18,-0.3h-0.34c-0.46,-0.23 -0.97,-0.35 -1.49,-0.35h-4.22c-0.52,0 -1.03,0.12 -1.49,0.35h-0.26l-0.13,0.22c-0.46,0.28 -0.85,0.68 -1.13,1.16l-2.06,3.49c-0.29,0.49 -0.45,1.02 -0.48,1.57l-0.11,0.19l0.11,0.19c0.02,0.56 0.18,1.11 0.48,1.61l2.06,3.49c0.29,0.49 0.69,0.9 1.17,1.19l0.09,0.15h0.18c0.48,0.26 1.02,0.39 1.57,0.39h4.22c0.56,0 1.1,-0.14 1.58,-0.39h0.25l0.14,-0.23c0.42,-0.28 0.78,-0.66 1.05,-1.11l2.05,-3.49c0.27,-0.45 0.43,-0.95 0.47,-1.46l0.2,-0.34zM16.366,131.891c0.48,0.44 1.08,0.66 1.74,0.62c0.64,-0.03 1.24,-0.32 1.67,-0.8c0.43,-0.47 0.65,-1.09 0.62,-1.74c-0.04,-0.64 -0.32,-1.23 -0.8,-1.67c-0.25,-0.22 -0.27,-0.6 -0.04,-0.84c0.22,-0.25 0.6,-0.27 0.84,-0.05c0.72,0.65 1.14,1.53 1.19,2.5c0.06,0.96 -0.27,1.89 -0.92,2.61c-0.64,0.72 -1.53,1.14 -2.5,1.19h-0.19c-0.89,0 -1.75,-0.32 -2.41,-0.92c-0.72,-0.65 -1.15,-1.54 -1.2,-2.5c-0.05,-0.97 0.28,-1.89 0.93,-2.61c0.1,-0.11 0.21,-0.22 0.32,-0.32c0.25,-0.22 0.63,-0.19 0.85,0.06c0.22,0.25 0.19,0.63 -0.06,0.84c-0.08,0.07 -0.15,0.14 -0.22,0.22c-0.43,0.48 -0.65,1.1 -0.62,1.74c0.04,0.65 0.32,1.24 0.8,1.67zM17.376,130.001v-2.95c0,-0.33 0.27,-0.6 0.6,-0.6c0.34,0 0.6,0.27 0.6,0.6v2.95c0,0.33 -0.26,0.6 -0.6,0.6c-0.33,0 -0.6,-0.27 -0.6,-0.6z"></path><path d="M29.626,3.931l-0.16,-0.28h-19.07l-0.22,0.37l-9.21,15.8l-0.1,0.18l0.1,0.18l9.22,15.8l0.21,0.36h19.07l0.15,-0.26l9.38,-16.08zM27.056,26.601c-1.87,2.08 -4.46,3.14 -7.06,3.14c-2.27,0 -4.54,-0.81 -6.35,-2.44c-3.89,-3.5 -4.21,-9.52 -0.7,-13.41c0.27,-0.3 0.56,-0.59 0.86,-0.85c0.63,-0.54 1.58,-0.46 2.12,0.16c0.54,0.63 0.47,1.58 -0.16,2.12c-0.21,0.18 -0.41,0.37 -0.6,0.58c-2.39,2.66 -2.17,6.78 0.49,9.17c2.66,2.4 6.78,2.18 9.17,-0.48c2.4,-2.66 2.18,-6.78 -0.48,-9.17c-0.62,-0.56 -0.67,-1.51 -0.11,-2.12c0.55,-0.62 1.5,-0.67 2.12,-0.11c3.89,3.5 4.2,9.52 0.7,13.41zM21.496,11.501v7c0,0.83 -0.67,1.5 -1.5,1.5c-0.82,0 -1.5,-0.67 -1.5,-1.5v-7c0,-0.83 0.68,-1.5 1.5,-1.5c0.83,0 1.5,0.67 1.5,1.5z"></path><path d="M38.096,16.701l-6.2,-10.5c-0.56,-0.95 -1.35,-1.73 -2.27,-2.27c-0.16,-0.11 -0.33,-0.2 -0.5,-0.28c-0.87,-0.42 -1.84,-0.65 -2.83,-0.65h-12.63c-1,0 -1.96,0.23 -2.83,0.65c-0.23,0.11 -0.45,0.23 -0.66,0.37c-0.85,0.54 -1.58,1.28 -2.11,2.18l-6.2,10.5c-0.57,0.97 -0.87,2.04 -0.9,3.12v0.36c0.03,1.08 0.33,2.15 0.9,3.12l6.2,10.5c0.53,0.9 1.26,1.64 2.12,2.18c0.2,0.14 0.41,0.25 0.63,0.36c0.88,0.43 1.84,0.66 2.85,0.66h12.63c1,0 1.97,-0.23 2.85,-0.66c0.16,-0.08 0.32,-0.16 0.47,-0.26c0.93,-0.55 1.72,-1.32 2.28,-2.28l6.2,-10.5c0.6,-1.02 0.9,-2.16 0.9,-3.3c0,-1.14 -0.3,-2.28 -0.9,-3.3zM26.296,36.001h-12.63c-1.94,0 -3.75,-1.04 -4.74,-2.7l-6.2,-10.5c-1.02,-1.73 -1.02,-3.87 0,-5.6l6.2,-10.5c0.99,-1.66 2.8,-2.7 4.74,-2.7h12.63c1.94,0 3.75,1.04 4.74,2.7l6.2,10.5c1.01,1.73 1.01,3.87 0,5.6l-6.2,10.5c-0.99,1.66 -2.8,2.7 -4.74,2.7z"></path></g></g>
              </svg>
            </li>
          </div>
          </ul>
        </section>
        {/* <article id="experience">
          <h2 className='title-text'>Experiências</h2>
          <ul>
            <li className='experience-content'>
              <p>(2022-2023)</p>
              <p>FREELANCER</p>
              Em janeiro de 2022 me envolvi no meu primeiro
              projeto como freelancer que consistia em tornar
              uma página responsiva e desde então venho
              trabalhado no desenvolvimento páginas, sendo o
              último projeto uma landing page para uma
              empresa de lavagem de sofás. 
            </li>
          </ul>
        </article> */}
        <h2 className={['title-text', theme].join(" ")}>Contact</h2>
        <nav className={theme} id="contact-bar">
          <ul className={theme}>
            <li className={theme}>
              <Link className={theme} to={{ pathname: "https://criarmeulink.com.br/u/1696646873" }} target='_blank'>
              <svg className={['svg', theme].join(" ")} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                <g className={theme} fill={svgColor} fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={styles}><g transform="scale(5.12,5.12)"><path d="M43.75391,6.40234c-1.2177,-0.05335 -2.45911,0.31055 -3.48242,1.06641l-2.74609,2.02734l-12.52539,9.25977l-12.4082,-9.17187c-0.17292,-0.16897 -0.4012,-0.26957 -0.64258,-0.2832h0.25l-2.46484,-1.82422c-1.02397,-0.75773 -2.26723,-1.12367 -3.48633,-1.07031c-1.2191,0.05336 -2.4131,0.52522 -3.33984,1.43945c-1.17726,1.16068 -1.9082,2.78413 -1.9082,4.56445v3.43359c-0.01457,0.09777 -0.01457,0.19715 0,0.29492v23.36133c0,1.92119 1.57881,3.5 3.5,3.5h7.5c0.55226,-0.00006 0.99994,-0.44774 1,-1v-16.62695l11.40625,8.43164c0.353,0.26043 0.8345,0.26043 1.1875,0l11.40625,-8.43164v16.62695c0.00006,0.55226 0.44774,0.99994 1,1h7.5c1.92119,0 3.5,-1.57881 3.5,-3.5v-23.38086c0.01129,-0.08622 0.01129,-0.17355 0,-0.25977v-3.44922c0,-1.75846 -0.70954,-3.37437 -1.87109,-4.53711c-0.03357,-0.03357 -0.04482,-0.04287 -0.03125,-0.0293c-0.00194,-0.00196 -0.0039,-0.00391 -0.00586,-0.00586c-0.92656,-0.91221 -2.12019,-1.3822 -3.33789,-1.43555zM43.64453,8.40039c0.7563,0.02965 1.48952,0.3165 2.04492,0.86328c0.01891,0.01867 0.03272,0.03277 0.02344,0.02344c0.79645,0.79726 1.28711,1.9015 1.28711,3.12305v3.08594l-8,5.91211v-10.4082c0.00042,-0.0339 -0.00088,-0.0678 -0.00391,-0.10156l2.46289,-1.82031c0.00065,0 0.0013,0 0.00195,0c0.64864,-0.47915 1.42729,-0.70739 2.18359,-0.67773zM6.35742,8.40625c0.75715,-0.02964 1.53847,0.19746 2.1875,0.67773l2.45898,1.81836c-0.00289,0.03247 -0.0042,0.06506 -0.00391,0.09766v10.4082l-8,-5.91211v-3.08594c0,-1.23567 0.50176,-2.3413 1.3125,-3.14062c0.55526,-0.54776 1.28777,-0.83364 2.04492,-0.86328zM37,12.37109v10.51563l-12,8.86914l-12,-8.86914v-10.51367l11.40625,8.43164c0.353,0.26043 0.8345,0.26043 1.1875,0zM3,17.98242l8,5.91406v17.10352h-6.5c-0.84081,0 -1.5,-0.65919 -1.5,-1.5zM47,17.98242v21.51758c0,0.84081 -0.65919,1.5 -1.5,1.5h-6.5v-17.10352z"></path></g></g>
              </svg>
              </Link>
            </li>
            <li>
              <Link to={{ pathname: "https://github.com/jpdiesel" }} target='_blank'>
              <svg className='svg' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                <g fill={svgColor} fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={styles}><g transform="scale(5.12,5.12)"><path d="M17.791,46.836c0.711,-0.306 1.209,-1.013 1.209,-1.836v-5.4c0,-0.197 0.016,-0.402 0.041,-0.61c-0.014,0.004 -0.027,0.007 -0.041,0.01c0,0 -3,0 -3.6,0c-1.5,0 -2.8,-0.6 -3.4,-1.8c-0.7,-1.3 -1,-3.5 -2.8,-4.7c-0.3,-0.2 -0.1,-0.5 0.5,-0.5c0.6,0.1 1.9,0.9 2.7,2c0.9,1.1 1.8,2 3.4,2c2.487,0 3.82,-0.125 4.622,-0.555c0.934,-1.389 2.227,-2.445 3.578,-2.445v-0.025c-5.668,-0.182 -9.289,-2.066 -10.975,-4.975c-3.665,0.042 -6.856,0.405 -8.677,0.707c-0.058,-0.327 -0.108,-0.656 -0.151,-0.987c1.797,-0.296 4.843,-0.647 8.345,-0.714c-0.112,-0.276 -0.209,-0.559 -0.291,-0.849c-3.511,-0.178 -6.541,-0.039 -8.187,0.097c-0.02,-0.332 -0.047,-0.663 -0.051,-0.999c1.649,-0.135 4.597,-0.27 8.018,-0.111c-0.079,-0.5 -0.13,-1.011 -0.13,-1.543c0,-1.7 0.6,-3.5 1.7,-5c-0.5,-1.7 -1.2,-5.3 0.2,-6.6c2.7,0 4.6,1.3 5.5,2.1c1.699,-0.701 3.599,-1.101 5.699,-1.101c2.1,0 4,0.4 5.6,1.1c0.9,-0.8 2.8,-2.1 5.5,-2.1c1.5,1.4 0.7,5 0.2,6.6c1.1,1.5 1.7,3.2 1.6,5c0,0.484 -0.045,0.951 -0.11,1.409c3.499,-0.172 6.527,-0.034 8.204,0.102c-0.002,0.337 -0.033,0.666 -0.051,0.999c-1.671,-0.138 -4.775,-0.28 -8.359,-0.089c-0.089,0.336 -0.197,0.663 -0.325,0.98c3.546,0.046 6.665,0.389 8.548,0.689c-0.043,0.332 -0.093,0.661 -0.151,0.987c-1.912,-0.306 -5.171,-0.664 -8.879,-0.682c-1.665,2.878 -5.22,4.755 -10.777,4.974v0.031c2.6,0 5,3.9 5,6.6v5.4c0,0.823 0.498,1.53 1.209,1.836c9.161,-3.032 15.791,-11.672 15.791,-21.836c0,-12.682 -10.317,-23 -23,-23c-12.683,0 -23,10.318 -23,23c0,10.164 6.63,18.804 15.791,21.836z"></path></g></g>
              </svg>
              </Link>
            </li>
            <li>
              <Link to={{ pathname: "https://www.linkedin.com/in/jp-diesel/"}} target='_blank'>
              <svg className='svg' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                <g fill={svgColor} fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={styles}><g transform="scale(5.12,5.12)"><path d="M9,4c-2.74952,0 -5,2.25048 -5,5v32c0,2.74952 2.25048,5 5,5h32c2.74952,0 5,-2.25048 5,-5v-32c0,-2.74952 -2.25048,-5 -5,-5zM9,6h32c1.66848,0 3,1.33152 3,3v32c0,1.66848 -1.33152,3 -3,3h-32c-1.66848,0 -3,-1.33152 -3,-3v-32c0,-1.66848 1.33152,-3 3,-3zM14,11.01172c-1.09522,0 -2.08078,0.32736 -2.81055,0.94141c-0.72977,0.61405 -1.17773,1.53139 -1.17773,2.51367c0,1.86718 1.61957,3.32281 3.67969,3.4668c0.0013,0.00065 0.0026,0.0013 0.00391,0.00195c0.09817,0.03346 0.20099,0.05126 0.30469,0.05273c2.27301,0 3.98828,-1.5922 3.98828,-3.52148c-0.00018,-0.01759 -0.00083,-0.03518 -0.00195,-0.05274c-0.10175,-1.90023 -1.79589,-3.40234 -3.98633,-3.40234zM14,12.98828c1.39223,0 1.94197,0.62176 2.00195,1.50391c-0.01215,0.85625 -0.54186,1.51953 -2.00195,1.51953c-1.38541,0 -2.01172,-0.70949 -2.01172,-1.54492c0,-0.41771 0.15242,-0.7325 0.47266,-1.00195c0.32023,-0.26945 0.83428,-0.47656 1.53906,-0.47656zM11,19c-0.55226,0.00006 -0.99994,0.44774 -1,1v19c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-5.86523v-13.13477c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM20,19c-0.55226,0.00006 -0.99994,0.44774 -1,1v19c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-10c0,-0.82967 0.22639,-1.65497 0.625,-2.19531c0.39861,-0.54035 0.90147,-0.86463 1.85742,-0.84766c0.98574,0.01695 1.50758,0.35464 1.90234,0.88477c0.39477,0.53013 0.61523,1.32487 0.61523,2.1582v10c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-10.73828c0,-2.96154 -0.87721,-5.30739 -2.38086,-6.89453c-1.50365,-1.58714 -3.59497,-2.36719 -5.80664,-2.36719c-2.10202,0 -3.70165,0.70489 -4.8125,1.42383v-0.42383c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM12,21h4v12.13477v4.86523h-4zM21,21h4v1.56055c0.00013,0.43 0.27511,0.81179 0.68291,0.94817c0.40781,0.13638 0.85714,-0.00319 1.11591,-0.34661c0,0 1.57037,-2.16211 5.01367,-2.16211c1.75333,0 3.25687,0.58258 4.35547,1.74219c1.0986,1.15961 1.83203,2.94607 1.83203,5.51953v9.73828h-4v-9c0,-1.16667 -0.27953,-2.37289 -1.00977,-3.35352c-0.73023,-0.98062 -1.9584,-1.66341 -3.47266,-1.68945c-1.52204,-0.02703 -2.77006,0.66996 -3.50195,1.66211c-0.73189,0.99215 -1.01562,2.21053 -1.01562,3.38086v9h-4z"></path></g></g>
              </svg>
              </Link>
            </li>
            <li>
              <Link to={{ pathname: "https://www.instagram.com/diz.eu/" }} target='_blank'>
              <svg className='svg' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                <g fill={svgColor} fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={styles}><g transform="scale(5.12,5.12)"><path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path></g></g>
              </svg>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }    
}




// ***********************************************************************
// link externo feito com a ajuda do link:
// https://stackoverflow.com/questions/42914666/react-router-external-link
// ***********************************************************************
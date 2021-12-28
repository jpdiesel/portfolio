import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import LanguageSelect from './components/LanguageSelect';
import HomeEN from './pages/HomeEN';
import HomePT from './pages/HomePT';
import About from './pages/About';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import Projects from './pages/Projects';
import Galeria from './pages/Galeria';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound'
import './App.css';

class App extends React.Component {
  render() {
    return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ LanguageSelect } />
        <Route path="/home-pt" component={ HomePT } />
        <Route path="/home-en" component={ HomeEN } />
        <Route path="/about" component={ About }/>
        <Route path="/sobre" component={ Sobre }/>
        <Route path="/projetos-e-skills" component={ Projetos }/>
        <Route path="/projects-and-skills" component={ Projects }/>
        <Route path="/galeria" component={ Galeria }/>
        <Route path="/gallery" component={ Gallery }/>
        <Route exact path="/*" component={ NotFound }/>
      </Switch>
    </BrowserRouter>
    );
  }
}
export default App;

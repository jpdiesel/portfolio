import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import LanguageSelect from './pages/LanguageSelect';
import About from './pages/About';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound'
import './App.css';

class App extends React.Component {
  render() {
    return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ LanguageSelect } />
        <Route path="/about" component={ About }/>
        <Route path="/sobre" component={ Sobre }/>
        <Route path="/projetos-e-skills" component={ Projetos }/>
        <Route path="/projects-and-skills" component={ Projects }/>
        <Route exact path="/*" component={ NotFound }/>
      </Switch>
    </BrowserRouter>
    );
  }
}
export default App;

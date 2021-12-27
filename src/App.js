import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import LanguageSelect from './components/LanguageSelect';
import './App.css';

class App extends React.Component {
  render() {
    return (
    <BrowserRouter>
      <Route path="/" component={ LanguageSelect } />
    </BrowserRouter>
    );
  }
}
export default App;

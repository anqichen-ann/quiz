import React, {Component} from 'react';
import './App.less';
import {Route, BrowserRouter} from "react-router-dom";
import Home from './Components/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route exact path='/' component={Home}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
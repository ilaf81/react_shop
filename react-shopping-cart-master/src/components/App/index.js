import React, { Component } from 'react';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from '../Home/index';
import Contact from '../Contact/index';
import Sales from '../Sales/index';
import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import GithubCorner from '../github/Corner';
import FloatCart from '../FloatCart';


class App extends Component {
  render() {
    return (
      <React.Fragment>
          <HashRouter>
          <div>
          <h1>Simple SPA</h1>
          <ul className="header">
          <li><NavLink to="/Home/index">Home</NavLink></li>             
          <li><NavLink to="/Contact/index">Contact</NavLink></li>
          <li><NavLink to="/Sales/index">Sales</NavLink></li>
          </ul>          
           <div className="content">
           <Route exact path="/Home/index" component={Home}/>
           <Route exact path="/Contact/index" component={Contact}/>
           <Route exact path="/Sales/index" component={Sales}/>


           </div>
           </div>
           </HashRouter>
        <GithubCorner />
        <main>      
          <Filter />
          <Shelf />
        </main>
        <FloatCart />
        
      </React.Fragment>
    );
  }
}

export default App;

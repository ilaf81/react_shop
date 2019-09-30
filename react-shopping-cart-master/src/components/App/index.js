import React, { Component } from 'react';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";


import Shows from '../Shows/index';
import Anime from '../Anime/index';
import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import GithubCorner from '../github/Corner';
import Movies from '../Movies';




class App extends Component {
  render() {
    return (
      <React.Fragment>

        
          <HashRouter>
          <div>
          <h1>InterCasa</h1>
          <ul className="header">
          <li><NavLink to="/Movies/index">Movies</NavLink></li>             
          <li><NavLink to="/Shows/index">Shows</NavLink></li>
          <li><NavLink to="/Anime/index">Anime</NavLink></li>
          </ul>          
           <div className="content">
           <Route exact path="/Movies/index" component={Movies}/>
           <Route exact path="/Shows/index" component={Shows}/>
           <Route exact path="/Anime/index" component={Anime}/>


           </div>
           </div>
           </HashRouter>
        <GithubCorner />
        <main>      
          <Filter />
          <Shelf />
        </main>
        
        
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from 'react';



class Movies extends Component {
  render() {
    return (
      <React.Fragment>
        <main>
        
        <div>
        <h1 font-siza="32pt"> Movies</h1>
        <p>So, what are the best movies of all time? The list includes a wide range of films, 
          from art house European cinema to top action films and blockbusters to established, 
          highly-regarded classics of the Golden Age of Hollywood. The entries span many genres 
          and include some of the greatest movie villains created by the best writers and top film 
          directors in the industry. Included are movies that were recognized in their own time – 
          including a number of Academy Award recipients and even Best Picture selections – as well 
          as cult movies or sleeper hits that took time to find an audience. Shawshank Redemption, 
          for example, was not highly regarded or popular in theaters when it first opened, but has 
          since risen to the top of many best movie lists.</p>
           <img src={require('../../static/Figma/movies.jpg')} />
        </div>
      </main>

      </React.Fragment>
    );
  }
}

export default Movies;
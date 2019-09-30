import React, { Component } from 'react';



class Shows extends Component {
  render() {
    return (
      <React.Fragment>
      
      
        <main>
        
        <div>
        <h1> TV Shows</h1>
        <p>In 2019, the traditional television season of September to May is all but extinct.
          When you factor in all the new shows coming out on cable, streaming services, and even
          network (good summer TV? excuse me?), television is a year-round sport. In all that noise though,
           there are some shows that shine more brightly than others. The best series of 2019 are breaking the mold,
            whether they're telling stories of trans women in the early '90s, destroying entire cities with dragon fire,
             or shoving a half hour's worth of comedy into a succinct 15 minutes. These are the best series of 2019 so far.</p>
           <img src={require('../../static/Figma/bestTVSHows.jpg')} />
        </div>
      </main>
    
     

      </React.Fragment>
    );
  }
}

export default Shows;
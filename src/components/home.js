import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Home extends Component {
  render() {
    return (<div style={{
        width: '100%',
        margin: 'auto'
      }}>
      <Grid>
        <Cell class="mdl-card mdl-cell mdl-cell--12-col">
          <img src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=" alt="avatar" class="avatar-pic"></img>
          <div class="short-text mdl-card__supporting-text mdl-grid">
            <h3 class="mdl-cell mdl-cell--12-col">
              Welcome to my page</h3>
            <p class="mdl-cell mdl-cell--12-col mdl-cell--12-col-phone mdl-cell--12-col-tablet section__text">Im Jacob the creator of the page, im a Junior webdeveloper with skills ina wide range of tools this page example is made in ReactJS and i used
               <a http="https://tleunen.github.io/react-mdl"> React-mdl</a>
              ass
            </p>

          </div>

        </Cell>
      </Grid>
    </div>);
  }
}

export default Home;

import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

import Main from './components/main';
import AboutMe from './components/aboutme'
import Button from '@material-ui/core/Button';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


class App extends Component {

  render() {
    return (
      <div >
        <AppBar position="static" color="default">
                <Toolbar>
                  <Typography variant="title" color="inherit">
                    Title
                  </Typography>
                </Toolbar>
              </AppBar>
              <AboutMe/>

         </div>




  );
  }
}

export default App;

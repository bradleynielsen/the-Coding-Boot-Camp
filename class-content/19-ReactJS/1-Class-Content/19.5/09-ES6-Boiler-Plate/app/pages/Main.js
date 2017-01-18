import React from 'react'
import { Container } from 'react-grid-system'

// --------------Setup for Material-Ui -----------------------------
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// -----------------------------------------------------------------
// import NavBar from '../components/Navbar'
import AppBar from '../components/AppBar'

export default class Main extends React.Component {

  render() {
    return (
      <MuiThemeProvider>
      	<div>
          <Container>
            {this.props.children}
          </Container> 
          <AppBar/>
        </div>        
      </MuiThemeProvider>
    );
  }
}

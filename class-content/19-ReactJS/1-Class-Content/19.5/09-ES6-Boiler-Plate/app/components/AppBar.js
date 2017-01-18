import React from 'react'
import { Row, Col } from 'react-grid-system'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'


export default class navbar extends React.Component {

  constructor () {
    super()
    this.state = {open: false}
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.setState({open: !this.state.open})
  }


  render() {
    return (
      <div>
        <Drawer open={this.state.open}>
          <Link to={'/'}>
            <MenuItem onClick={this.handleToggle}>Welcome</MenuItem>
          </Link>
          <Link to={'secondpage'}>
            <MenuItem onClick={this.handleToggle}>Second Page</MenuItem>
          </Link>
        </Drawer>
        <AppBar
          title="Welcome Students!!!"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
      </div>
    );
  }
}
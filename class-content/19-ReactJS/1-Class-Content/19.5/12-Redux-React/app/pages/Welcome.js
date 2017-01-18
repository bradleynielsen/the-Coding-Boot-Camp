import React from 'react'
import { connect } from "react-redux"

import { incrementCount, decrementCount } from '../actions/countActions'
import { changeUser, changeTextField } from '../actions/changeUser'

import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

@connect((store) => {
  return {
    count: store.counter.count,
    user: store.user.user,
    textField: store.user.textField
  };
})
export default class Welcome extends React.Component {

  constructor() {
    super()
    this.incrementCount = this.incrementCount.bind(this)
    this.decrementCount = this.decrementCount.bind(this)
    this.changeUser = this.changeUser.bind(this)
    this.changeTextField = this.changeTextField.bind(this)
  }

  incrementCount() {
    this.props.dispatch(incrementCount())
  }

  decrementCount() {
    this.props.dispatch(decrementCount())
  }
  
  changeUser() {
    this.props.dispatch(changeUser())
  }
  
  changeTextField(event) {
    this.props.dispatch(changeTextField(event.target.value))
  }


  render() {
    return (
      <Row>
        <Col md={8} offset={{ md: 2 }}>
          <Card>
            <CardTitle
              title={`Welcome ${this.props.user}!`}
              subtitle={`The Count is ${this.props.count}`}
            />
            <CardText>
              React-Redux Example!
            </CardText>
            <CardActions>
              <RaisedButton
                label="Increment Count!"
                primary={true}
                onClick={this.incrementCount}
              />
              <RaisedButton
                label="Decrement Count!"
                secondary={true}
                onClick={this.decrementCount}
              />
            </CardActions>
            <div>
            <TextField 
              value={this.props.textField} 
              id='textfield' 
              type='String' 
              hintText="enter your name" 
              onChange={this.changeTextField}/>
            <RaisedButton
                label="Change Name"
                onClick={this.changeUser}
            />
            </div>
          </Card>
        </Col>
      </Row>
    );
  }
}

import React from 'react'
import { Link } from 'react-router'

import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'


export default class ThirdPage extends React.Component {

  render() {
    return (
      <Row>
        <Col md={8} offset={{ md: 2 }}>
          <Card>
            <CardTitle
              title="Welcome To My Third Page!"
              subtitle="Mmmmmhmmmm"
            />
            <CardText>
              We just navigated to our third page!!!
            </CardText>
            <CardActions>
              <Link to={'/'}>
                <RaisedButton
                  label="Go to Welcome Page"
                  primary={true}
                />
              </Link>
            </CardActions>
          </Card>
        </Col>
      </Row>
    );
  }
}

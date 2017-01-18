import React from 'react'
import { Link } from 'react-router'

import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'


export default class Welcome extends React.Component {

  render() {
    return (
      <Row>
        <Col md={8} offset={{ md: 2 }}>
          <Card>
            <CardTitle
              title="Welcome Class!"
              subtitle="React Boiler Plate!"
            />
            <CardText>
              I hope this serves as a good starting point for everyone! This example should serve as a good example of how to layout your React applications. It also incorporates npm packages for a grid system and a front-end componenet library built for React.
            </CardText>
            <CardActions>
              <Link to={'secondpage'}>
                <RaisedButton
                  label="Go to Second Page"
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

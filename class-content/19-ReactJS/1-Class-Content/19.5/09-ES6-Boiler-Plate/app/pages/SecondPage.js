import React from 'react'
import { Link } from 'react-router'

import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'

export default class SecondPage extends React.Component {

  render() {
    return (
      <Row>
        <Col md={8} offset={{ md: 2 }}>
          <Card>
            <CardTitle
              title="Welcome To My Second Page!"
              subtitle="WooHoo"
            />
            <CardText>
              We just navigated to our next page!!!
            </CardText>
            <CardActions>
              <Link to={'thirdpage'}>
                <RaisedButton
                  label="Go to Third Page"
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

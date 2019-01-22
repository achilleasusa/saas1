import React, { Component } from 'react';
import { Col, Row, Card, CardHeader, CardBody} from 'reactstrap';
import ValidationForms from './form.js'
class ExportList extends Component {
  render() {
    return (
      <div className="animated fadeIn" style={{height:"100%"}}>
      <Card id="new47" style={{height:"100%", margin:0}}>
      <CardHeader>
      <h1>Export the SaaS 1000!</h1>
        {/* <i className="fa fa-font-awesome"></i> */}
      </CardHeader>
      <CardBody>
        <Row>
          <Col lg="5">
          <Card>
            <CardHeader><strong>Get SaaS 1000 Updates</strong></CardHeader>
            <CardBody>
              <h6>• After authenticating you will receive the list via email</h6>
              <h6>• Get Monthly/Quarterly Ranking Update emails</h6>
              <h6>• Get Access to upcoming SaaS Sales/Marketing reports</h6>
            </CardBody>
          </Card>
          </Col>
          <Col lg="7">
          <Card>
            <CardHeader><strong>To Export the List Subscribe to our Mailing List</strong></CardHeader>
            <CardBody>            
              <ValidationForms />
            </CardBody>
          </Card>
          </Col>
        </Row>
      </CardBody>
      </Card>
      </div>
    );
  }
}

export default ExportList;

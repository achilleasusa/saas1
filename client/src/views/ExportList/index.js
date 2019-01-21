import React, { Component } from 'react';
import { Col, Row} from 'reactstrap';
import ValidationForms from './form.js'
class ExportList extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={5}>
            <h3>Get SaaS 1000 Updates</h3>
              <h6>• After authenticating you will receive the list via email</h6>
              <h6>• Get Monthly/Quarterly Ranking Update emails</h6>
              <h6>• Get Access to upcoming SaaS Sales/Marketing reports</h6>
          </Col>
          <Col lg={7}>
            <ValidationForms />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ExportList;

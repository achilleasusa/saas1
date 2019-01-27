import React, { Component } from 'react';
import { Col, Row, Card, CardBody, CardHeader} from 'reactstrap'

import image from '../../assets/img/TomBlue.jpg'
class About extends Component {

  componentDidMount(){
    console.log("props:", this.props)
  }

  render() {
  
    return (
      <div className="animated fadeIn mainView">
      <Card>
        <CardHeader>
          <h1>CompanyDetail</h1>
        </CardHeader>
        <CardBody>
          <div class="col-12">
          <div  style={{float:"left"}}><img src={image} /> </div>
          <div style={{diplay:"inline", paddingLeft: 230}}>
          <p>I am Tom Blue – Founder of Lead411. Lead411’s intel helps companies like Smartsheet and Zuora close 3x as fast using our automated trigger solution.  The SaaS 1000 is a side project by me to index the fastest growing saas companies. I am always interested in what is happening within SaaS and I wanted a place to come to each month to see who is really growing. I am not sure where this project is headed, but I am thinking that this could be a good repository for people to not only see the fastest growing SaaS companies, but to also see how they were able to grow so quickly. So in the future we could do some interviews, etc with some of the executives of these companies. Contact Us if you want your company to be added or you would like to be interviewed.</p>  
          </div>
          </div>
          
        </CardBody>
      </Card>
      </div>
    );
  }
}

export default About;

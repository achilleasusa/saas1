import React, { Component } from 'react';
import { Col, Row, Media } from 'reactstrap'

import image from '../../assets/img/TomBlue.jpg'
class About extends Component {
  render() {
    return (
      <div className="animated fadeIn mainView" style={{marginTop:50}}>
        {/* <Media>
          <Media left top href="#">
            <Media object data-src={image} alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>
            Tom Blue
            </Media>
            I am Tom Blue – Founder of Lead411. Lead411’s intel helps companies like Smartsheet and Zuora close 3x as fast using our automated trigger solution.  The SaaS 1000 is a side project by me to index the fastest growing saas companies. I am always interested in what is happening within SaaS and I wanted a place to come to each month to see who is really growing. I am not sure where this project is headed, but I am thinking that this could be a good repository for people to not only see the fastest growing SaaS companies, but to also see how they were able to grow so quickly. So in the future we could do some interviews, etc with some of the executives of these companies. Contact Us if you want your company to be added or you would like to be interviewed.
          </Media>
        </Media> */}
        <img src={image} />
        <p>I am Tom Blue – Founder of Lead411. Lead411’s intel helps companies like Smartsheet and Zuora close 3x as fast using our automated trigger solution.  The SaaS 1000 is a side project by me to index the fastest growing saas companies. I am always interested in what is happening within SaaS and I wanted a place to come to each month to see who is really growing. I am not sure where this project is headed, but I am thinking that this could be a good repository for people to not only see the fastest growing SaaS companies, but to also see how they were able to grow so quickly. So in the future we could do some interviews, etc with some of the executives of these companies. Contact Us if you want your company to be added or you would like to be interviewed.</p>
      </div>
    );
  }
}

export default About;

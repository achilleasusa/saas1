import React, { Component } from 'react';
import { Col, Row, Card, CardBody, CardHeader} from 'reactstrap'

import image from '../../assets/img/TomBlue.jpg'
import Postman from '../../utils/service'
class CompanyDetail extends Component {
  state = {
    data:{}
  }

  componentDidMount(){
    const id = this.props.match.params.id
    Postman.getCompanyById(id)
            .then(res=>{
              this.setState({data:res.data})
            })
  }
  shouldComponentUpdate(nextprops, nextstate) {
    if ((this.props.match.params.id !== nextprops.match.params.id)||this.state.data.name == undefined)
      { console.log("OOOOOOOOOOOOOOOOOOOO")
        const id = this.props.match.params.id
        Postman.getCompanyById(id)
                .then(res=>{
                  this.setState({data:res.data})
                })
        return true
      }
      return false
  }
  render() {
    const { name, city, currentEmployeeNumber, email, exEmployeeNumber, phone, ranking, leadInvestors} = this.state.data
    return (
      <div className="animated fadeIn mainView">
      <Card>
        <CardHeader>
          <h1>CompanyDetail</h1>
        </CardHeader>
        <CardBody>
          <div>
            <div style = {{float:"left"}}>
              <h3>{name}</h3>
              <p>Location: {city}</p>
              <p>Phone number: {phone}</p>
            </div>
            <div style = {{float:"right", textAlign:"center"}}>
              <h3>Current Saas 1000 Ranking</h3>
              <h1>#33{ranking}</h1>
            </div>
          </div>          
          <div style = {{marginTop: 120}}>
            <p>
            Our mission is to enable any company to understand, manage, and strengthen their culture. We started CultureIQ because we believe in the power of a strong culture. We believe culture is woven through a company, driving everything from recruiting and retention to engagement and success. We believe culture is about people, and companies that listen and understand their people will always outperform those that don't. We believe culture is measurable, and can be managed and objectively strengthened. We believe culture is as fundamental as brand; a strong culture is absolutely necessary for long-term success. 
            </p>
          </div>
          <div style = {{marginTop: 5,  display: "flex", justifyContent: "space-around"}}>
            <div style = {{color: "white", textAlign:"center", width:"20%", backgroundColor:"green", width:"20%", borderRadius: 10}}>
              <h2>{currentEmployeeNumber}</h2>
              <h8>EMPLOYEES</h8>
            </div>
            <div style = {{color: "white", textAlign:"center", width:"20%", backgroundColor:"green", width:"20%", borderRadius: 10}}>
              <h2>?{exEmployeeNumber}?</h2>
              <h8>6 MONTHS AGO</h8>
            </div>
            <div style = {{color: "white", textAlign:"center", width:"20%", backgroundColor:"green", width:"20%", borderRadius: 10}}>
              <h2>?{leadInvestors}?</h2>
              <h8>INVESTORS</h8>
            </div>
            <div style = {{color: "white", textAlign:"center", width:"20%", backgroundColor:"green", width:"20%", borderRadius: 10}}>
              <h2>???</h2>
              <h8>CULTUREIQ ALTERNATIVE</h8>
            </div>                        
          </div>
        </CardBody>
      </Card>
      </div>
    );
  }
}

export default CompanyDetail;

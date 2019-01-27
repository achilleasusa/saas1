import React, { Component } from 'react';
import EnhancedTable from '../../components/dataTable'
import { Card, CardHeader, CardBody} from 'reactstrap';
class Home extends Component {
  selectCompany = (id) => {
    console.log("selected:", id)
    this.props.history.push(`/home/${id}`);
  }
  render() {
    return (
      <div className="animated fadeIn" style={{height:"100%"}}>
        <Card style={{height:'100%', marginBottom:0}}>
          <CardHeader><h1>Fastest Growing Companies</h1></CardHeader>
          <CardBody style={{padding: 30}}><EnhancedTable onSelectCompany={this.selectCompany}/></CardBody>
        </Card>
      </div>
    );
  }
}

export default Home;



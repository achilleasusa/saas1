import React, { Component } from 'react';
import EnhancedTable from '../../components/dataTable'
class Home extends Component {
  render() {
    return (
      <div className="animated fadeIn" style = {{textAlign:"center"}}>
        <h1 style={{color: 'grey', marginBottom: 20}}>Fastest Growing Companies</h1>
        <EnhancedTable />
      </div>
    );
  }
}

export default Home;



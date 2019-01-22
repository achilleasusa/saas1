import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Home from '../../views/Home';
import Updates from '../../views/Updates';
import News from '../../views/News';
import Join from '../../views/Join';
import Exportlist from '../../views/ExportList';
import About from '../../views/About';

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">

            <Container fluid style={{padding:0, height:"100%"}}>
              {/* <div style = {{padding: 30, height:'100%', backgroundColor:"white", margin:10, borderRadius:10}}> */}
              <Switch>
                <Route path="/home" name="Home" component={Home}/>
                <Route path="/about" name="Home" component={About}/>
                <Route path="/join" name="Home" component={Join}/>
                <Route path="/exportlist" name="Home" component={Exportlist}/>
                <Route path="/updates" name="Home" component={Updates}/>
                <Route path="/news" name="Home" component={News}/>
                <Redirect from="/" to="/home"/>
              </Switch>
              {/* </div> */}
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;

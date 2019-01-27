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
import CompanyDetail from '../../views/CompanyDetail'

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">

            <Container fluid style={{padding:20, height:"100%"}}>
              {/* <div style = {{padding: 30, height:'100%', backgroundColor:"white", margin:10, borderRadius:10}}> */}
              <Switch>
                <Route path="/home" name="Home" component={Home} exact={true}/>
                <Route path="/about" name="About" component={About}/>
                <Route path="/join" name="Join" component={Join}/>
                <Route path="/exportlist" name="Exportlist" component={Exportlist}/>
                <Route path="/home/:id" name="HomeDetail" component={CompanyDetail}/>
                <Route path="/updates" name="Update" component={Updates}/>
                <Route path="/news" name="News" component={News}/>
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

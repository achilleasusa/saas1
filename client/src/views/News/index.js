import React, { Component } from 'react';
import Article from '../../components/article'
import { Button, Col, Label, Input, Card, CardHeader, CardBody, Row, InputGroup} from 'reactstrap';
class News extends Component {
  render() {
    return (
      <div className="animated fadeIn" style={{height:"100%"}}>
        <Card style={{height:'100%', marginBottom:0}}>
          <CardHeader><h1>Blog</h1></CardHeader>
          <CardBody style={{padding: 30}}>
            <Article />
            <Article />
            <Article />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default News;

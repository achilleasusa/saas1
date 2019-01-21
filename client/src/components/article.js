import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import article_img from '../assets/img/article-background.jpg'
class Article extends Component {
  render() {
    return (
      <div style = {{textAlign: "center", display: "relative", width: 300, height: 400, padding: 10}}>
        {/* <Card style={{width:200, height: 200, borderRadius: 20}}>
          <CardImg top style={{width: 100, height: 400}} src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>         */}

          <img src={article_img} width = "100%" style = {{height: 200, borderRadius: 10, borderRadius:20}}/>

        <div style = {{display: "inline-block", margin: 'auto', width: 250, height: 200, marginTop: -40, borderRadius: 10, backgroundColor: "white"}}></div>
      </div>
    )
  }
}

export default Article;
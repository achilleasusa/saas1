import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import article_img from '../assets/img/article-background.jpg'
//fa fa-tag
class Article extends Component {
  render() {
    return (
      <div style = {{textAlign:"center", display: "relative", width: "30%", padding: 10}}>
         <img src={article_img} width = "100%" style = {{height: 200, borderRadius: 10, borderRadius:10}}/>
        <div style = {{textAlign:"left",padding:20, boxShadow: `rgba(0,0,0,.15) 0 7px 7px`, display: "inline-block", margin:'auto', width:"95%", height: 270, marginTop: -20, borderRadius: 10, backgroundColor: "white"}}>
          <div style={{marginBottom:20}}><h3>Blog Title</h3></div>
          <div style={{color: "grey", marginBottom:10}}>
            <span style={{paddingRight:30}}>
              <i className="fa fa-user"></i>
              <span>  </span>
              <span>Tom Blue</span>
            </span>
            <span>
              <i className="fa fa-calendar"></i>
              <span>  </span>
              <span>April 19, 2019</span>
            </span>            
          </div>
          <div>
            <p style={{height:20}}>I recently beta-launched a free chrome extension that lets you find people’s emails and direct dial phone numbers. It also allows you to build an email cadence to do outbound cold emailing. When building this solution it allowed me to think about the top solutions in the space that can help us find someone’s work…</p>
          </div>
          <div>
            <Button>READ MORE</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Article;
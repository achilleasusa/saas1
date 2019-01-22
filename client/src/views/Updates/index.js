import React, { Component } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { Formik, Field} from 'formik';
import { Button, Col, Form, FormFeedback, FormGroup, Label, Input, Card, CardHeader, CardBody, Row, InputGroup} from 'reactstrap';
import * as Yup from 'yup';
const url = "//xxx"


class MailchimpForm extends Component {
  ValidationSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
  });
  constructor(props){
    super(props)
   // this.touchAll = this.touchAll.bind(this)
  }
  onSubmit = (values, { setSubmitting, setErrors }) => {
    console.log(values)
    this.props.onSubmitted(values)
  }
  render (){
    return (
  <div>
    <Formik
      initialValues={{
        fullName: '',
        email: '',
      }}
      validationSchema={this.ValidationSchema}
      onSubmit={this.onSubmit}
    >
      {({ errors, touched, values, handleChange, handleSubmit, isValid, setTouched}) => (
          <Form onSubmit={handleSubmit} noValidate name='subscribeForm'>
            <FormGroup style = {{width: 300}}>
            <InputGroup>
                <Input type="text"
                        name="fullName"
                        id="fullName"
                        placeholder="Full Name"
                        invalid={touched.fullName && !!errors.fullName}
                        autoFocus={true}
                        onChange={handleChange}
                        required
                        value={values.fullName} />
                <div className="input-group-append">
                  <span className="input-group-text"><i className="fa fa-user"></i></span>
                </div>
                <FormFeedback>{errors.fullName}</FormFeedback>
              </InputGroup>
              
            </FormGroup>          
            <FormGroup style = {{width: 300}}>
            <InputGroup>
                <Input type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        // valid={!errors.email}
                        invalid={touched.email && !!errors.email}
                        autoFocus={true}
                        onChange={handleChange}
                        required
                        value={values.email} />
                <div className="input-group-append">
                  <span className="input-group-text"><i className="fa fa-envelope"></i></span>
                </div>
                <FormFeedback>{errors.email}</FormFeedback>
              </InputGroup>
              
            </FormGroup>   
            <FormGroup>
              <Button 
                // onClick={() => this.touchAll(setTouched, errors)} 
                type="submit" color="success" className="mr-1">Subscribe</Button>
            </FormGroup>                       
          </Form>
      )}
    </Formik>
  </div>
);
    }
}
class Updates extends Component {

  render() {
    return (
      <div className="animated fadeIn">
      <Card>
        <CardHeader><h1>GET ALERTS WHEN WE UPDATE THE SAAS 1000</h1></CardHeader>
        <CardBody>
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <div>
                <MailchimpForm onSubmitted={formData => subscribe(formData)} />
                {/* {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
                {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>} */}
              </div>
            )}
          />   
        </CardBody>
      </Card>
      </div>
    );
  }
}

export default Updates;

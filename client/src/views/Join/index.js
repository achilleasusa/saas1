import React, { Component } from 'react';
import { Formik, Field} from 'formik';
import { Button, Col, Form, FormFeedback, FormGroup, Label, Input,  Row, Card, CardBody,CardHeader} from 'reactstrap';
import * as Yup from 'yup';
//For notification
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

// const NotificationContainer = window.ReactNotifications.NotificationContainer;
// const NotificationManager = window.ReactNotifications.NotificationManager;


import Postman from '../../utils/service'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

class AddCompanyForm extends Component {
  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };
  ValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    url: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    linkedin: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    city: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    state: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    country: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'), 
    phone: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Required'), 
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),      
    currentEmployeeNumber: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    exEmployeeNumber: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),     
    leadInvestors: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),                                                 
  });
  constructor(props){
    super(props)
   // this.touchAll = this.touchAll.bind(this)
  }
  onSubmit = (values, { setSubmitting, setErrors }) => {
  //   Postman.post('companies', {as:"asdf"})
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });    
  //   console.log(values)
  //   //this.props.onSubmitted(values)
  Postman.addCompany(values).then((res)=>{
   this.createNotification('success')
  }
  )
 }
  render (){
    return (
  <div style={{marginLeft: 0}}>
    <Formik
      initialValues={{
        name: '',
        url: '',
        linkedin: '',
        city: '',
        state: '',
        country: '',
        phone: '',
        email: '',
        currentEmployeeNumber: '',
        exEmployeeNumber: '',
        leadInvestors: '',
      }}
     validationSchema={this.ValidationSchema}
      onSubmit={this.onSubmit}
    >
      {({ errors, touched, values, handleChange, handleSubmit, isValid, setTouched}) => (
          <Form onSubmit={handleSubmit} noValidate name='subscribeForm' style={{width:"100%"}}>
            <Row>
              <Col lg={6}>
                <FormGroup >
                <Label>Company Name<span className="text-danger"> *</span></Label>
                <Input type="text"
                        name="name"
                        id="name"
                        placeholder=""
                        invalid={touched.name && !!errors.name}
                        autoFocus={true}
                        onChange={handleChange}
                        required
                        value={values.name} />
                <FormFeedback>{errors.name}</FormFeedback>
              </FormGroup>       
                <FormGroup >
                  <Label>Url<span className="text-danger"> *</span></Label>
                  <Input type="text"
                          name="url"
                          id="url"
                          placeholder=""
                          invalid={touched.url && !!errors.url}
                          autoFocus={true}
                          onChange={handleChange}
                          required
                          value={values.url} />
                  <FormFeedback>{errors.url}</FormFeedback>
                </FormGroup> 
                <FormGroup >
                <Label>Company Linkedin URL<span className="text-danger"> *</span></Label>
                  <Input type="text"
                          name="linkedin"
                          id="linkedin"
                          placeholder=""
                          invalid={touched.linkedin && !!errors.linkedin}
                          autoFocus={true}
                          onChange={handleChange}
                          required
                          value={values.linkedin} />
                  <FormFeedback>{errors.linkedin}</FormFeedback>
                </FormGroup> 
                <FormGroup >
                <Label>City<span className="text-danger"> *</span></Label>
                  <Input type="text"
                          name="city"
                          id="city"
                          placeholder=""
                          invalid={touched.city && !!errors.city}
                          autoFocus={true}
                          onChange={handleChange}
                          required
                          value={values.city} />
                  <FormFeedback>{errors.city}</FormFeedback>
                </FormGroup> 
                <FormGroup >
                <Label>State<span className="text-danger"> *</span></Label>
                  <Input type="text"
                          name="state"
                          id="state"
                          placeholder=""
                          invalid={touched.state && !!errors.state}
                          autoFocus={true}
                          onChange={handleChange}
                          required
                          value={values.state} />
                  <FormFeedback>{errors.state}</FormFeedback>
                </FormGroup> 
                <FormGroup >
                <Label>Country<span className="text-danger"> *</span></Label>
                  <Input type="text"
                          name="country"
                          id="country"
                          placeholder=""
                          invalid={touched.country && !!errors.country}
                          autoFocus={true}
                          onChange={handleChange}
                          required
                          value={values.country} />
                  <FormFeedback>{errors.country}</FormFeedback>
                </FormGroup> 
                <FormGroup >
                <Label>Company Phone<span className="text-danger"> *</span></Label>
                  <Input type="text"
                          name="phone"
                          id="phone"
                          placeholder=""
                          invalid={touched.phone && !!errors.phone}
                          autoFocus={true}
                          onChange={handleChange}
                          required
                          value={values.phone} />
                  <FormFeedback>{errors.phone}</FormFeedback>
                </FormGroup> 
              </Col>
              <Col lg={6}>
                <FormGroup >
              <Label>Email<span className="text-danger"> *</span></Label>
                <Input type="text"
                        name="email"
                        id="email"
                        placeholder=""
                        invalid={touched.email && !!errors.email}
                        autoFocus={true}
                        onChange={handleChange}
                        required
                        value={values.email} />
                <FormFeedback>{errors.email}</FormFeedback>
              </FormGroup> 
                <FormGroup >
                <Label>Current # of Employees<span className="text-danger"> *</span></Label>
                  <Input type="text"
                          name="currentEmployeeNumber"
                          id="currentEmployeeNumber"
                          placeholder=""
                          invalid={touched.currentEmployeeNumber && !!errors.currentEmployeeNumber}
                          autoFocus={true}
                          onChange={handleChange}
                          required
                          value={values.currentEmployeeNumber} />
                  <FormFeedback>{errors.currentEmployeeNumber}</FormFeedback>
                </FormGroup>             
                <FormGroup >
                <Label># of Employees 6 Months Ago<span className="text-danger"> *</span></Label>
                  <Input type="text"
                          name="exEmployeeNumber"
                          id="exEmployeeNumber"
                          placeholder=""
                          invalid={touched.exEmployeeNumber && !!errors.exEmployeeNumber}
                          autoFocus={true}
                          onChange={handleChange}
                          required
                          value={values.exEmployeeNumber} />
                  <FormFeedback>{errors.exEmployeeNumber}</FormFeedback>
                </FormGroup> 
                <FormGroup >
                <Label>Lead Investors? Bootstrapped? <span className="text-danger"> *</span></Label>
                  <Input type="textarea"
                          name="leadInvestors"
                          id="leadInvestors"
                          placeholder=""
                          invalid={touched.leadInvestors && !!errors.leadInvestors}
                          autoFocus={true}
                          onChange={handleChange}
                          required
                          rows={7}
                          value={values.leadInvestors} />
                  <FormFeedback>{errors.leadInvestors}</FormFeedback>
                </FormGroup> 
              </Col>
            </Row>
            <FormGroup style={{float:"right"}}>
              <Button 
                // onClick={() => this.touchAll(setTouched, errors)} 
                style={{width: 100}}
                type="submit" color="success" className="mr-1">Add</Button>
            </FormGroup>   
        </Form>
      )}
    </Formik>
  </div>
);
    }
}
class Join extends Component {
  constructor(props){
    super(props)

  }

  render() {
    return (
      <div className="animated fadeIn" style={{height:"100%"}}>
      <Card style={{height:"100%", margin:0}}>
        <CardHeader><h1>Add Company</h1></CardHeader>  
        <CardBody style={{padding: 30, paddingTop:20}}>
          <AddCompanyForm />
        </CardBody>
      </Card>
      </div>
    );
  }
}

export default Join;

import React, { Component } from 'react';
import { Formik, Field} from 'formik';
import { Button, Col, Form, FormFeedback, FormGroup, Label, Input,  Row} from 'reactstrap';
import * as Yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


class AddCompanyForm extends Component {
  ValidationSchema = Yup.object().shape({
    companyName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    url: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    companyLinkedIn: Yup.string()
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
    companyPhone: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid'),
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
    question: Yup.number()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),                                                   
  });
  constructor(props){
    super(props)
   // this.touchAll = this.touchAll.bind(this)
  }
  onSubmit = (values, { setSubmitting, setErrors }) => {
    //console.log(values)
    this.props.onSubmitted(values)
  }
  render (){
    return (
  <div>
    <Formik
      initialValues={{
        companyName: '',
        url: '',
        companyLinkedIn: '',
        city: '',
        state: '',
        country: '',
        companyPhone: '',
        email: '',
        currentEmployeeNumber: '',
        exEmployeeNumber: '',
        leadInvestors: '',
        question: '',
      }}
      validationSchema={this.ValidationSchema}
      onSubmit={this.onSubmit}
    >
      {({ errors, touched, values, handleChange, handleSubmit, isValid, setTouched}) => (
          <Form onSubmit={handleSubmit} noValidate name='subscribeForm'>
            <FormGroup style = {{width: 300}}>
              <label>Company Name<span className="text-danger">*</span></label>
              <Input type="text"
                      name="companyName"
                      id="companyName"
                      placeholder=""
                      invalid={touched.companyName && !!errors.companyName}
                      autoFocus={true}
                      onChange={handleChange}
                      required
                      value={values.companyName} />
              <FormFeedback>{errors.companyName}</FormFeedback>
            </FormGroup>       
            <FormGroup style = {{width: 300}}>
              <Input type="text"
                      name="companyName"
                      id="companyName"
                      placeholder="Full Name"
                      invalid={touched.companyName && !!errors.companyName}
                      autoFocus={true}
                      onChange={handleChange}
                      required
                      value={values.companyName} />
              <FormFeedback>{errors.companyName}</FormFeedback>
            </FormGroup> 
            <FormGroup style = {{width: 300}}>
              <Input type="text"
                      name="companyName"
                      id="companyName"
                      placeholder="Full Name"
                      invalid={touched.companyName && !!errors.companyName}
                      autoFocus={true}
                      onChange={handleChange}
                      required
                      value={values.companyName} />
              <FormFeedback>{errors.companyName}</FormFeedback>
            </FormGroup> 
            <FormGroup style = {{width: 300}}>
              <Input type="text"
                      name="companyName"
                      id="companyName"
                      placeholder="Full Name"
                      invalid={touched.companyName && !!errors.companyName}
                      autoFocus={true}
                      onChange={handleChange}
                      required
                      value={values.companyName} />
              <FormFeedback>{errors.companyName}</FormFeedback>
            </FormGroup> 
            <FormGroup style = {{width: 300}}>
              <Input type="text"
                      name="companyName"
                      id="companyName"
                      placeholder="Full Name"
                      invalid={touched.companyName && !!errors.companyName}
                      autoFocus={true}
                      onChange={handleChange}
                      required
                      value={values.companyName} />
              <FormFeedback>{errors.companyName}</FormFeedback>
            </FormGroup> 
            <FormGroup style = {{width: 300}}>
              <Input type="text"
                      name="companyName"
                      id="companyName"
                      placeholder="Full Name"
                      invalid={touched.companyName && !!errors.companyName}
                      autoFocus={true}
                      onChange={handleChange}
                      required
                      value={values.companyName} />
              <FormFeedback>{errors.companyName}</FormFeedback>
            </FormGroup> 
            <FormGroup style = {{width: 300}}>
              <Input type="text"
                      name="companyName"
                      id="companyName"
                      placeholder="Full Name"
                      invalid={touched.companyName && !!errors.companyName}
                      autoFocus={true}
                      onChange={handleChange}
                      required
                      value={values.companyName} />
              <FormFeedback>{errors.companyName}</FormFeedback>
            </FormGroup> 
            <FormGroup style = {{width: 300}}>
              <Input type="text"
                      name="companyName"
                      id="companyName"
                      placeholder="Full Name"
                      invalid={touched.companyName && !!errors.companyName}
                      autoFocus={true}
                      onChange={handleChange}
                      required
                      value={values.companyName} />
              <FormFeedback>{errors.companyName}</FormFeedback>
            </FormGroup> 
            <FormGroup style = {{width: 300}}>
              <Input type="text"
                      name="companyName"
                      id="companyName"
                      placeholder="Full Name"
                      invalid={touched.companyName && !!errors.companyName}
                      autoFocus={true}
                      onChange={handleChange}
                      required
                      value={values.companyName} />
              <FormFeedback>{errors.companyName}</FormFeedback>
            </FormGroup> 
            <FormGroup style = {{width: 300}}>
              <Input type="text"
                      name="companyName"
                      id="companyName"
                      placeholder="Full Name"
                      invalid={touched.companyName && !!errors.companyName}
                      autoFocus={true}
                      onChange={handleChange}
                      required
                      value={values.companyName} />
              <FormFeedback>{errors.companyName}</FormFeedback>
            </FormGroup> 
            <FormGroup style = {{width: 300}}>
              <Input type="text"
                      name="companyName"
                      id="companyName"
                      placeholder="Full Name"
                      invalid={touched.companyName && !!errors.companyName}
                      autoFocus={true}
                      onChange={handleChange}
                      required
                      value={values.companyName} />
              <FormFeedback>{errors.companyName}</FormFeedback>
            </FormGroup> 
            <FormGroup style = {{width: 300}}>
              <Input type="text"
                      name="companyName"
                      id="companyName"
                      placeholder="Full Name"
                      invalid={touched.companyName && !!errors.companyName}
                      autoFocus={true}
                      onChange={handleChange}
                      required
                      value={values.companyName} />
              <FormFeedback>{errors.companyName}</FormFeedback>
            </FormGroup>                                                                                                                            
            <FormGroup style = {{width: 300}}>
              <Input type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      invalid={touched.email && !!errors.email}
                      autoFocus={true}
                      onChange={handleChange}
                      required
                      value={values.email} />
              <FormFeedback>{errors.email}</FormFeedback>
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
class Join extends Component {
  constructor(props){
    super(props)

  }

  render() {
    return (
      <div className="animated fadeIn">
        <h1>Add Company</h1>
        <div>
          <AddCompanyForm />
        </div>        
      </div>
    );
  }
}

export default Join;

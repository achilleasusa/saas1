import React from 'react';
import { Button, Col, Form, FormFeedback, FormGroup, Label, Input,  Row} from 'reactstrap';
import { Formik } from 'formik';
import * as Yup from 'yup'
import './form.css'

const validationSchema = function (values) {
  return Yup.object().shape({
    fullName: Yup.string()
    .min(2, `First name has to be at least 2 characters`)
    .required('First name is required'),
    lastName: Yup.string()
    .min(1, `Last name has to be at least 1 character`)
    .required('Last name is required'),
    phone: Yup.string()
    .min(5, `phone has to be at least 5 characters`)
    .required('phone is required'),
    email: Yup.string()
    .email('Invalid email address')
    .required('Email is required!'),
    password: Yup.string()
    .min(6, `Password has to be at least ${6} characters!`)
    .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/, 'Password must contain: numbers, uppercase and lowercase letters\n')
    .required('Password is required'),
    confirmPassword: Yup.string()
    .oneOf([values.password], 'Passwords must match')
    .required('Password confirmation is required'),
    accept: Yup.bool()
    .required('* required')
    .test('accept', 'You have to accept our Terms and Conditions!', value => value === true),
  })
}

const validate = (getValidationSchema) => {
  return (values) => {
    const validationSchema = getValidationSchema(values)
    try {
      validationSchema.validateSync(values, { abortEarly: false })
      return {}
    } catch (error) {
      return getErrorsFromValidationError(error)
    }
  }
}

const getErrorsFromValidationError = (validationError) => {
  const FIRST_ERROR = 0
  return validationError.inner.reduce((errors, error) => {
    return {
      ...errors,
      [error.path]: error.errors[FIRST_ERROR],
    }
  }, {})
}

const initialValues = {
  fullName: "",
  lastName: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
  accept: false
}

const onSubmit = (values, { setSubmitting, setErrors }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2))
    // console.log('User has been successfully saved!', values)
    setSubmitting(false)
  }, 2000)
}

class ValidationForms extends React.Component {
  constructor(props){
    super(props)
    this.touchAll = this.touchAll.bind(this)

  }

  findFirstError (formName, hasError) {
    const form = document.forms[formName]
    for (let i = 0; i < form.length; i++) {
      if (hasError(form[i].name)) {
        form[i].focus()
        break
      }
    }
  }

  validateForm (errors) {
    this.findFirstError('simpleForm', (fieldName) => {
      return Boolean(errors[fieldName])
    })
  }

  touchAll(setTouched, errors) {
    setTouched({
        fullName: true,
        lastName: true,
        phone: true,
        email: true,
        password: true,
        confirmPassword: true,
        accept: true
      }
    )
    this.validateForm(errors)
  }

  render() {
    return (
      <div className="animated fadeIn">
        <h4>To Export the List Subscribe to our Mailing List</h4>
        <Formik
            initialValues={initialValues}
            validate={validate(validationSchema)}
            onSubmit={onSubmit}
            render={
            ({
                values,
                errors,
                touched,
                status,
                dirty,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                isValid,
                handleReset,
                setTouched
            }) => (
                <Row>
                    <Form onSubmit={handleSubmit} noValidate name='simpleForm'>
                    <FormGroup>
                        <Label for="fullName">Full Name</Label>
                        <Input type="text"
                                name="fullName"
                                id="fullName"
                                placeholder="Full Name"
                                autoComplete="given-name"
                                invalid={touched.fullName && !!errors.fullName}
                                autoFocus={true}
                                required
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.fullName} />
                        <FormFeedback>{errors.fullName}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email Address</Label>
                        <Input type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                autoComplete="email"
                                invalid={touched.email && !!errors.email}
                                required
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email} />
                        <FormFeedback>{errors.email}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="phone">Phone</Label>
                        <Input type="text"
                                name="phone"
                                id="phone"
                                placeholder="Phone Number"
                                autoComplete="phone"
                                invalid={touched.phone && !!errors.phone}
                                required
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone} />
                        <FormFeedback>{errors.phone}</FormFeedback>
                    </FormGroup>
                        <FormGroup>
                            <Label for="password">Name one piece of data that you would like added to this list</Label>
                            <Input type="password"
                                    name="password"
                                    id="password"
                                    placeholder=""
                                    autoComplete="new-password"
                                    invalid={touched.password && !!errors.password}
                                    required
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password} />
                            {/*<FormFeedback>Required password containing at least: number, uppercase and lowercase letter, 8 characters</FormFeedback>*/}
                            <FormFeedback>{errors.password}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="confirmPassword">What other industries are you interested in? </Label>
                            <Input type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder=""
                                    autoComplete="new-password"
                                    invalid={touched.confirmPassword && !!errors.confirmPassword}
                                    required
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirmPassword} />
                            <FormFeedback>{errors.confirmPassword}</FormFeedback>
                        </FormGroup>
                    <FormGroup>
                        {/* <Button type="submit" color="primary" className="mr-1" disabled={isSubmitting || !isValid}>{isSubmitting ? 'Wait...' : 'Submit'}</Button> */}
                        <Button type="button" color="success" className="mr-1" onClick={() => this.touchAll(setTouched, errors)}  disabled={isValid}>Submit</Button>
                        {/* <Button type="reset" color="danger" className="mr-1" onClick={handleReset}>Reset</Button> */}
                    </FormGroup>
                    </Form>
                </Row>
            )} />
      </div>
    )
  }
}

export default ValidationForms;
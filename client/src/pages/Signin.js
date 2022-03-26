import React from 'react'
import { useFormik } from 'formik'
import '../styles/signup.css'

function Signin() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''

    },
    onSubmit: values => {
      console.log('Form data', values)
    }
  });


  return (
    <div className='signup-container'>
      <h1 className='donut-tag-line'>Lets get started!</h1>
      <form className='signup-form' onSubmit={formik.handleSubmit}>
      <div className='form-setup'>
        <label htmlFor='email'>E-mail</label>
        <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email}/>
        <br></br>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' onChange={formik.handleChange} value={formik.values.password}/>
        <br></br>
        </div>
        <button className='signup-submit-btn' type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default Signin
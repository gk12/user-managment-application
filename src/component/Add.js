import React, { useState } from 'react'
import { Button,Form } from 'react-bootstrap'
import User from './User'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link,useNavigate } from 'react-router-dom'
import {v4 as uuid} from "uuid"
export default function Add() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phoneno,setPhoneno]=useState("")
    const history = useNavigate()

    const handleSubmit=(e)=>{
      e.preventDefault();
      const ids=uuid();
      let uniqueId=ids.slice(0,8);
      let a=name,
      b=email,
      c=phoneno
      if (!a || !b || !c) {
        return alert('Something is Missing')
      }


 
// validation for email id
  var emailFormat=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  if(!emailFormat.test(b))
  {
    return alert("Please provide valid email address")
  }

  // validation for phone no
  var phoneFormat = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/
  if(!phoneFormat.test(c))
  {
    return alert("please provide valid phone number")
  }

  
      User.push({id:uniqueId,Name:a,Email:b,PhoneNo:c})
      history("/")

      return alert(`${name}'s data has been added`)
    }
  return (
    <div>
      <Form className='d-grid gap-2' style={{margin:"15rem"}}>
        <Form.Group className='mb-3' controlId='formName'>
          <Form.Control type="text" placeholder='Enter Name' required onChange={(e)=>setName(e.target.value)}>
            </Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formEmail'>
          <Form.Control type="email" placeholder='Enter Email' required onChange={(e)=>setEmail(e.target.value)}>
            </Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formPhoneNo'>
          <Form.Control type="number" placeholder='Enter PhoneNo.' required onChange={(e)=>setPhoneno(e.target.value)}>
            </Form.Control>
        </Form.Group>
        <Button onClick={(e)=>handleSubmit(e)} type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

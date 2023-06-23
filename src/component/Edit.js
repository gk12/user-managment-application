import React, { useEffect, useState } from 'react'
import { Button,Form } from 'react-bootstrap'
import User from './User'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link,useNavigate } from 'react-router-dom' 

export default function Edit() {
  
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phoneno,setPhoneNo]=useState("")
    const [id,setId]=useState("")


    const history = useNavigate()

    var index=User.map(function(e){
        return e.id
    }).indexOf(id)

    const handleSubmit=(e)=>{
        e.preventDefault();

        let x=User[index]
        x.Name=name
        x.Email=email
        x.PhoneNo=phoneno
        
        // validation for email id
  var emailFormat=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  if(!emailFormat.test(x.Email))
  {
    return alert("Please provide valid email address")
  }

  // validation for phone no
  var phoneFormat = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/
  if(!phoneFormat.test(x.PhoneNo))
  {
    return alert("please provide valid phone number")
  }
        history("/")
  
        return alert(`${name}'s data has been Updated`)
      }

      useEffect(()=>{
        setName(localStorage.getItem('Name'))
        setEmail(localStorage.getItem('Email'))
        setPhoneNo(localStorage.getItem('PhoneNo'))
        setId(localStorage.getItem('Id'))

      },[])

    
    return (
        <div>
            <Form className='d-grid gap-2' style={{margin:"15rem"}}>
        <Form.Group className='mb-3' controlId='formName'>
          <Form.Control 
          type="text" 
          placeholder='Enter Name' 
          value={name} 
          required="true" 
          onChange={(e)=>setName(e.target.value)
          }>
            </Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formEmail'>
          <Form.Control 
          type="email" 
          placeholder='Enter Email' 
          value={email} 
          required="true" 
          onChange={(e)=>setEmail(e.target.value)
          }>
            </Form.Control>  
        </Form.Group>
        <Form.Group className='mb-3' controlId='formPhoneNo'>
          <Form.Control 
          type="number" 
          placeholder='Enter PhoneNo.' 
          value={phoneno} 
          required="true" 
          onChange={(e)=>setPhoneNo(e.target.value)
          }>
            </Form.Control>
        </Form.Group>
        <Button onClick={(e)=>handleSubmit(e)} type='submit'>Update</Button>
      </Form>
        </div>
    )
}

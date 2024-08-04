import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addStudent } from '../services/allApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
function Add() {
    const navigate= useNavigate()
    const [formData,setFormData ]=useState({
        name:"",age:"",phone:"",email:"",dept:""
    })
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)
        const {name,age,email,phone,dept}=formData
        if(!name || !age || !email || !phone || !dept){
            toast.warning("Invalid Inputs")
        }else{
            const result=addStudent({empname:name,age,email,phone,department:dept})
            result.then(res=>{
                toast.success("Employee Added Successfully")
                setFormData({name:"",age:"",phone:"",email:"",dept:""})
                navigate('/')
            }).catch(err=>{
                toast.error("Employee Adding Failed")
                console.log(err);
            })
        }

    }
    const handleCancel=()=>{
        setFormData({name:"",age:"",phone:"",email:"",dept:""})
        navigate('/')
    }



  return (
    <>
        <div className='d-flex flex-column align-items-center justify-content-center p-5 container-fluid'>
            <div className='w-50 border shadow p-5'>
                <h1 className='text-success'>Add Employee</h1>
                <form>
                <FloatingLabel controlId="floatingname" label="Student name" className="mb-3">
                    <Form.Control onChange={(e)=>{ setFormData({...formData,name: e.target.value})}} type="text" placeholder="Aarattannan" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingage" label="Student age" className="mb-3">
                    <Form.Control onChange={(e)=>{ setFormData({...formData,age: e.target.value})}} type="number" placeholder="44" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control onChange={(e)=>{ setFormData({...formData,email: e.target.value})}} type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingnumber" label="Phone Number">
                    <Form.Control onChange={(e)=>{ setFormData({...formData,phone: e.target.value})}} type="number" placeholder="9xxxxxxxxx" />
                </FloatingLabel>  
                <FloatingLabel controlId="floatingdpt" label="Department">
                    <Form.Control onChange={(e)=>{ setFormData({...formData,dept: e.target.value})}} type="text" placeholder="IT" />
                </FloatingLabel>
                <div className='text-center mt-2 d-flex justify-content-around'>
                    <button className='btn btn-primary' onClick={(e)=>handleSubmit(e)}>Submit</button>
                    <button className='btn btn-danger' onClick={handleCancel}>Cancel</button>
                </div>  
                </form>
            </div>
        </div>
    </>
  )
}

export default Add
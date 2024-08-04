import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { getEmployee,editEmployee } from '../services/allApi';
import { toast } from 'react-toastify';
function Edit() {

    const [employeeData,setEmployeeData]=useState({
        id:"",name:"",age:"",phone:"",email:"",dept:""
    })
    const navigate= useNavigate()

    const {id}=useParams()
    console.log(id)
    useEffect(()=>{
        getData()
    },[])

    const getData=()=>{
        getEmployee(id).then(res=>{
            setEmployeeData({id:res.data.id,name:res.data.empname,age:res.data.age,phone:res.data.phone,email:res.data.email,dept:res.data.department})
        }).catch(err=>{console.log(err)})
        
    }
    const handleUpdate=(e)=>{
        e.preventDefault()
        const {name,age,email,phone,dept}=employeeData
        if(!name || !age || !email || !phone || !dept){
            toast.warning("Invalid Input")
        }
        else{
            editEmployee(employeeData.id,{empname:name,age,email,phone,department:dept}).then(res=>{
                toast.success("Updated")
                navigate('/')
            }).catch(err=>{
                console.log(err);
                toast.error("Failed")
            })
        }
    }

  return (
    <>
    <div className='d-flex flex-column align-items-center justify-content-center p-5 container-fluid'>
            <div className='w-50 border shadow p-5'>
                <h1 className='text-success'>Edit Employee</h1>
                <form>
                <FloatingLabel controlId="floatingname" label="Employee name" className="mb-3">
                    <Form.Control onChange={(e)=>{setEmployeeData({...employeeData,name:e.target.value})}} type="text" placeholder="Aarattannan" value={employeeData.name} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingage" label="Employee age" className="mb-3">
                    <Form.Control onChange={(e)=>{setEmployeeData({...employeeData,age:e.target.value})}} type="number" placeholder="44" value={employeeData.age} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control onChange={(e)=>{setEmployeeData({...employeeData,email:e.target.value})}} type="email" placeholder="name@example.com" value={employeeData.email} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingnumber" label="Phone Number">
                    <Form.Control onChange={(e)=>{setEmployeeData({...employeeData,phone:e.target.value})}} type="number" placeholder="9xxxxxxxxx" value={employeeData.phone} />
                </FloatingLabel>  
                <FloatingLabel controlId="floatingdpt" label="Department">
                    <Form.Control onChange={(e)=>{setEmployeeData({...employeeData,dept:e.target.value})}} type="text" placeholder="IT" value={employeeData.dept} />
                </FloatingLabel>
                <div className='text-center mt-2 d-flex justify-content-around'>
                    <button className='btn btn-outline-light' onClick={(e)=>{handleUpdate(e)}} style={{backgroundColor:"green"}}>Update</button>
                    <button className='btn btn-outline-light' style={{backgroundColor:"red"}}>Cancel</button>
                </div>  
                </form>
            </div>
        </div>
    </>
  )
}

export default Edit
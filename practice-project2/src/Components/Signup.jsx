import React, { useState } from 'react'
// import { Toast } from 'react-bootstrap';
import {toast} from 'react-toastify'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
export default function Signup() {
    
    const [inp, setInp] = useState({
        name: "", email: "", password: ""
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInp({ ...inp, [name]: value })
        // console.log(inp);
    }
    const isValidate = () =>{
        let isProceed = true;
        let errMessage = "please enter the value of :"
        if (inp.name === "" || inp.name === null) {
            isProceed= false;
            errMessage += " usename "
        }
        if (inp.name === "") {
            isProceed= false;
            errMessage += " email "
        }
        if (inp.name === "") {
            isProceed= false;
            errMessage += " password "
        }
        if (!isProceed) {
            toast.warning(errMessage)
        }else if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(inp.email)) {
            
        }else{
            isProceed = false
            toast.warning("please enter the valid email")
        }
        return isProceed
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isValidate()) {
        fetch("http://localhost:8000/user",{
            method:"POST",
            headers:{"content-type" : "application/json"},
            body :JSON.stringify(inp)
        })
        .then((res)=>{
            // alert("Registered succesfully")
            toast.success("Registered succesfully")
        //    Toast.success("Registered successfuly")
           console.log(res);
        }).then((err)=>{
            if (err) {
                toast.error("Failed :" )
            }
        })
        navigate("/login")
    }
        console.log(inp);
    }
    return (
        <>
            <div className="container  col-6 ">
                <h1>Registration Page</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" name='name' value={inp.name} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3"  >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" name='email' value={inp.email} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' value={inp.password} onChange={handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

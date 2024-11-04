import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddStudent = () => {
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        gender: ""
    });

    const handleChange = (e) => {
        setData({...data,[e.target.name]: e.target.value });
    }

    const saveStudent = (e) => {
        e.preventDefault()
    
        const token = sessionStorage.getItem("access_token")
    
        axios.post('http://localhost:4000/addstudent', data, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
    }    
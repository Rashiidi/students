import React, { useState } from 'react';
import axios from "axios";
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = ({ addStudent }) => {
  const [formData, setFormData] = useState({
    FirstName: '',
    lastName: '',
    gender: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(formData);
    saveStudent(e); 
    setFormData({ firstName: '', lastName: '', gender: '' });
  }
  

  const saveStudent = (e) => {
    e.preventDefault();

    const token = sessionStorage.getItem("access_token");

    axios.post('http://localhost:4000/addstudent', formData, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    })
    .then((response) => {
        toast.success("Student added successfully!");
        setFormData({ firstName: '', lastName: '', gender: '' }); // Clear form on success
    })
    .catch((error) => {
        toast.error("Failed to add student. Please try again.");
        console.error("There was an error adding the student!", error);
    });
};


  return (
    <div>
      <h2>Add Student Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input 
            type="text" 
            className="form-control" 
            name="FirstName" 
            value={formData.firstName} 
            onChange={handleChange} 
            placeholder="First Name" 
            required 
          />
        </div>
        <div className="mb-3">
          <input 
            type="text" 
            className="form-control" 
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange} 
            placeholder="Last Name" 
            required 
          />
        </div>
        <div className="mb-3">
          <select 
            className="form-control" 
            name="gender" 
            value={formData.gender} 
            onChange={handleChange} 
            required>
          
            <option value="" disabled>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Add Student</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Home;

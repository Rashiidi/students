import React, { useState } from 'react';
import axios from "axios";
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = ({ addStudent }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    class: '',
    course: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(formData);
    setFormData({ name: '', email: '', class: '', course: '', phone: '' });
  }

  return (
    <div>
      <h2>Add Student Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" name="class" value={formData.class} onChange={handleChange} placeholder="Class Attending" required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" name="course" value={formData.course} onChange={handleChange} placeholder="Course" required />
        </div>
        <div className="mb-3">
          <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />
        </div>
        <button type="submit" className="btn btn-primary">Add Student</button>
      </form>
    </div>
  );
}

export default Home;
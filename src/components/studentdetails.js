import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./UseFetch";
import axios from "axios";

const StudentDetails = () => {
  const { id } = useParams();
  const { data: student, isLoading } = useFetch(`http://localhost:4000/student/${id}`);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', gender: '' });

  useEffect(() => {
    if (student) {
      setFormData({
        firstName: student.firstName,
        lastName: student.lastName,
        gender: student.gender,
      });
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:4000/studentinfo/${id}`, formData)
      .then(() => console.log('Student updated successfully.'))
      .catch((err) => console.error('Error updating student:', err));
  };

  if (isLoading) {
    return <p>Loading...</p>; 
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </div>

      <div>
        <label>Last Name:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </div>

      <div>
        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button type="submit">Edit</button>
    </form>
  );
}

export default StudentDetails;

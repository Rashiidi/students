import React, { useState } from 'react';

const StudentFormComponent = ({ onAddStudent }) => {
  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    class: '',
    course: '',
    phoneNumber: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleAddStudent = () => {
    onAddStudent(newStudent);
    setNewStudent({ name: '', email: '', class: '', course: '', phoneNumber: '' });
  };

  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" value={newStudent.name} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={newStudent.email} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Class:
        <input type="text" name="class" value={newStudent.class} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Course:
        <input type="text" name="course" value={newStudent.course} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Phone Number:
        <input type="tel" name="phoneNumber" value={newStudent.phoneNumber} onChange={handleInputChange} />
      </label>
      <br />
      <button type="button" onClick={handleAddStudent}>Add Student</button>
    </form>
  );
};

export default StudentFormComponent;
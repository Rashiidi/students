import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


  return (
    <div className="container">
      <h1>Student Information Collector</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className="form-group">
          <label>Course:</label>
          <input type="text" value={course} onChange={(event) => setCourse(event.target.value)} />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="tel" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Add Student</button>
      </form>
      <hr />
      <h2>Student Information</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        
      </table>
    </div>
  );
};

export default StudentInfo;
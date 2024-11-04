import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';




const Students = ({ students, setStudents }) => {
  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/studentinfo/${id}`);
      console.log('Student deleted successfully.');

     
      setStudents((prevStudents) => prevStudents.filter(student => student.id !== id));
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return ( 
    <div>
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.gender}</td>
                <td>
                  <Link to={`/student-details/${student.id}`}>
                    <button className="btn btn-sm btn-primary">
                      Edit
                    </button>
                  </Link>
                  <button 
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Students;

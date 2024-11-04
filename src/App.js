import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Students from './components/students';
import StudentDetails from './components/studentdetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (newStudent) => {
    setStudents([...students, { ...newStudent, id: Date.now() }]);
  };
  

  

  return (
    
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <Switch>
            <Route exact path="/" render={() => <Home addStudent={addStudent} />} />
            <Route path="/students" render={() => <Students students={students} />} />
            <Route path='/student-details/:id'>
          <StudentDetails/>
        </Route>
        <Route path='/'>
          <StudentDetails/>
        </Route>
            
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

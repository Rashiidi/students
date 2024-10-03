
import React from 'react';
// import StudentInfo from './components/studentinfo';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Home';
import Students from './Students';


function App() {
  return (
    <Router>
    <div className="App">
          {/* <StudentInfo /> */}
          <Navbar />
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/students" component={Students} />
      </Switch>
      </Router>
  );
}

export default App;

import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ExercisesList from "./components/ExercisesList";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";
import EditExercise from "./components/EditExercise";
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route path="/" exact component={ExercisesList}/>
        <Route path="/edit/:id" component={EditExercise}/>
        <Route path="/create" component={CreateExercise}/>
        <Route path="/user" component={CreateUser}/>
      </div>
    </Router>
    
  );
}

export default App;

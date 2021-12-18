import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
import {
  BrowserRouter as Router ,
  Routes,
  Route
} from "react-router-dom"
import Desc from './Desc';




const App=()=>{
return (
  <Router>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/film/:id' element={<Desc/>} />
    </Routes>
  </Router>
)
}


export default App;

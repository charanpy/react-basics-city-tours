import React from 'react';
import logo from './logo.svg';
import './App.scss';
import TourList from './components/TourList';
import Navbar from './components/Navbar/Navbar.js';
function App() {
  return (
    <div className="App">
     <Navbar />
<TourList />
    </div>
  );
}

export default App;

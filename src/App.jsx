import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact'
import Header from './components/Header';

function App() {
  return (
    <>
    <nav>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path="about" element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route/>
      </Routes>
    </nav>
    </>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact'
import routes from './routes';
function App() {
  return (
    <>
    <nav>
    {routes}
    </nav>
    </>
  );
}

export default App;

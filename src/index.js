import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavBar from './components/NavBar';

function App(){
  return (
  <header>
    <NavBar></NavBar>
  </header>
);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

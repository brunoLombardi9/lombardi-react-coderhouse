import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavBar from './components/NavBar';
import ItemsListContainer from './components/ItemsListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';

function App() {
  return (
    <>
    <NavBar ubicacion='arriba' />
    <main>
      <div className= 'd-flex justify-content-center container'>   
        <ItemsListContainer />
      </div>
      <ItemDetailContainer />
    </main>
    <NavBar ubicacion='abajo' />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

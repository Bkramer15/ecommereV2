import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footers from './Footers';
import MainPages from './Landings';
import Register from './Registers';
import Products from './Product';
import Login from './Login';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* Routes */}

        <Routes>
          <Route path="/" element={<MainPages />} />
          <Route path="/Products" element={<Products ProductsEndpoint="/products" />} />
          <Route path="/Bestsellers" element={<Products ProductsEndpoint="/bestsellers" />} />                 
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footers />
      </div>
    </BrowserRouter>
  );
}

export default App;

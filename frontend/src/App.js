import React from 'react';
import './App.css';
import HomeScreen from './Pages/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductEditScreen from './Pages/ProductEditScreen';
import ProductListScreen from './Pages/ProductListScreen';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/productlist' element={<ProductListScreen />} />
        <Route path='/:id/edit' element={<ProductEditScreen />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

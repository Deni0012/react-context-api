import { useState } from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Layout from './layout/Layout';
import OneProduct from './pages/OneProduct';


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/chi-siamo' element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<OneProduct />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;

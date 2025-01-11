import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Footer from './components/Footer';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
`;

const App = () => {
  return (
    <AppContainer>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </AppContainer>
  );
};

export default App;

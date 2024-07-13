// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddDestination from './components/AddDestination';
import AddBangka from './components/AddBangka';
import Summary from './components/Summary';
import styled from 'styled-components';

const AppContainer = styled.div`
  background: url(${process.env.PUBLIC_URL + '/images/background.jpg'}) no-repeat center center fixed;
  background-size: cover;
  color: black;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

function App() {
  const [destination, setDestination] = useState('');
  const [destinationPrice, setDestinationPrice] = useState(0);
  const [bangka, setBangka] = useState('');
  const [bangkaPrice, setBangkaPrice] = useState(0);

  const totalPrice = destinationPrice + bangkaPrice;

  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={<AddDestination setDestination={setDestination} setDestinationPrice={setDestinationPrice} />} />
          <Route path="/add-bangka" element={<AddBangka setBangka={setBangka} setBangkaPrice={setBangkaPrice} />} />
          <Route path="/summary" element={<Summary destination={destination} bangka={bangka} totalPrice={totalPrice} />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;

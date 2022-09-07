import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/protected-route.js";
import { PublicPage } from './pages/public-page.js';
import { HomePage } from './pages/home-page.js';
import './App.css';
import AboutUs from './pages/about-page.js';
import { MarketPage } from './pages/market-page.js';
import { CoinPage } from './pages/coin-page.js';

function App() {
  const {
    isLoading,
    error,
  } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Oops... {error.message}</div>
  }
  return (
    <Routes>
      <Route path='/' element={<PublicPage/>} />
      <Route path='/home' element={<ProtectedRoute component={HomePage} />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/market' element={<MarketPage />} />
      <Route path='/coin' element={<CoinPage />} />
    </Routes>
  )
}

export default App;

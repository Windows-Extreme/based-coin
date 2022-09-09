import { useAuth0 } from '@auth0/auth0-react';
import React, {useState, useCallback, useEffect} from 'react'
import { Route, Routes } from "react-router-dom";
import axios from 'axios';
// import { ProtectedRoute } from "./components/protected-route.js";
// import './App.css';
import PageLayout from './components/page-layout.js';
import PublicPage from './pages/public-page.js';
import AboutUs from './pages/about-page.js';
import HomePage from './pages/home-page.js';
import MarketPage from './pages/market-page.js';
import CoinPage from './pages/coin-page.js';


function App() {
  const [userData, setUserData] = useState(null);
  const {
    isLoading,
    error,
    getAccessTokenSilently,
    isAuthenticated
  } = useAuth0();

  const getUserData = useCallback(async () => {
    try {
      const accessToken = await getAccessTokenSilently();
      let response = await axios.get(`${process.env.REACT_APP_AUTH0_SERVER_URL}/user`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
      const responseData = response.data;
      setUserData(responseData);
    } catch (error) {
      console.error(error.message)
    }
  }, [getAccessTokenSilently])

  useEffect(() => {
    if (isAuthenticated) {
      getUserData();
    }
  }, [getUserData, isAuthenticated])

  const handleBookmark = async (id) => {
    try {
      const accessToken = await getAccessTokenSilently();
      if (userData?.watchlist.some(coin => coin._id === id)) {
        await axios.delete(`${process.env.REACT_APP_AUTH0_SERVER_URL}/user`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            data: {
              coinId: id
            }
          });
      } else {
        await axios.post(`${process.env.REACT_APP_AUTH0_SERVER_URL}/user`,
        {
          coinId: id
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
      }
      getUserData();
    } catch (error) {
      console.error('Error in handleBookmark:', error)
    }
  }

  if (isLoading) {
    return <PageLayout><div>Loading...</div></PageLayout>
  }
  if (error) {
    return <div>Oops... {error.message}</div>
  }
  return (
    <Routes>
      <Route path='/' element={<PublicPage/>} />
      <Route path='/home' element={<HomePage userData={userData} handleBookmark={handleBookmark}/>} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/market' element={<MarketPage userData={userData} handleBookmark={handleBookmark}/>} />
      <Route path='/coins/:id' element={<CoinPage />} />
    </Routes>
  )
}

export default App;

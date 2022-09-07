import { useAuth0 } from '@auth0/auth0-react';
import React, {useState, useCallback, useEffect} from 'react'
import { Route, Routes } from "react-router-dom";
// import { ProtectedRoute } from "./components/protected-route.js";
import { PublicPage } from './pages/public-page.js';
import { HomePage } from './pages/home-page.js';
import './App.css';
import AboutUs from './pages/about-page.js';
import { MarketPage } from './pages/market-page.js';
import axios from 'axios';


function App() {
  const [userData, setUserData] = useState(null);
  const {
    isLoading,
    error,
    getAccessTokenSilently
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
      console.log(responseData)
      setUserData(responseData);
    } catch (error) {
      console.error(error.message)
    }
  }, [getAccessTokenSilently])

  useEffect(() => {
    getUserData();
  }, [getUserData])

  const handleBookmark = async (id) => {
    try {
      const accessToken = await getAccessTokenSilently();
      if (userData.watchlist.some(coin => coin._id === id)) {
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
    return <div>Loading...</div>
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
    </Routes>
  )
}

export default App;

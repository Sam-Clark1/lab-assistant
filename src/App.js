import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import CalcPage from './components/pages/CalcPage';
import Banner from './components/pages/Banner';
import Calculations from './components/Calculation';
import CalcLanding from './components/pages/CalcLanding';
import About from './components/pages/About';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';

import AuthService from './api/auth.service';
import axios from './api/axios';

function App() {
  const [userFavorites, setUserFavorites] = useState([]);
    useEffect(() => {
      const user = AuthService.getCurrentUser();
      if (user) {
        axios.get(`users/${user.id}`).then(
          response => {
            setUserFavorites(response.data.calculations)
          })
      }
    }, []);

   return (
      <Router>
        <div className='flex-col justify-start min-h-screen'>
          <Header  userFavorites={userFavorites} setUserFavorites={setUserFavorites}/>
          <Routes>
            <Route path='lab-assistant/' element={<Banner/>}/>
            <Route path='lab-assistant/about' element={<About/>}/>
            <Route path='lab-assistant/login' element={<Login/>}/>
            <Route path='lab-assistant/signup' element={<SignUp/>}/>
            <Route path='lab-assistant/calculations' element={<CalcPage  userFavorites={userFavorites} setUserFavorites={setUserFavorites}/>}>
              <Route index element={<CalcLanding/>}/>
              <Route path=':calc' element={<Calculations  userFavorites={userFavorites} setUserFavorites={setUserFavorites}/>}/>
            </Route>    
          </Routes>
          <Footer />
        </div>
      </Router>
   )
}

export default App;

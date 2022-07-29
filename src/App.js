import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import CalcPage from './components/CalcPage';
import Banner from './components/Banner';
import Calculations from './components/Calculation';
import CalcLanding from './components/CalcLanding';
import About from './components/About';

function App() {
   return (
      <Router>
        <div className='flex-col justify-start min-h-screen'>
          <Header/>
          <Routes>
            <Route path='/' element={<Banner/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='calculations' element={<CalcPage/>}>
              <Route index element={<CalcLanding/>}/>
              <Route path=':calc' element={<Calculations/>}/>
            </Route>    
          </Routes>
          <Footer />
        </div>
      </Router>
   )
}

export default App;

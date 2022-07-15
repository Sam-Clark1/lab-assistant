import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Box } from '@mui/material';

import Header from './components/Header';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import MainPage from './components/MainPage';

function App() {
   return (
      <Router>
        <div className='flex-col justify-start min-h-screen bg-primary'>
          <Header />
          <SideNav />

              <Box component="main" sx={{ p: 3 }} className="md:ml-[340px] md:mr-[100px] min-h-[88vh]">
                
                <Routes>
                    <Route path='/' element={<MainPage/>} />
                </Routes>

              </Box>

          <Footer />
        </div>
      </Router>
   )
}

export default App;

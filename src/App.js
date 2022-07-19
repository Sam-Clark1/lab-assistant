import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { Box } from '@mui/material';

import Header from './components/Header';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Banner from './components/Banner';

function App() {
   return (
      <Router>
        <div className='flex-col justify-start min-h-screen'>
        <Header/>
          <Routes>
            <Route path='/' element={<Banner/>}/>
            <Route path='/about'/>
            <Route path='/calculations' element={<MainPage/>}>
              <Route index element={<SideNav/>}/>
            </Route>    
          </Routes>
          <Footer />
        </div>
      </Router>
   )
}

export default App;

import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import Test from './components/Test';
function App() {
   return (
      <Router>
        <div className='flex-col justify-start min-h-screen'>
          <Header />
            <div className='container'>
              <SideNav />
             
              <Routes>

              </Routes>
              <Routes>
                  <Route/>
              </Routes>

            </div>
          <Footer />
        </div>
      </Router>
   )
}

export default App;

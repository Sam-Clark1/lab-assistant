import './App.css';

import { createTheme, ThemeProvider } from '@mui/system';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SideNav from './components/SideNav';

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#64dd17',
        },
        secondary: {
          main: '#250c82',
        },
      },
      props: {
        MuiButtonBase: {
          disableRipple: true,
        },
      },
});

function App() {
   return (
   <ThemeProvider theme={theme}>
      <Router>
        <Header />

        <SideNav />

        <Routes>
            <Route/>
        </Routes>

      </Router>
    </ThemeProvider>
   )
}

export default App;

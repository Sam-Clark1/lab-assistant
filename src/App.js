import './App.css';

import { createTheme, ThemeProvider } from '@mui/system';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#26a69a',
        },
        secondary: {
          main: '#f50057',
        },
        success: {
          main: '#4caf50',
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
        <Routes>
            <Route/>
        </Routes>
      </Router>
    </ThemeProvider>
   )
}

export default App;

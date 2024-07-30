import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counterComponent';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <Counter />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;

import React, { useState } from 'react';

import '../layout/styles/App.css';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import { orange, green } from '@mui/material/colors';
import Home from '../pages/Home';

function App() {

  const [darkMode, setDarkMode] = useState(true);

  function changeDarkMode() {
    setDarkMode(!darkMode);
  }

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : "light",
      primary: {
        main: orange[500],
      },
      secondary: {
        main: green[500],
      },
      background: {
        default: darkMode ? "#232323": "#fff",
        paper: darkMode ? "#181818" : "#fff"
      }
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Home 
          zIndex={theme.zIndex.drawer}
          color_bg={theme.palette.background.default}
          color_bg2={theme.palette.background.paper}
          darkMode={darkMode}
          ChangeDarkMode={changeDarkMode}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;

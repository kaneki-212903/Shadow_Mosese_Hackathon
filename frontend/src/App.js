import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import EditProfile from './pages/editprofile';

// MUI Theme imports
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create a dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark', // Switches the theme to dark mode
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}> {/* Apply the theme */}
      <CssBaseline /> {/* CssBaseline component to kickstart an elegant, consistent, and simple baseline to build upon */}
      <BrowserRouter>
        <Routes>
          <Route path="/pages/dashboard" element={<Dashboard />} />
          <Route path="/pages/editprofile" element={<EditProfile />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

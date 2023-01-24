import { createTheme } from '@mui/material';

export const appTheme = createTheme({
  palette: {
    primary: { main: '#000' },
    secondary: { main: '#fff' },
  },

  typography: {
    fontSize: 12,
    fontFamily: "'Poppins', 'sans-serif', 'Nunito Sans'",
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minHeight: '100vh',
          backgroundColor: '#24093d',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        },
      },
    },
  },
});

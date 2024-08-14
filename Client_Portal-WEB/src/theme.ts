import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
    fontFamily: ['Poppins', 'Montserrat', 'Helvetica', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#875CF8',
      dark: '#6939E8',
      light: '#A27FFD',
      contrastText: '#fff',
    },
    lightGrey: {
      main: '#f7f7f7',
      dark: '#f2f2f2',
      light: '#8E8E93',
    },
    mediumGrey: {
      main: '#ebebeb',
      light: '#efefef',
      dark: '#eaeaea',
      contrastText: '#C6C8CC',
    },
    darkText: {
      main: '#151517',
      light: '#AEAEB2',
      dark: '#363638',
    },
    purpleText: {
      main: '#5C2BDE',
      light: '#EBE4FD',
      dark: '#6429FF',
    },
    white: {
      main: '#fff',
    },
    green: {
      main: '#03e61d',
      light: '#E1F4E3',
      contrastText: '#157E21',
    },
    orange: {
      main: '#ff9f0a',
    },
    red: {
      main: '#d50000',
      light: '#FFE0E0',
    },
    purple: {
      main: '#DED1FF',
      light: '#EBE4FD',
      dark: '#CBB7FF',
      contrastText: '#875CF8',
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        standardSuccess: {
          backgroundColor: '#E1F4E3',
          color: '#085310',
        },
        standardError: {
          backgroundColor: '#FFE0E0',
          color: '#D50000',
        },
        standardWarning: {
          backgroundColor: '#FFF5E5',
          color: '#E08800',
        },
      },
    },
  },
});

export default theme;

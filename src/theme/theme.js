
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#641E2B',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#B65D3D',
    },
    background: {
      default: '#F7F1E7',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#302820',
      secondary: '#655B50',
    },
  },

  typography: {
    fontFamily: 'Poppins, sans-serif',

    h1: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 700,
    },

    h2: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 600,
    },

    h3: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 600,
    },

    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 10,
  },
});

export default theme;

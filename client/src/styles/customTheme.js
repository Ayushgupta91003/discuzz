import { createMuiTheme } from '@material-ui/core/styles';

const customTheme = (darkMode) =>
  createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#FF6314',
        light: '#FF8A50',
        dark: '#C73E00',
        contrastText: '#fff',
      },
      secondary: {
        main: darkMode ? '#e8b4b8' : '#b52325',
        light: darkMode ? '#f7e3e5' : '#e05a5c',
        dark: darkMode ? '#b5848a' : '#7a1214',
        contrastText: '#fff',
      },
      background: {
        default: darkMode ? '#0d1117' : '#f2f4f6',
        paper: darkMode ? '#161b22' : '#ffffff',
      },
      divider: darkMode ? '#30363d' : '#e0e0e0',
      text: {
        primary: darkMode ? '#e6edf3' : '#1c1c1c',
        secondary: darkMode ? '#8b949e' : '#5a6470',
      },
    },
    typography: {
      fontFamily: '"Inter", "Segoe UI", "Roboto", "Helvetica Neue", sans-serif',
      h1: { fontWeight: 700 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 700 },
      h4: { fontWeight: 600 },
      h5: { fontWeight: 600 },
      h6: { fontWeight: 600 },
      subtitle1: { fontWeight: 500 },
      body1: { fontSize: '0.95rem', lineHeight: 1.6 },
      body2: { fontSize: '0.875rem', lineHeight: 1.5 },
      caption: { fontSize: '0.78rem', letterSpacing: '0.01em' },
    },
    shape: {
      borderRadius: 8,
    },
    overrides: {
      MuiTypography: {
        root: { wordBreak: 'break-word' },
      },
      MuiPaper: {
        rounded: { borderRadius: 8 },
        outlined: {
          borderColor: darkMode ? '#30363d' : '#e0e0e0',
        },
      },
      MuiButton: {
        root: {
          borderRadius: 20,
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '0.875rem',
        },
        containedPrimary: {
          boxShadow: 'none',
          '&:hover': { boxShadow: '0 2px 8px rgba(255,99,20,0.4)' },
        },
        outlinedPrimary: {
          borderWidth: 2,
          '&:hover': { borderWidth: 2 },
        },
      },
      MuiAppBar: {
        root: {
          borderBottom: darkMode ? '1px solid #30363d' : '1px solid #e0e0e0',
        },
        colorInherit: {
          backgroundColor: darkMode ? '#161b22' : '#ffffff',
          color: darkMode ? '#e6edf3' : '#1c1c1c',
        },
      },
      MuiDivider: {
        root: {
          backgroundColor: darkMode ? '#30363d' : '#e8eaed',
        },
      },
      MuiInputBase: {
        root: {
          borderRadius: 8,
        },
      },
      MuiOutlinedInput: {
        root: {
          borderRadius: 8,
        },
      },
      MuiChip: {
        root: { borderRadius: 6 },
      },
      MuiListItem: {
        root: {
          borderRadius: 6,
          '&:hover': {
            borderRadius: 6,
          },
        },
      },
      MuiTab: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          minWidth: 80,
        },
      },
    },
    props: {
      MuiButton: { disableElevation: true },
      MuiPaper: { elevation: 0 },
    },
  });

export default customTheme;

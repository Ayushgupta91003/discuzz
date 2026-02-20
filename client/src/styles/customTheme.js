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
        main: darkMode ? '#818cf8' : '#6366f1',
        light: darkMode ? '#a5b4fc' : '#818cf8',
        dark: darkMode ? '#6366f1' : '#4f46e5',
        contrastText: '#fff',
      },
      background: {
        default: darkMode ? '#0d1117' : '#f4f5f7',
        paper: darkMode ? '#161b22' : '#ffffff',
      },
      divider: darkMode ? '#21262d' : '#e4e6ea',
      text: {
        primary: darkMode ? '#e6edf3' : '#1a1a2e',
        secondary: darkMode ? '#8b949e' : '#656d76',
        disabled: darkMode ? '#484f58' : '#b0b8c1',
      },
      error: { main: '#f85149', light: '#ff7b6b', dark: '#c0302a' },
      success: { main: '#3fb950', light: '#6ee67a', dark: '#238636' },
      warning: { main: '#e3b341', light: '#f0c96a', dark: '#9e6a03' },
      info: { main: '#58a6ff', light: '#79c0ff', dark: '#1f6feb' },
    },
    typography: {
      fontFamily: '"Inter", "SF Pro Display", "Segoe UI", "Roboto", sans-serif',
      h1: { fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15 },
      h2: { fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.2 },
      h3: { fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.25 },
      h4: { fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.3 },
      h5: { fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.4 },
      h6: { fontWeight: 600, lineHeight: 1.4 },
      subtitle1: { fontWeight: 500, lineHeight: 1.55, fontSize: '1rem' },
      subtitle2: { fontWeight: 600, lineHeight: 1.5, fontSize: '0.875rem' },
      body1: { fontSize: '0.9375rem', lineHeight: 1.7, fontWeight: 400 },
      body2: { fontSize: '0.875rem', lineHeight: 1.65, fontWeight: 400 },
      caption: { fontSize: '0.76rem', letterSpacing: '0.01em', lineHeight: 1.5 },
      overline: {
        fontSize: '0.69rem',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      },
      button: {
        fontWeight: 700,
        textTransform: 'none',
        fontSize: '0.875rem',
        letterSpacing: '0.01em',
      },
    },
    shape: { borderRadius: 8 },
    overrides: {
      MuiTypography: {
        root: { wordBreak: 'break-word' },
      },
      MuiPaper: {
        rounded: { borderRadius: 8 },
        outlined: {
          borderColor: darkMode ? '#21262d' : '#e4e6ea',
        },
        elevation1: {
          boxShadow: darkMode
            ? '0 1px 3px rgba(0,0,0,0.5)'
            : '0 1px 3px rgba(0,0,0,0.08)',
        },
      },
      MuiButton: {
        root: {
          borderRadius: 999,
          textTransform: 'none',
          fontWeight: 700,
          fontSize: '0.875rem',
          padding: '7px 18px',
          lineHeight: 1.5,
          transition: 'all 0.15s ease',
        },
        sizeSmall: {
          padding: '4px 12px',
          fontSize: '0.80rem',
          borderRadius: 999,
        },
        sizeLarge: {
          padding: '10px 28px',
          fontSize: '0.9375rem',
        },
        containedPrimary: {
          boxShadow: 'none',
          background: '#FF6314',
          '&:hover': {
            boxShadow: '0 0 0 3px rgba(255,99,20,0.25)',
            backgroundColor: '#e5570f',
          },
          '&:active': { backgroundColor: '#c94a09' },
        },
        containedSecondary: {
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none', filter: 'brightness(1.1)' },
        },
        outlinedPrimary: {
          borderWidth: '1.5px',
          borderColor: '#FF6314',
          color: '#FF6314',
          '&:hover': {
            borderWidth: '1.5px',
            backgroundColor: 'rgba(255,99,20,0.07)',
          },
        },
        text: {
          borderRadius: 6,
          '&:hover': {
            backgroundColor: darkMode
              ? 'rgba(255,255,255,0.06)'
              : 'rgba(0,0,0,0.05)',
          },
        },
        textPrimary: {
          color: '#FF6314',
          borderRadius: 6,
          '&:hover': {
            backgroundColor: 'rgba(255,99,20,0.07)',
          },
        },
      },
      MuiIconButton: {
        root: {
          borderRadius: 8,
          padding: 8,
          transition: 'all 0.15s ease',
          '&:hover': {
            backgroundColor: darkMode
              ? 'rgba(255,255,255,0.07)'
              : 'rgba(0,0,0,0.05)',
          },
        },
        sizeSmall: {
          padding: 5,
          borderRadius: 6,
        },
        colorPrimary: {
          '&:hover': {
            backgroundColor: 'rgba(255,99,20,0.1)',
          },
        },
      },
      MuiAppBar: {
        root: {
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        },
        colorInherit: {
          backgroundColor: darkMode
            ? 'rgba(22,27,34,0.92)'
            : 'rgba(255,255,255,0.95)',
          color: darkMode ? '#e6edf3' : '#1a1a2e',
          borderBottom: `1px solid ${darkMode ? '#21262d' : '#e4e6ea'}`,
        },
      },
      MuiDivider: {
        root: {
          backgroundColor: darkMode ? '#21262d' : '#e4e6ea',
        },
      },
      MuiInputBase: {
        root: {
          borderRadius: 8,
        },
        input: {
          '&::placeholder': {
            color: darkMode ? '#6e7681' : '#9ba3af',
            opacity: 1,
          },
        },
      },
      MuiOutlinedInput: {
        root: {
          borderRadius: 8,
          '& fieldset': {
            borderColor: darkMode ? '#30363d' : '#d4d8dd',
            transition: 'border-color 0.15s ease',
          },
          '&:hover fieldset': {
            borderColor: darkMode ? '#6e7681' : '#9ba3af',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#FF6314',
            borderWidth: '2px',
          },
        },
        input: {
          padding: '10px 14px',
          fontSize: '0.9rem',
        },
        inputSizeSmall: {
          padding: '7px 12px',
          fontSize: '0.875rem',
        },
      },
      MuiInputLabel: {
        outlined: {
          '&.MuiInputLabel-shrink': {
            color: '#FF6314',
          },
        },
      },
      MuiFormHelperText: {
        root: {
          fontSize: '0.75rem',
          marginTop: 4,
        },
      },
      MuiChip: {
        root: {
          borderRadius: 6,
          fontWeight: 600,
          fontSize: '0.76rem',
          height: 24,
        },
        colorPrimary: {
          backgroundColor: darkMode
            ? 'rgba(255,99,20,0.15)'
            : 'rgba(255,99,20,0.1)',
          color: '#FF6314',
        },
        outlined: {
          borderColor: darkMode ? '#30363d' : '#d4d8dd',
        },
      },
      MuiListItem: {
        root: {
          borderRadius: 6,
          '&.Mui-selected': {
            backgroundColor: darkMode
              ? 'rgba(255,99,20,0.15)'
              : 'rgba(255,99,20,0.08)',
            '&:hover': {
              backgroundColor: darkMode
                ? 'rgba(255,99,20,0.22)'
                : 'rgba(255,99,20,0.14)',
            },
          },
        },
        button: {
          '&:hover': {
            backgroundColor: darkMode
              ? 'rgba(255,255,255,0.06)'
              : 'rgba(0,0,0,0.04)',
            borderRadius: 6,
          },
        },
      },
      MuiTab: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          minWidth: 72,
          fontSize: '0.875rem',
          borderRadius: 6,
          margin: '3px 2px',
          minHeight: 34,
          padding: '4px 12px',
          transition: 'all 0.15s ease',
          color: darkMode ? '#8b949e' : '#656d76',
          '&.Mui-selected': {
            color: '#FF6314',
            background: darkMode
              ? 'rgba(255,99,20,0.12)'
              : 'rgba(255,99,20,0.08)',
            fontWeight: 700,
          },
          '&:hover': {
            color: darkMode ? '#e6edf3' : '#1a1a2e',
            backgroundColor: darkMode
              ? 'rgba(255,255,255,0.06)'
              : 'rgba(0,0,0,0.04)',
          },
        },
      },
      MuiTabs: {
        root: { minHeight: 40 },
        indicator: { display: 'none' },
      },
      MuiDialog: {
        paper: {
          borderRadius: 12,
          border: darkMode ? '1px solid #30363d' : '1px solid #e4e6ea',
          backgroundColor: darkMode ? '#161b22' : '#ffffff',
          boxShadow: darkMode
            ? '0 20px 60px rgba(0,0,0,0.7)'
            : '0 20px 60px rgba(0,0,0,0.15)',
        },
      },
      MuiDialogTitle: {
        root: {
          padding: '16px 20px 12px',
          borderBottom: `1px solid ${darkMode ? '#21262d' : '#e4e6ea'}`,
        },
      },
      MuiDialogContent: {
        root: { padding: '16px 20px' },
      },
      MuiDialogActions: {
        root: {
          padding: '12px 20px',
          borderTop: `1px solid ${darkMode ? '#21262d' : '#e4e6ea'}`,
        },
      },
      MuiMenuItem: {
        root: {
          borderRadius: 4,
          margin: '2px 4px',
          padding: '8px 12px',
          fontSize: '0.875rem',
          fontWeight: 500,
          '&:hover': {
            backgroundColor: darkMode
              ? 'rgba(255,255,255,0.06)'
              : 'rgba(0,0,0,0.04)',
          },
        },
      },
      MuiMenu: {
        paper: {
          borderRadius: 10,
          border: darkMode ? '1px solid #30363d' : '1px solid #e4e6ea',
          boxShadow: darkMode
            ? '0 8px 32px rgba(0,0,0,0.6)'
            : '0 8px 32px rgba(0,0,0,0.12)',
          padding: '4px',
        },
        list: { padding: '4px' },
      },
      MuiTooltip: {
        tooltip: {
          borderRadius: 6,
          fontSize: '0.75rem',
          fontWeight: 500,
          backgroundColor: darkMode ? '#2d333b' : '#1a1a2e',
          padding: '5px 10px',
        },
        arrow: {
          color: darkMode ? '#2d333b' : '#1a1a2e',
        },
      },
      MuiSnackbar: {
        root: {
          bottom: '24px',
        },
      },
      MuiAlert: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
          fontSize: '0.875rem',
        },
      },
      MuiBadge: {
        badge: {
          fontWeight: 700,
          fontSize: '0.65rem',
        },
      },
      MuiAvatar: {
        root: {
          fontWeight: 700,
          fontSize: '0.95rem',
        },
      },
      MuiLinearProgress: {
        root: { borderRadius: 4, height: 3 },
        barColorPrimary: { backgroundColor: '#FF6314' },
      },
      MuiCircularProgress: {
        colorPrimary: { color: '#FF6314' },
      },
    },
    props: {
      MuiButton: { disableElevation: true },
      MuiPaper: { elevation: 0 },
    },
  });

export default customTheme;

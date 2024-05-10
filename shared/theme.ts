import { createMuiTheme } from '@material-ui/core/styles';
import NotoSansRegular from '../public/Noto_Sans/NotoSans-Regular.ttf';
import NotoSansBold from '../public/Noto_Sans/NotoSans-Bold.ttf';
import NotoSansLight from '../public/Noto_Sans/NotoSans-Light.ttf';

let theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1135,
      xl: 1920
    }
  }
});

theme = createMuiTheme({
  ...theme,
  palette: {
    primary: {
      main: '#E0E0E0'
    },
    secondary: {
      main: '#828282'
    },
    text: {
      // button title
      primary: '#4F4F4F',
      // case studies component title
      secondary: '#A1A1A1'
    },
    background: {
      paper: '#F2F2F2',
      default: '#191919'
    }
  },
  typography: {
    fontFamily: ['Noto Sans'].join(','),
    // Company name
    h1: {
      color: '#E5E5E5',
      fontSize: '2rem',
      fontWeight: 'bold',
      lineHeight: '1.3'
    },
    // article header
    h2: {
      fontSize: '3.75rem',
      fontWeight: 300,
      lineHeight: '1.266',
      [theme.breakpoints.down('sm')]: {
        fontSize: '2.25rem',
        textAlign: 'center',
        lineHeight: '1.36'
      }
    },
    // section header
    h3: {
      fontSize: '2.125rem',
      fontWeight: 700,
      lineHeight: '1.5',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.75rem',
        textAlign: 'center'
      }
    },
    // button title, 18px
    button: {
      fontSize: '1.125rem',
      fontWeight: 700,
      lineHeight: '1.225'
    },
    // index article text
    body1: {
      fontSize: '1.5rem',
      lineHeight: '1.335'
    },
    // case-study article paragraph
    body2: {
      fontSize: '1.125rem',
      lineHeight: '1.56',
      whiteSpace: 'pre-wrap'
    },
    // 12px
    subtitle1: {
      fontSize: '0.75rem',
      fontWeight: 700
    },
    // index list item
    subtitle2: {
      fontSize: '1.5rem',
      lineHeight: '2'
    },
    // 14px
    caption: {
      fontSize: '0.875rem'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          marginTop: 0,
          marginBottom: 0
        },
        a: {
          textDecoration: 'none',
          color: '#dddddd'
        },
        'h1, h2, h3, h4, h5, h6': {
          color: '#E0E0E0'
        },
        img: {
          width: '100%',
          height: 'auto',
          objectFit: 'cover'
        },
        '@font-face': [
          {
            fontFamily: 'Noto Sans',
            src: `url(${NotoSansRegular}) format("truetype")`,
            fontWeight: 400,
            fontStyle: 'normal'
          },
          {
            fontFamily: 'Noto Sans',
            src: `url(${NotoSansBold}) format("truetype")`,
            fontWeight: 700,
            fontStyle: 'normal'
          },
          {
            fontFamily: 'Noto Sans',
            src: `url(${NotoSansLight}) format("truetype")`,
            fontWeight: 300,
            fontStyle: 'normal'
          }
        ]
      }
    },
    MuiTypography: {
      button: {
        textTransform: 'none'
      }
    },
    MuiButton: {
      root: {
        '&:hover': {
          backgroundColor: ''
        }
      },
      text: {
        textTransform: 'none',
        paddingLeft: '0',
        paddingRight: '0',
        paddingBottom: '0.875rem',
        paddingTop: '0.875rem'
      }
    }
  }
});

const defaultTheme = theme;

export default defaultTheme;

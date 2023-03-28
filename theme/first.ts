import { createTheme, responsiveFontSizes } from "@mui/material";

declare module '@mui/material/styles' {
  // interface Theme {
  //   status: {
  //     danger: React.CSSProperties['color'];
  //   };
  // }

  interface Palette {
    yellow: Palette['primary'];
  }

  interface PaletteOptions {
    yellow: PaletteOptions['primary'];
  }

  interface PaletteColor {
    // darker?: string;
  }

  interface SimplePaletteColorOptions {
    // darker?: string;
  }

  // interface ThemeOptions {
  //   status: {
  //     danger: React.CSSProperties['color'];
  //   };
  // }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    yellow: true;
  }
}

declare module "@mui/material/Typography" {
  interface ButtonPropsColorOverrides {
    yellow: true;
  }
}


declare module "@mui/material/Link" {
  interface ButtonPropsColorOverrides {
    yellow: true;
  }
}
export const firstTheme = responsiveFontSizes(createTheme({
  typography: {
    fontFamily: 'Montserrat',
    button:{
      textTransform:'none'
    }
  },
  palette: {
    yellow: {
      main: "#F6E71D",
      contrastText: '#000',
      light: '#FFFC72',
      dark:'#e2e2e2',
      

    }
  },
  components:{
    MuiButtonBase:{
      styleOverrides:{
        // focusVisible:'rgba(0,0,0,0.1)'
      }
    }
  }
})) 
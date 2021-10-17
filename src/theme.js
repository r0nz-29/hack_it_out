import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#9747DC",
    },
    secondary: {
      main: "#ffffff",
    },
    info: {
      main: "#2A268D",
    },
  },
  typography: {
    fontFamily: "Poppins",
    button: {
      textTransform: "none",
    },
    h1: {
      fontSize: "84px",
      fontWeight: "700",
      fontFamily: "Poppins",
    },
    h2: {
      fontSize: "40px",
      fontWeight: "700",
      fontFamily: "Poppins",
    },
    body1: {
      fontSize: "16px",
      fontWeight: "100",
      color: "#364547",
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;

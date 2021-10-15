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
  },
});

theme = responsiveFontSizes(theme);
export default theme;

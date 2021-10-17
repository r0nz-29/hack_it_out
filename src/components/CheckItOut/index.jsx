import { Grid, Typography } from "@mui/material";
import Articles from "./Articles";
import theme from "../../theme";
import { useTheme } from "@mui/material/styles";
import dna from "../../images/dna.png";
import "./styles.css";

const CheckItOut = () => {
  let colors = useTheme(theme);
  return (
    <>
      <Grid
        id="news"
        className="check-it-out"
        container
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ py: (theme) => theme.spacing(10) }}
      >
        <Grid item>
          <Typography sx={{ color: colors.palette.info.main }} variant="h1">
            Check it
            <span style={{ color: colors.palette.primary.main }}> OUT!</span>
          </Typography>
          <Typography
            variant="h3"
            color="#364547"
            sx={{ paddingLeft: (theme) => theme.spacing(2) }}
          >
            Keep yourself updated about the <br />
            latest technology.
          </Typography>
        </Grid>
        <Grid item>
          <img src={dna} alt="dna" />
        </Grid>
      </Grid>
      <Articles />
    </>
  );
};

export default CheckItOut;

import React from "react";
import {
  Button,
  Chip,
  Divider,
  Grid,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import foursquare from "react-foursquare";
import { Context } from "../context";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import { useHistory } from "react-router";
import doc from "../../images/search_doc.png";
import "./styles.css";

const Search = () => {
  const [city, setCity] = React.useState(0);
  const globalContext = React.useContext(Context);
  const history = useHistory();

  let hospitalClient = foursquare({
    clientID: "QQW5LKC53IUWBODDFYSO1WUFRDLPOJ0CHRDMULPQ0Q4VCCK3",
    clientSecret: "IEOJ4JIOOAIP4FP1K552PE4BA0QYKCS4NKBBA0O43CFNN241",
  });

  function hospitalsNearMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        let params = {
          ll: `${pos.coords.latitude},${pos.coords.longitude}`,
          query: "hospital",
        };
        hospitalClient.venues.getVenues(params).then(({ response }) => {
          globalContext.setHospitals(response.venues);
          console.log(response.venues);
          history.push("/results");
        });
      });
    }
  }

  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignItems="center"
      className="search-grid"
    >
      <Grid item>
        <Paper
          elevation={10}
          sx={{
            p: (theme) => theme.spacing(6),
            borderRadius: "20px",
            textAlign: "center",
            position: "relative",
          }}
        >
          <Typography
            variant="h2"
            color="#2A268D"
            sx={{ paddingBottom: (theme) => theme.spacing(8) }}
          >
            Find hospitals within
            <Typography variant="h2" component="span" color="primary">
              <br />
              seconds!
            </Typography>
          </Typography>
          <Button
            fullWidth
            endIcon={<GpsFixedIcon />}
            variant="contained"
            color="primary"
            onClick={hospitalsNearMe}
          >
            Find Hospitals near me
          </Button>
          <Divider sx={{ py: (theme) => theme.spacing(2) }}>
            <Chip label="OR" color="secondary" />
          </Divider>
          <Grid container justifyContent="space-evenly" alignItems="center">
            <Grid item xs="auto">
              <Select
                fullWidth
                defaultValue={0}
                onChange={(e) => setCity(e.target.value)}
              >
                <MenuItem value={0}>Select a city</MenuItem>
                <MenuItem value={"indore"}>Indore</MenuItem>
                <MenuItem value={"gurgaon"}>Gurgaon</MenuItem>
                <MenuItem value={"gwalior"}>Gwalior</MenuItem>
              </Select>
            </Grid>
            <Grid item>
              <Button
                fullWidth
                disabled={!city}
                variant="contained"
                color="info"
                sx={{ height: "55px" }}
              >
                Find Hospitals {city !== 0 && `in ${city}`}
              </Button>
            </Grid>
          </Grid>
          <img className="search-doc" src={doc} alt="doc" />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Search;

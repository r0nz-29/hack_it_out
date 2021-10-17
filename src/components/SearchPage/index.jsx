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
  const [city, setCity] = React.useState({ coords: 0, name: "" });
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
          globalContext.createHospitalsList(response.venues);
          history.push("/results");
        });
      });
    }
  }

  function findByCity() {
    let params = {
      ll: city.coords,
      query: "hospital",
    };
    hospitalClient.venues.getVenues(params).then(({ response }) => {
      globalContext.createHospitalsList(response.venues);
      history.push("/results");
    });
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
                onChange={(e) =>
                  setCity({ coords: e.target.value, name: e.target.id })
                }
              >
                <MenuItem value={0}>Select a city</MenuItem>
                <MenuItem value={"22.5726,88.3639"}>Kolkata</MenuItem>
                <MenuItem value={"17.3850,78.4867"}>Hyderabad</MenuItem>
                <MenuItem value={"12.9716,77.5946"}>Bangalore</MenuItem>
                <MenuItem value={"23.0225,72.5714"}>Ahemdabad</MenuItem>
                <MenuItem value={"28.7041,77.1025"}>Delhi</MenuItem>
                <MenuItem value={"28.4595,77.0266"}>Gurgaon</MenuItem>
                <MenuItem value={"19.0760,72.8777"}>Mumbai</MenuItem>
                <MenuItem value={"18.5204,73.8567"}>Pune</MenuItem>
                <MenuItem value={"21.1702,72.8311"}>Surat</MenuItem>
                <MenuItem value={"22.7196,75.8577"}>Indore</MenuItem>
                <MenuItem value={"23.2599,77.4126"}>Bhopal</MenuItem>
                <MenuItem value={"27.1767,78.0081"}>Agra</MenuItem>
                <MenuItem value={"23.1765,75.7885"}>Ujjain</MenuItem>
                <MenuItem value={"26.8467,80.9462"}>Lucknow</MenuItem>
                <MenuItem value={"29.0588,76.0856"}>Haryana</MenuItem>
                <MenuItem value={"13.0827,80.2707"}>Chennai</MenuItem>
                <MenuItem value={"26.9124,75.7873"}>Jaipur</MenuItem>
              </Select>
            </Grid>
            <Grid item>
              <Button
                fullWidth
                disabled={city.coords === 0 ? true : false}
                variant="contained"
                color="info"
                sx={{ height: "55px" }}
                onClick={findByCity}
              >
                Find Hospitals in this city
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

import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { Context } from "../context";
import "./styles.css";

const Hospitals = () => {
  const globalContext = React.useContext(Context);
  return (
    <Grid container direction="column" className="hospitals-grid">
      {globalContext.hospitals.map((hospital, ndx) => {
        return (
          <Grid item key={ndx}>
            <Paper elevation={5}>
              <Typography variant="h2">{hospital.name}</Typography>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Hospitals;

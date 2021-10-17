import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { articles } from "../../../data/articles";

const Articles = () => {
  return (
    <Grid
      container
      justifyContent="space-between"
      paddingLeft="8vw"
      paddingRight="20vw"
      sx={{ py: (theme) => theme.spacing(10) }}
    >
      <Grid item xs={8}>
        {articles.map((article, ndx) => {
          return (
            <React.Fragment key={ndx}>
              <Typography
                variant="h2"
                color="#2A268D"
                sx={{ paddingBottom: (theme) => theme.spacing(3) }}
              >
                {article.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  paddingBottom: (theme) => theme.spacing(8),
                }}
              >
                {article.desc}
              </Typography>
            </React.Fragment>
          );
        })}
      </Grid>
      <Grid item>
        <Paper
          sx={{
            boxSizing: "border-box",
            height: "100%",
            p: (theme) => theme.spacing(4),
          }}
          elevation={10}
        >
          <Typography>More to browse</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Articles;

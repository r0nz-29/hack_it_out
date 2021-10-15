import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { footer } from "../../data/footer";
import "./styles.css";

const Footer = () => {
  return (
    <Grid
      container
      className="footer"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Grid item sx={{ paddingRight: (theme) => theme.spacing(40) }}>
        <Typography variant="h2" color="white">
          Get in touch <br /> with us for your <br /> service
        </Typography>
        {[
          <FacebookIcon color="secondary" />,
          <TwitterIcon color="secondary" />,
          <InstagramIcon color="secondary" />,
          <LinkedInIcon color="secondary" />,
        ].map((icon, ndx) => {
          return <IconButton key={ndx}>{icon}</IconButton>;
        })}
      </Grid>
      <Grid item sx={{ paddingLeft: (theme) => theme.spacing(40) }}>
        {footer.map((item, ndx) => {
          return (
            <React.Fragment key={ndx}>
              <Typography
                fontSize="24px"
                fontWeight="100"
                color="white"
                sx={{ opacity: 0.6 }}
              >
                {item.name}
              </Typography>
              <Typography fontSize="30px" color="white">
                {item.num}
              </Typography>
            </React.Fragment>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Footer;

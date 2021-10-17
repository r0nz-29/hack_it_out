import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { footer } from "../../data/footer";
import { useMediaQuery } from "@mui/material";
import "./styles.css";

const Footer = () => {
  const lessThan514 = useMediaQuery("(max-width: 514px)");
  return (
    <Grid
      container
      className="footer"
      justifyContent="space-evenly"
      alignItems="center"
      direction="column"
    >
      <Grid item>
        <Typography variant="h2" color="white">
          Get in touch <br /> with us for your <br /> service
        </Typography>
        <br />
        <br />
        {[
          <FacebookIcon color="secondary" />,
          <TwitterIcon color="secondary" />,
          <InstagramIcon color="secondary" />,
          <LinkedInIcon color="secondary" />,
        ].map((icon, ndx) => {
          return <IconButton key={ndx}>{icon}</IconButton>;
        })}
      </Grid>
      <Grid item>
        {footer.map((item, ndx) => {
          return (
            <React.Fragment key={ndx}>
              <Typography
                fontSize="20px"
                fontWeight="100"
                color="white"
                sx={{ opacity: 0.6 }}
              >
                {item.name}
              </Typography>
              <Typography fontSize="25px" color="white">
                {item.num}
              </Typography>
              <br />
            </React.Fragment>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Footer;

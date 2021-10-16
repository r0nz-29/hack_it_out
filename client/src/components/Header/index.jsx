import { AppBar, Button, Grid, Toolbar } from "@mui/material";
import React from "react";

const Header = () => {
  const [visible, setVisible] = React.useState(false);

  const handleScroll = () => {
    let currentOffset = window.scrollY;
    if (currentOffset > 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <AppBar
      position="fixed"
      sx={{
        transition: "0.2s",
        background: visible ? "white" : "transparent",
        boxShadow: visible ? (theme) => theme.shadows[10] : "none",
      }}
    >
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid
            item
            alignSelf="center"
            sx={{
              marginLeft: "33vw",
            }}
          >
            {["Home", "News", "Top Hospitals", "Contact Us"].map((nav, ndx) => {
              return (
                <Button
                  sx={{ mx: (theme) => theme.spacing(4) }}
                  key={ndx}
                  color={visible ? "info" : "secondary"}
                >
                  {nav}
                </Button>
              );
            })}
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color={visible ? "info" : "secondary"}
              sx={{
                color: visible ? "white" : "#2A268D",
                borderRadius: "40px",
              }}
            >
              Get Started
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

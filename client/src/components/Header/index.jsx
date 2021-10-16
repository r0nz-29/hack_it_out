import React from "react";
import { AppBar, Button, Grid, Toolbar } from "@mui/material";
import { useLocation, useHistory } from "react-router-dom";
import { scroller } from "react-scroll";

const Header = () => {
  const [visible, setVisible] = React.useState(false);
  const location = useLocation();
  const history = useHistory();

  function handleScroll() {
    let currentOffset = window.scrollY;
    if (currentOffset > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }

  function scrollToSection(elementId) {
    scroller.scrollTo(elementId, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }

  function navigate(nav) {
    switch (nav) {
      case "Home":
        history.push("/");
        scrollToSection("main-section");
        break;

      case "News":
        if (location.pathname === "/search") {
          history.push("/");
          setTimeout(() => {
            scrollToSection("news");
          }, 100);
        }
        scrollToSection("news");
        break;

      case "Top Hospitals":
        if (location.pathname === "/search") {
          history.push("/");
          setTimeout(() => {
            scrollToSection("banner");
          }, 100);
        }
        scrollToSection("banner");
        break;

      case "Contact Us":
        scrollToSection("footer");
        break;

      default:
        break;
    }
  }

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
                  color={
                    visible ||
                    location.pathname === "/search" ||
                    location.pathname === "/results"
                      ? "info"
                      : "secondary"
                  }
                  onClick={() => navigate(nav)}
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
              onClick={() => history.push("/search")}
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

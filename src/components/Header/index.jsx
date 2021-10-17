import React from "react";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import { useLocation, useHistory } from "react-router-dom";
import { scroller } from "react-scroll";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [visible, setVisible] = React.useState(false);
  const location = useLocation();
  const history = useHistory();
  const lessThan840 = useMediaQuery("(max-width:840px)");
  const [showDrawer, setShowDrawer] = React.useState(false);

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
        if (
          location.pathname === "/search" ||
          location.pathname === "/results"
        ) {
          history.push("/");
          setTimeout(() => {
            scrollToSection("news");
          }, 100);
        }
        scrollToSection("news");
        break;

      case "Top Hospitals":
        if (
          location.pathname === "/search" ||
          location.pathname === "/results"
        ) {
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
    <>
      <AppBar
        position="fixed"
        sx={{
          transition: "0.2s",
          background:
            visible || location.pathname === "/results" || lessThan840
              ? "white"
              : "transparent",
          boxShadow:
            visible || location.pathname === "/results" || lessThan840
              ? (theme) => theme.shadows[10]
              : "none",
        }}
      >
        <Toolbar>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography
                variant="h2"
                color="secondary"
                sx={{
                  textShadow:
                    "1px 1px 2px black, 0 0 1em #000001, 0 0 0.2em gray",
                }}
              >
                Sorcerers
              </Typography>
            </Grid>
            {lessThan840 ? (
              <IconButton onClick={() => setShowDrawer(!showDrawer)}>
                <MenuIcon />
              </IconButton>
            ) : (
              <>
                <Grid item alignSelf="center">
                  {["Home", "News", "Top Hospitals", "Contact Us"].map(
                    (nav, ndx) => {
                      return (
                        <Button
                          sx={{ mx: (theme) => theme.spacing(2) }}
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
                    }
                  )}
                </Grid>
                <Grid item>
                  {location.pathname === "/results" ? (
                    <Button
                      variant="contained"
                      color="info"
                      sx={{
                        color: "white",
                        borderRadius: "40px",
                      }}
                      onClick={() => history.push("/search")}
                    >
                      back to search
                    </Button>
                  ) : (
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
                  )}
                </Grid>
              </>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="bottom"
        open={showDrawer}
        onClose={() => setShowDrawer(!showDrawer)}
      >
        <List>
          {["Home", "News", "Top Hospitals", "Contact Us"].map((nav, ndx) => {
            return (
              <React.Fragment key={ndx}>
                <ListItem
                  button
                  onClick={() => {
                    navigate(nav);
                    setShowDrawer(!showDrawer);
                  }}
                >
                  <Typography variant="body1">{nav}</Typography>
                </ListItem>
                <Divider />
              </React.Fragment>
            );
          })}
          <ListItem
            button
            onClick={() => {
              history.push("/search");
              setShowDrawer(!showDrawer);
            }}
          >
            <Typography variant="body1">Find Hospitals</Typography>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;

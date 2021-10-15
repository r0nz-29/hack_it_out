import { AppBar, Button, Grid, Toolbar, Box } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ background: "transparent", boxShadow: "none" }}
    >
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid
            item
            alignSelf="center"
            sx={{
              marginLeft: "35vw",
            }}
          >
            {["Home", "News", "Top Hospitals", "Contact Us"].map((nav, ndx) => {
              return (
                <Button
                  sx={{ mx: (theme) => theme.spacing(4) }}
                  key={ndx}
                  color="secondary"
                >
                  {nav}
                </Button>
              );
            })}
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              sx={{ color: "#2A268D", borderRadius: "40px" }}
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

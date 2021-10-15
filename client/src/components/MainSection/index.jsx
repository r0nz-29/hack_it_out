import { Button, Grid, Typography, Box } from "@mui/material";
import doc from "../../images/doc.png";
import "./styles.css";

const MainSection = () => {
  return (
    <Box className="main-section">
      <Grid container justifyContent="space-evenly">
        <Grid item xs={4} fontSize="40px" lineHeight="60px">
          <Typography
            color="white"
            variant="h3"
            fontFamily="Poppins"
            sx={{
              py: (theme) => theme.spacing(2),
            }}
          >
            Get your problem solved !
          </Typography>
          <Typography
            color="white"
            // variant="h1"
            fontSize="84px"
            fontWeight="700"
            lineHeight="105px"
            sx={{
              paddingBottom: (theme) => theme.spacing(4),
            }}
          >
            Get The <span style={{ color: "#2A268D" }}> Help </span>
          </Typography>
          <Typography
            color="white"
            fontWeight="100"
            fontSize="16px"
            sx={{
              paddingBottom: (theme) => theme.spacing(5),
              paddingLeft: (theme) => theme.spacing(2),
            }}
          >
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              borderRadius: "40px",
              p: (theme) => theme.spacing(2),
              px: (theme) => theme.spacing(4),
            }}
          >
            <Typography sx={{ color: "#2A268D", fontSize: "40px" }}>
              Get Started ➤
            </Typography>
          </Button>
        </Grid>
        <Grid item>
          <img src={doc} alt="doc" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainSection;

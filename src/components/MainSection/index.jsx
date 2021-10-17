import { Button, Grid, Typography, Box } from "@mui/material";
import { useHistory } from "react-router-dom";
import doc from "../../images/doc.png";
import "./styles.css";

const MainSection = () => {
  const history = useHistory();
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
            variant="h1"
            sx={{
              paddingBottom: (theme) => theme.spacing(4),
            }}
          >
            Get The <span style={{ color: "#2A268D" }}> Help </span>
          </Typography>
          <Typography
            color="white"
            variant="body1"
            sx={{
              paddingBottom: (theme) => theme.spacing(5),
              paddingLeft: (theme) => theme.spacing(2),
            }}
          >
            Socerers is a project which makes access to hospitals just some
            touches away. Indian Healthcare system has been always under that
            development phase,but the growth in real has been very steady. So to
            add our bit In the same,we made access to hospitals only some
            touches away. We have a build a website where a user can input
            his/her disease or related health issues and instantly get the list
            of the hospitals specialized in the particular field, in near abouts
            of their locality. The aim is to make the treatment reach to the
            patient as soon as possible.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              borderRadius: "40px",
              p: (theme) => theme.spacing(2),
              px: (theme) => theme.spacing(4),
            }}
            onClick={() => history.push("/search")}
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

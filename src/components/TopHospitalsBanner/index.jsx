import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import banner from "../../images/banner.png";
import "./styles.css";

const Banner = () => {
  return (
    <Box className="banner" sx={{ textAlign: "center" }}>
      <img src={banner} alt="" />
      <Typography className="banner-text" variant="h1">
        Know about the <br />
        Top <span style={{ color: "#9747DC" }}>Hospitals!</span>
      </Typography>
    </Box>
  );
};

export default Banner;

import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import header from "../../images/slider-card.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

const hospitalsSlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    // infinite: true,
    speed: 500,

    slidesToShow: 3,
    slidesToScroll: 1,
    // initialSlide: 2,
  };
  return (
    <Slider
      {...settings}
      style={{
        textAlign: "center",
        width: "85vw",
        marginLeft: "7.5vw",
        paddingTop: "5vh",
        paddingBottom: "5vh",
      }}
    >
      {[
        { text: "Tata Hospital", desc: "Cancer Treatment" },
        { text: "Tata Hospital", desc: "Cancer Treatment" },
        { text: "Tata Hospital", desc: "Cancer Treatment" },
        { text: "Tata Hospital", desc: "Cancer Treatment" },
        { text: "Tata Hospital", desc: "Cancer Treatment" },
        { text: "Tata Hospital", desc: "Cancer Treatment" },
      ].map((card, ndx) => {
        return (
          <Card
            sx={{
              maxWidth: "20vw",
              boxShadow: (theme) => theme.shadows[20],
              my: (theme) => theme.spacing(10),
              borderRadius: "20px",
            }}
            key={ndx}
          >
            <CardMedia component="img" image={header} sx={{ width: "400px" }} />
            <CardContent>
              <Typography variant="h2">{card.text}</Typography>
              <br />
              <br />
              <Typography variant="body1"> {card.desc} </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Slider>
  );
};
export default hospitalsSlider;

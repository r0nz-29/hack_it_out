import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Context } from "../context";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/material";
import icon from "../../images/results_icon.png";
import "./styles.css";

const Hospitals = () => {
  const globalContext = React.useContext(Context);
  const lessThan840 = useMediaQuery("(max-width: 840px)");

  return (
    <div className="hospitals-grid">
      <Container>
        <Grid wrap="wrap" container direction="column">
          {globalContext.hospitals.map((hospital, ndx) => {
            let addressString1 = "";
            let addressString2 = "";
            switch (hospital.location.formattedAddress.length) {
              case 1:
                addressString1 = `${hospital.location.formattedAddress[0]}`;
                break;
              case 2:
                addressString1 = `${hospital.location.formattedAddress[0]}, (${hospital.location.formattedAddress[1]})`;
                break;

              case 3:
                addressString1 = `${hospital.location.formattedAddress[0]}, (${hospital.location.formattedAddress[1]})`;
                addressString2 = `${hospital.location.formattedAddress[2]}`;
                break;

              case 4:
                addressString1 = `${hospital.location.formattedAddress[0]}, (${hospital.location.formattedAddress[1]})`;
                addressString2 = `${hospital.location.formattedAddress[2]}, ${hospital.location.formattedAddress[3]}`;
                break;

              default:
                addressString1 = `${hospital.location.formattedAddress[0]}`;
                break;
            }
            return (
              <Grid item key={ndx}>
                <Card
                  sx={{
                    display: "flex",
                    boxShadow: (theme) => theme.shadows[10],
                    marginBottom: (theme) => theme.spacing(4),
                    p: (theme) => theme.spacing(2),
                    wordWrap: "break-word",
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    {!lessThan840 && (
                      <CardMedia
                        component="img"
                        sx={{ width: "151px" }}
                        image={icon}
                      />
                    )}

                    <CardContent
                      sx={{
                        flex: "1 0 auto",
                        boxSizing: "border-box",
                        wordWrap: "break-word",
                      }}
                    >
                      <Typography
                        variant={lessThan840 ? "body1" : "h6"}
                        sx={{ wordWrap: "break-word" }}
                      >
                        {hospital.name}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {addressString1}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {addressString2}
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Hospitals;

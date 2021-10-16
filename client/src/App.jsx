import React from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import CheckItOut from "./components/CheckItOut";
import TopHospitalsBanner from "./components/TopHospitalsBanner";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import "./App.css";
import { Box } from "@mui/system";

function App() {
  return (
    <Box className="App">
      <Header />
      <MainSection />
      <CheckItOut />
      <TopHospitalsBanner />
      <Slider />
      <Footer />
    </Box>
  );
}

export default App;

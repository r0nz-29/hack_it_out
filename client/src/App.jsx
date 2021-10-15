import React from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import "./App.css";
import { Box } from "@mui/system";

function App() {
  return (
    <Box className="App">
      <Header />
      <MainSection />
    </Box>
  );
}

export default App;

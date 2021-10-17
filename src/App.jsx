import React from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import CheckItOut from "./components/CheckItOut";
import TopHospitalsBanner from "./components/TopHospitalsBanner";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import SearchPage from "./components/SearchPage";
import Hospitals from "./components/Hospitals";
import "./App.css";
import { Box } from "@mui/material";
import { Switch, Route } from "react-router-dom";

const Home = () => (
  <div style={{ width: "100vw" }}>
    <MainSection />
    <CheckItOut />
    <TopHospitalsBanner />
    <Slider />
  </div>
);

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/search">
        <SearchPage />
      </Route>
      <Route exact path="/results">
        <Hospitals />
      </Route>
    </Switch>
    <Footer />
  </div>
);
export default App;

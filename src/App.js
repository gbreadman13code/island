import "./App.css";
import Footer from "./components/elements/Footer/Footer";
import DocScheme from "./components/screens/DocScheme/DocScheme";
import MainScreen from "./components/screens/MainScreen/MainScreen";
import Renders from "./components/screens/Renders/Renders";
import Services from "./components/screens/Services/Services";
import SliderScreen from "./components/screens/SliderScreen/SliderScreen";
import TerritoryScheme from "./components/screens/TerritoryScheme/TerritoryScheme";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import getNews from "./functions/getNews";
import News from "./components/screens/News/News";

import { Routes, Route } from "react-router-dom";
import SingleNews from "./components/screens/SingleNews/SingleNews";
import AllScreens from "./components/screens/AllScreens/AllScreens";
import getWeather from './functions/getWeather';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
    dispatch(getWeather());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<AllScreens />} />
      <Route path="news/:slug" element={<SingleNews />} />
    </Routes>
  );
}

export default App;

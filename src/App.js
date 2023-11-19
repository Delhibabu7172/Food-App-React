import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlinesCards from "./components/HeadlinesCards";
import Food from "./components/Food";
import Catergory from "./components/Catergory";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeadlinesCards/>
      <Food/>
      <Catergory/>
    </div>
  );
}

export default App;

import React from "react";
import AnimationPage from "./componets/AnimationPage";
import Navbar from "./componets/Navbar";
import HeroSection from "./componets/HeroSection";
import Footer from "./componets/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AnimationPage />
      <Footer />
    </>
  );
};

export default App;

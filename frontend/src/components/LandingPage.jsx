import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="min-h-screen bg-white relative">
        <div className="gradient" />
        <NavBar />
        <HeroSection />
      </div>
    </>
  );
};

export default LandingPage;

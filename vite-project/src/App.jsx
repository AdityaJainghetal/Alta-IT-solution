import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout";
import Home from "./Component/Home";
import About from "./Component/About";
import Service from "./Component/Service";
import Contact from "./Component/Contact";
import FitnessApp from "./Component/Mobile/Fitnessapplanding";
import MobileOnboarding from "./Component/Mobile/Mobilebraing";
import FitnessAppLanding from "./Component/Mobile/Fitnessapplanding";
import Technology from "./Technology/Technology";
import TechNews from "./Technology/TechNews";
import RecentWork from "./Component/Recentwork/Recentwork";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />

            <Route path="about" element={<About />} />
            <Route path="service" element={<Service />} />
            <Route path="contact" element={<Contact />} />
            <Route path="mobile" element={<FitnessApp />} />
            <Route path="mobile-onboarding" element={<MobileOnboarding />} />
            <Route path="branding" element={<FitnessApp />} />
            <Route path="fitness" element={<FitnessAppLanding />} />
            <Route path="technology" element={<Technology />} />
            <Route path="technews" element={<TechNews />} />
            <Route path="/recentwork" element={<RecentWork/>}/>

            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

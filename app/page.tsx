"use client";
// import { Navigation } from "./pages/component/Navigation";

// import { Experience } from "./pages/component/Experience"; 

import { Banner } from "./pages/component/Banner";
import AboutUs from "./pages/AboutUs";
import SkillsPage from "./pages/SkillsPage";
import ProjectPage from "./pages/ProjectPage";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";

export default function Home() {
  return (
    <>
    <Banner/>
    <AboutUs/>
    <SkillsPage/>
    <ProjectPage/>
    <FAQ/>
    <ContactUs/>
    </>
  );
}

import { Route, Routes } from "react-router-dom";
import Projects from "../pages/Projects/Projects.jsx";
import Home from "./Home/Home.jsx";
import AboutMe from "../pages/AboutMe/AboutMe.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";

export default function RouterC() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

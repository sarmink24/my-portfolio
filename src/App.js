import React from "react";
import Navbar from "./components/navbar/navbar";
import AppRoutes from "./components/routes/routes";
import Projects from "./components/projects/projects";
import About from "./components/about/about";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <AppRoutes />
    </div>
  );
}

export default App;

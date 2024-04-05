// import React from "react";
// import { Routes, Route } from "react-router-dom";

// import About from "../about/about"; // Import your components
// import Projects from "../projects/projects";
// import Contact from "../contact/contact";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" exact component={About} />
//       <Route path="/about" component={About} />
//       <Route path="/contact" component={Projects} />
//       <Route path="/projects" component={Contact} />
//     </Routes>
//   );
// };

// export default AppRoutes;

// routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "../about/about";
import Projects from "../projects/projects";
import Contact from "../contact/contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact component={About} />{" "}
      {/* Route to the About component for the root path */}
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
    </Routes>
  );
};

export default AppRoutes;

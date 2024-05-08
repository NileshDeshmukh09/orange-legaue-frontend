import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Services from './pages/Services'
import NotFound from "./components/NotFound";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Technologies from './pages/Technologies'
import AboutUs from './pages/AboutUs'
import CaseStudies from './pages/CaseStudies'
import Industries from './pages/Industries'

const App = () => {

  return (
    <div  className="font-almarai">
      <Routes>
        {/* Protected routes */}
        <Route path="/" element={<ProtectedRoutes />}>

          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about-us" element={<AboutUs />} /> 

          {/* Catch-all route for unmatched paths */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

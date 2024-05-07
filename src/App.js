import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Services from './pages/Services'
import NotFound from "./components/NotFound";
import ProtectedRoutes from "./components/ProtectedRoutes";

const App = () => {

  return (
    <div >
      <Routes>
        {/* Protected routes */}
        <Route path="/" element={<ProtectedRoutes />}>

          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />

          {/* Catch-all route for unmatched paths */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

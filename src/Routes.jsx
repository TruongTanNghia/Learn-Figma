import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const MacBookPro16Two = React.lazy(() => import("pages/MacBookPro16Two"));
const MacBookPro16One = React.lazy(() => import("pages/MacBookPro16One"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/macbookpro16one" element={<MacBookPro16One />} />
          <Route path="/macbookpro16two" element={<MacBookPro16Two />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;

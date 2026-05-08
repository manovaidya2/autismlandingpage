import React from "react";
import { Routes, Route } from "react-router-dom";

import App from "./App";
import ThankYou from "./components/ThankYou";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Home */}
      <Route path="/" element={<App />} />

      {/* Thank You */}
      <Route path="/thank-you" element={<ThankYou />} />

    </Routes>
  );
}
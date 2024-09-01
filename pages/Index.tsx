import React from "react";
import { Route, Routes } from "react-router-dom";
import SettingsPage from "./Settings";

export default function Index () {
  return <Routes>
      <Route path="/" element={<div>Index</div>} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
}

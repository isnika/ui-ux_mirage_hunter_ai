import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../feature/home/pages/home";
import MainLayout from "../layout/mainLayout/mainLayout";


export default function AppRoutes() {
  return (
    <Routes>

      <Route path="/mainLayout" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/" element={<Navigate to="/mainLayout" replace />} />
      <Route path="*" element={<Navigate to="/mainLayout" replace />} />
    </Routes>
  );
}

import React from "react";
import { Route, Routes } from "react-router-dom";

import { ROUTES } from "../../Utils/routes"
import Home from "../Home/home"
const AppRoutes = () => {
  return ( <div>
  <Routes>
  <Route index element={<Home />} />
  
  </Routes>
  </div>
  );
  
};

export default AppRoutes;
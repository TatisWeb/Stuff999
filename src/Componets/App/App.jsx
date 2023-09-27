import React from "react";

import AppRoutes from "../Routes/Routes";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Sidebar from "../Sidebar/sidebar";
import Home from "../Home/home";

const App = () => {
  return (
  <div className="app"> 
  <Header />
  <Sidebar />
  <div className="container">
  <AppRoutes />
  </div>
  <Footer />
  </div>
  );
};

export default App;
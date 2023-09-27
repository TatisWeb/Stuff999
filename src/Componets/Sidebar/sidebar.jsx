import React from "react";
import { NavLink } from "react-router-dom";

import styles from "../../Styles/Sidebar.module.css";

import { ROUTES } from "../../Utils/routes";

const Sidebar = () => {
  return (
  <section className={styles.sidebar}> 
  <div className={styles.title}> CATEGORIES </div>
    <nav>
      <ul>
      <li>
      <NavLink to={`categories/$(1)`}> LINK </NavLink>
      </li>
      </ul>
    </nav>
    
    <div className={styles.footer}>
    <a href="/help" 
    target="_blank" 
    className={styles.link}>
    help
    </a>
    
    <a href="/trms" 
    target="_blank" 
    className={styles.link}
    style={{ textDecoration: "underline"}}>
    terms & conditions
    </a>
    </div>
    
    
  </section>
  );
}

export default Sidebar;
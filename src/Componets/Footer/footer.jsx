import React from "react";
import { Link } from "react-router-dom";

import styles from "../../Styles/Footer.module.css";

import { ROUTES } from "../../Utils/routes";

import LOGO from "../../Images/logo.svg";


const Footer = () => {
  return (
  <section className={styles.footer}> 
   
   <div className={styles.logo}>
      <Link to={ROUTES.HOME}>
        <img src={LOGO} alt="stuff" />
      </Link >
    </div>
    
    <div className={styles.rights}>
    developed by {""}
    <a href="t.me/sergeytatis"
     target="_blank"
     rel="noreferer"
    > Sergey Tatis
    </a>
    </div>
    
    <div className={styles.socials}>
      <a href="instagram.com/sergeytatis" target="_blank" rel="noreferer">
      <svg className="icon">
           <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}/>
         </svg>
         
    </a>
    </div>
      <div className={styles.socials}>
      <a href="instagram.com/sergeytatis" target="_blank" rel="noreferer">
      <svg className="icon">
           <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}/>
         </svg>
         
    </a>
    </div>
      <div className={styles.socials}>
      <a href="instagram.com/sergeytatis" target="_blank" rel="noreferer">
      <svg className="icon">
           <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}/>
         </svg>
         
    </a>
    </div>
    
  
  </section>
  );
}

export default Footer;
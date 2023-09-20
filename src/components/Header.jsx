import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header>
      <h2>Devmountain Eatery</h2>
      <nav>
         <Link to=""><button className={styles.btn}>Home</button></Link>
         <Link to="newRecipe"><button className={styles.btn}>Add Recipe</button></Link>
      </nav>
    </header>
  );
};

export default Header;

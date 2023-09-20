import React from "react";
import styles from "./Recipe.module.css";
import { useNavigate } from "react-router-dom";

const RecipeCard=({recipe})=> {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/recipe/${recipe.recipe_id}`)
      }

  return (
    
    <div className={styles.centerContainer}>
       
    <div className={styles.container}>
      <div>
        <div className={styles.image}>
            <img src={recipe.image_url}/>
        </div>
        <h3 className="text" style={{fontSize:"25px"}}>{recipe.recipe_name}</h3>
      </div>
      <button className={styles.btn} onClick={handleClick}> See more</button>
    </div>
      
    </div>
  );
}
export default RecipeCard;
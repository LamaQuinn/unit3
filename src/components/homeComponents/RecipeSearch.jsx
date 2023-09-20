import React, {useState} from "react";
import RecipeCard from "../recipeCard/RecipeCard";
import { BiSearchAlt2 } from "react-icons/bi";
import styles from "./HomePage.module.css"

const RecipeSearch=({recipes})=>{
    const [search, setSearch] = useState(""); 


    const recipeDisplay = recipes
    .filter((recipe, index) => {
        let title = recipe.recipe_name.toLowerCase()
        let searchParams = search.toLowerCase()
        return title.includes(searchParams)
    })
    .map((recipe, index) => {
        return <RecipeCard recipe={recipe}/>
    })

   return(
    <section className={styles.recipe_container}>
      <span className={styles.search_bar}>
      <BiSearchAlt2 size="2em" color="#DA7635" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a Recipe"
        />
      </span>
      <div className={styles.recipe_con}>
        {recipeDisplay ? recipeDisplay : <h2>No Recipes :(</h2>}
      </div>
      </section>



     
   )
}
export default RecipeSearch;
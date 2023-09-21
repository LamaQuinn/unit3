import React, {useEffect,useState} from 'react'
import styles from "./DetailScreen.module.css"
import ImageBanner from './ImageBanner';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailScreen = () => {  
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const url = "https://recipes.devmountain.com";
  console.log(recipe);

  useEffect(() => {
    axios
      .get(`${url}/recipes/${id}`)
      .then((res) => {
      setRecipe(res.data);
    });
  }, []);
  return (
   
    <section>
        <ImageBanner image={recipe.image_url} title={recipe.recipe_name} />
       <div className={styles.instructions}>
        <div className={styles.ingredients}>
          <h4>Recipe</h4>
          <br/>
          <h3>Prep time: {recipe.prep_time}</h3>
          <h3>Cook time: {recipe.cook_time}</h3>
          <h3>Serves:{recipe.serves}</h3>
          <br/>
          <h4>Ingredients</h4>
          <br/>
          {recipe.ingredients && recipe.ingredients.map((ingredients,index)=>
          {return <h3 >{ingredients.quantity}-{ingredients.ingredient}</h3>
           })}
        </div>
        <div className={styles.detailed_instructions}>
          <h4>Instructions</h4>
          <p style={{ whiteSpace: "pre-wrap" }}>
          {recipe.instructions}
          </p>
        </div>
       </div>
    </section>
  );
};

export default DetailScreen;

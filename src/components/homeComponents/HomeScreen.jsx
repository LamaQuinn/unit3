import axios from "axios";
import AdBanner from "./AdBanner";
import React, { useEffect, useState } from "react";
import RecipeSearch from "./RecipeSearch";
import RecipeCard from "../recipeCard/RecipeCard";

const HomeScreen = () => {
  const  [recipes, setRecipes] = useState([]);

  const url = "https://recipes.devmountain.com";
  const getRec = () => {
    axios.get(`${url}/recipes`).then((res) => {
      setRecipes(res.data);
      console.log(res.data);
    });
  };


  useEffect(() => {
    getRec()
  }, []);

  return (
    <>
      <AdBanner />
     <RecipeSearch recipes={recipes}/>
     
    </>
  );
};

export default HomeScreen;

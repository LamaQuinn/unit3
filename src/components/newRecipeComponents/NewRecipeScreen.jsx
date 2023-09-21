import React,{useState,useEffect} from "react";
import styles from './NewRecipe.module.css'
import { Formik } from "formik";
import axios from "axios";

const NewRecipeScreen = () => {
  const [ingredients,setIngredients]=useState([])
  const [name,setName]=useState("")
  const [quantity,setQuantity]=useState("")

  const url="https://recipes.devmountain.com"

  
  
  const addIngredient=()=>{
    setIngredients([...ingredients, {name,quantity}])
    setName("")
    setQuantity("")
  }

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
};

const onSubmit = (values) => {
  values.ingredients=ingredients
  console.log(values)
  
}

useEffect((values)=>{
  axios.post(`${url}/recipes`,values)
  .then((res) => {
          console.log(res.data);
        })
},[])

const getIng=ingredients.map((ing)=>{
  return(
    <li>
    {ing.quantity} 
  
  <li>{ing.name}</li>
  </li>
  )
})
  return (

    <section>
      <h6>Tell us about your Recipe!</h6>
      {/* Here you will have a large form. Be prepared, part 4 will have you build this form in detail, and part 5 will have you style it. Do your best! */}
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({values,handleChange,handleSubmit})=>(

       
      <form onSubmit={handleSubmit}>
        <div className={styles.inputs}>
        <input placeholder="Name" name="recipeName" value={values.recipeName} onChange={handleChange}/>
        <input  placeholder="Image URL" name="imageURL" value={values.imageURL} onChange={handleChange}/>
        </div>
       <div className={styles.radio_btn}>
       <span>
        <input type="radio" name="type" value="Cook" onChange={handleChange}/>
        <h6 className={styles.radio_btn_name}>Cook</h6>
       </span>
       <span>
        <input type="radio" name="type" value="Bake" onChange={handleChange}/>
        <h6 className={styles.radio_btn_name}>Bake</h6>
       </span>
       <span>
        <input type="radio" name="type" value="Drink" onChange={handleChange}/>
        <h6 className={styles.radio_btn_name}>Drink</h6>
       </span>
       </div>
       <div className={styles.inputs} id={styles.inputs_container}>
          <input placeholder="Prep Time" name="prepTime" value={values.prepTime} onChange={handleChange}/>
          <input placeholder="Cook Time" name="cookTime" value={values.cookTime} onChange={handleChange}/>
          <input placeholder="Serves" name="serves" value={values.serves} onChange={handleChange}/>
       </div>
       <div className={styles.inputs}>
        <div className={styles.ingredient_inputs}>
         <input placeholder="Ingredient" value={name} onChange={(e) => setName(e.target.value)}/>
         <input placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
        </div>
        <ul>{getIng}</ul>
       </div>
       <button className={styles.add_btn} type="button" onClick={addIngredient}>Add Another</button>
       <textarea placeholder="What are the instructions?" rows={4} name="instructions" value={values.instructions} onChange={handleChange}></textarea>
       <button className={styles.save_btn} style={{ backgroundColor:'rgb(70, 120, 120)' , borderRadius: '0' ,fontSize:"20px",color:"white",border: 'none' }}>Save</button>
      </form>
       )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;

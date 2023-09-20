import React from "react";
import styles from './NewRecipe.module.css'
const NewRecipeScreen = () => {
  return (
    <section>
      <h6>Tell us about your Recipe!</h6>
      {/* Here you will have a large form. Be prepared, part 4 will have you build this form in detail, and part 5 will have you style it. Do your best! */}
      <form action="">
        <div className={styles.inputs}>
        <input placeholder="Name" name="recipeName"/>
        <input  placeholder="Image URL" name="imageUrl"/>
        </div>
       <div className={styles.radio_btn}>
       <span>
        <input type="radio" name="type" />
        <h6>Cook</h6>
       </span>
       </div>
      </form>
    </section>
  );
};

export default NewRecipeScreen;

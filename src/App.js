import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes,Route } from "react-router-dom";
import HomeScreen from "./components/homeComponents/HomeScreen"
import DetailScreen from "./components/detailComponents/DetailScreen"
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen"





function App() {
  return (
    <div className="App">
      <Header />
      {/* This is where you will code for some of Part 1. */}
      <main>
      <Routes>
      <Route index element={<HomeScreen />} />
      <Route path="newRecipe" element={<NewRecipeScreen />} />
      <Route path="recipe/:id" element={<DetailScreen />} />
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

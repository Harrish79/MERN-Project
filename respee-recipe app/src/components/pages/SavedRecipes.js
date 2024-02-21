import React from "react";
import { Link } from "react-router-dom";
import "../pages/SavedRecipes.css";
import Card from "../Cards/Card.js"
function SavedRecipes() {
  return (
    <div>
      <div className="recipe-add">
        <p>Want to add your own recipe?</p>
        <Link to="/Addrecipe">
          <button>Add</button>
        </Link>
      </div>
      <div className="title-sr">
        <h1>Saved Recipes</h1>
      </div>
      <div className="wrappers">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className="title-sr">
        <h1>My Recipes</h1>
      </div>
      <div className="wrappera">
        <Card/>
      </div>
    </div>
  );
}

export default SavedRecipes;

import React from "react";
import { FaSearch } from "react-icons/fa";
import "../pages/Recipes.css";
import Card from "../Cards/Card";
function Recipes() {
  const DessertsData = [
    { title: "Chocolate Cake", img: "chocolate-cake.jpg", Cuisine: "American" },
    {
      title: "Strawberry Cheesecake",
      img: "strawberry-cheesecake.jpg",
      Cuisine: "Indian",
    },
    {
      title: "Vanilla Ice Cream",
      img: "vanilla-ice-cream.jpg",
      Cuisine: "Indian",
    },
    {
      title: "Blueberry Muffins",
      img: "blueberry-muffins.jpg",
      Cuisine: "Italian",
    },
    {
      title: "Blueberry Muffins",
      img: "blueberry-muffins.jpg",
      Cuisine: "American",
    },
  ];
  return (
    <div className="body-r">
      <div className="main-r">
        <div>
          <h1 className="title-d">Recipes</h1>
        </div>
        <div className="cuisine-r">
          <h3>Cuisines</h3>
          <select type="text" className="cuisine-input">
            <option value="optionB">All</option>
            <option value="optionA">American</option>
            <option value="optionB">Brazilian</option>
            <option value="optionB">Chinese</option>
            <option value="optionB">Cuban</option>
            <option value="optionB">English</option>
            <option value="optionB">French</option>
            <option value="optionB">German</option>
            <option value="optionB">Greek</option>
            <option value="optionB">Hawaiian</option>
            <option value="optionB">Hungarian</option>
            <option value="optionB">Indian</option>
            <option value="optionB">Irish</option>
            <option value="optionB">Italian</option>
            <option value="optionB">Japanese</option>
            <option value="optionB">Mexican</option>
            <option value="optionB">Moroccon</option>
            <option value="optionB">Portuguese</option>
            <option value="optionB">Spanish</option>
            <option value="optionB">Swedish</option>
            <option value="optionB">Thai</option>
          </select>
        </div>
        <div className="search-wrapper">
          <FaSearch id="search-icon" />
          <input placeholder="Search Recipes.." />
        </div>
      </div>
      <div className="wrapperr">
        {DessertsData.map((card, index) => (
          <Card key={index} title={card.title} img={card.img} />
        ))}
      </div>
    </div>
  );
}

export default Recipes;

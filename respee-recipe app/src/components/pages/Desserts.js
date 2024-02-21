import React from "react";
import { FaSearch } from "react-icons/fa";
import "../pages/Desserts.css";
import Card from "../Cards/Card";
function Desserts() {
  const DessertsData = [
    { title: "Chocolate Cake", img: "chocolate-cake.jpg" },
    { title: "Strawberry Cheesecake", img: "strawberry-cheesecake.jpg" },
    { title: "Vanilla Ice Cream", img: "vanilla-ice-cream.jpg" },
    { title: "Blueberry Muffins", img: "blueberry-muffins.jpg" },
    { title: "Blueberry Muffins", img: "blueberry-muffins.jpg" },
  ];
  return (
    <div>
      <div className="main-d">
        <div>
          <h1 className="title-d">Desserts</h1>
        </div>
        <div className="search-wrapper">
          <FaSearch id="search-icon" />
          <input placeholder="Search Desserts.." />
        </div>
      </div>
      <div className="wrapperd">
      {DessertsData.map((card, index) => (
          <Card key={index} title={card.title} img={card.img} />
        ))}
      </div>
    </div>
  );
}

export default Desserts;

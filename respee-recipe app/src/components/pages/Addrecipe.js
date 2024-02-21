import React, { useState } from "react";
import "../pages/Addrecipe.css";

const Addrecipe = () => {
  const [formData, setFormData] = useState({
    Image: "",
    Name: "",
    Ingredients: "",
    Steps: "",
    Time: "",
    Details: "",
    Category: "",
    Cuisine: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here
    console.log("Form Data:", formData);
  };

  return (
    <div className="body-add" >
      <div className="form-container">
      <div className="form-title"><h1 >Recipe Form</h1></div>
        <form className="my-form" onSubmit={handleSubmit}>
        <label>
            Name:
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <br />
          <label>
            Image:
            <input
              type="file"
              name="Image"
              value={formData.Image}
              onChange={handleChange}
              accept="image/*"
              className="form-input"
            />
          </label>
          <br />
          <label>
            Ingredients:
            <textarea
              type="text"
              name="Ingredients"
              value={formData.Ingredients}
              onChange={handleChange}
              className="form-input"
            ></textarea>
          </label>
          <br />

          <label>
            Steps:
          <textarea
            name="Steps"
            rows="4"
            cols="50"
            value={formData.Steps}
            onChange={handleChange}
            className="form-input"
          ></textarea>
          </label>
          <br />

          <label>
            Time:
            <input
              type="text"
              name="Time"
              value={formData.Time}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <br />

          <label>
            Details
            <textarea
              type="text"
              name="Details"
              value={formData.Details}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <br />
          <label>
            Category:
            <select
              type="text"
              name="Category"
              value={formData.Category}
              onChange={handleChange}
              className="form-input"
            ><option value="optionA">Dessert</option>
            <option value="optionB">Food</option>
            </select>
          </label>
          <br />
          <label>
            Cuisine:
            <input
              type="text"
              name="Cuisine"
              value={formData.Cuisine}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <br />

          <button type="submit" className="form-button">
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addrecipe;

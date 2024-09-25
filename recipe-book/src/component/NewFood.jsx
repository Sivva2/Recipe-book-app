import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const NewFood = ({ addNewFood }) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    calories: "",
    image: "",
    servings: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newId = uuidv4();
    addNewFood({
      id: newId,
      ...formValues,
      calories: Number(formValues.calories),
      servings: Number(formValues.servings),
    });

    setFormValues({
      name: "",
      calories: "",
      image: "",
      servings: "",
    });
  };

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    const newValue = type === "number" ? Number(value) : value;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: newValue,
    }));
  };

  return (
    <>
      <h4 color="white">Add New Food</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Food Name:</label>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Calories:</label>
          <input
            type="number"
            name="calories"
            value={formValues.calories}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={formValues.image}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Servings:</label>
          <input
            type="number"
            name="servings"
            value={formValues.servings}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Food</button>
      </form>
    </>
  );
};

export default NewFood;

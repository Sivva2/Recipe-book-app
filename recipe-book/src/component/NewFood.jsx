import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const NewFood = ({ addNewFood }) => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: "",
    calories: 0,
    image: "",
    servings: 0,
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

    navigate(`/foods/${newId}`);
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
      <h1>New Food</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Food Name:</label>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Calories:</label>
          <input
            type="number"
            name="calories"
            value={formValues.calories}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={formValues.image}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Servings:</label>
          <input
            type="number"
            name="servings"
            value={formValues.servings}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Food</button>
      </form>
    </>
  );
};

export default NewFood;

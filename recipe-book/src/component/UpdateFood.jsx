import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateFood = ({ foods, onUpdate }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const existingFood = foods.find((food) => food.id === id);

  const [formValues, setFormValues] = useState({
    name: "",
    calories: "",
    image: "",
    servings: "",
  });

  useEffect(() => {
    if (existingFood) {
      setFormValues({
        name: existingFood.name,
        calories: existingFood.calories,
        image: existingFood.image,
        servings: existingFood.servings,
      });
    }
  }, [existingFood]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedFood = { ...existingFood, ...formValues };
    onUpdate(updatedFood);

    navigate(`/food/${updatedFood.id}`);
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
      <h1>Update Food</h1>
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
        <button type="submit">Update Food</button>
      </form>
    </>
  );
};

export default UpdateFood;

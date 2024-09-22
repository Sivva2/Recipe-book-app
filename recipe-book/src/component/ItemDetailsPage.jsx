import { useParams } from "react-router-dom";
import Data from "./Data";

const ItemDetailsPage = () => {
  const { id } = useParams();
  const foods = Data.find((foods) => foods.id === id);

  if (!foods) {
    return <div> Foods not found</div>;
  }

  return (
    <div>
      <h1>{foods.name}</h1>
      <img src={foods.image} alt={foods.name} />
      <p>Calories: {foods.calories}</p>
      <p>Servings: {foods.servings}</p>
    </div>
  );
};

export default ItemDetailsPage;

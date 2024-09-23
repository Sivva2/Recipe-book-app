import { useParams } from "react-router-dom";

const ItemDetailsPage = ({ foods }) => {
  const { id } = useParams();
  const food = foods.find((food) => food.id === id);

  if (!food) {
    return <div>Food not found</div>;
  }

  return (
    <div>
      <h1>{food.name}</h1>
      <img src={food.image} alt={food.name} />
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
    </div>
  );
};

export default ItemDetailsPage;

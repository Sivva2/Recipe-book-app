import ListMethod from "./ListMethod";

const List = ({ foods, setFoods }) => {
  console.log("Foods in List:", foods);
  const handleDelete = (id) => {
    const updatedFood = foods.filter((food) => food.id !== id);
    setFoods(updatedFood);
  };
  return (
    <div>
      <ul>
        {foods.map((item) => (
          <ListMethod key={item.id} item={item} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};
export default List;

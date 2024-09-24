import { useNavigate } from "react-router-dom";

const ListMethod = ({ item, onDelete }) => {
  const isHealthy = item.calories <= 200;
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`/food/${item.id}/update`);
  };
  return (
    <li key={item.id}>
      <h2>
        {item.name} {isHealthy ? "healthy" : "unhealthy"}
      </h2>
      <img src={item.image} alt={item.name} />
      <p>Servings: {item.servings}</p>
      <button
        type="button"
        onClick={() => {
          onDelete(item.id);
        }}
      >
        Delete
      </button>
      <button type="button" onClick={handleUpdate}>
        Update
      </button>
    </li>
  );
};

export default ListMethod;

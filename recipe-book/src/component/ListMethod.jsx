const ListMethod = ({ item, onDelete }) => {
  return (
    <li key={item.id}>
      <h2>
        {item.name} {item.calories > 200 ? "healthy" : "unhealthy"}
      </h2>
      <img src={item.image} alt={item.name} />
      <p>Servings : {item.servings}</p>
      <button
        type="button"
        onClick={() => {
          onDelete(item.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};
export default ListMethod;

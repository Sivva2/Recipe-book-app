import List from "./List";
import NewFood from "./NewFood";

const DashboardPage = ({ foods, setFoods, addNewFood }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <List foods={foods} setFoods={setFoods} />
      <NewFood addNewFood={addNewFood} />
    </div>
  );
};
export default DashboardPage;

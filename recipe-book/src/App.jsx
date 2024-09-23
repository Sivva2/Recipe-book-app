import "./App.css";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer";
import Sidebar from "./Component/Sidebar";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./component/DashboardPage";
import AboutPage from "./component/AboutPage";
import NotFoundPage from "./component/NotFoundPage";
import ItemDetailPage from "./component/ItemDetailsPage";
import UpdateFood from "./component/UpdateFood";
import { useState } from "react";
import Data from "./component/Data";
import List from "./component/List";

function App() {
  const [foods, setFoods] = useState(Data);

  const addNewFood = (newFood) => {
    setFoods((prevFoods) => [...prevFoods, newFood]);
  };

  const handleUpdateFood = (updatedFood) => {
    const updatedFoods = foods.map((food) =>
      food.id === updatedFood.id ? updatedFood : food
    );
    setFoods(updatedFoods);
  };

  return (
    <div className="Homepage">
      <Navbar />
      <Sidebar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <DashboardPage
                foods={foods}
                setFoods={setFoods}
                addNewFood={addNewFood}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/foods"
            element={<List foods={foods} setFoods={setFoods} />}
          />
          <Route path="/food/:id" element={<ItemDetailPage foods={foods} />} />
          <Route
            path="/food/:id/update"
            element={<UpdateFood foods={foods} onUpdate={handleUpdateFood} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

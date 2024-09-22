import "./App.css";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer";
import Sidebar from "./Component/Sidebar";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./component/DashboardPage";
import AboutPage from "./component/AboutPage";
import NotFoundPage from "./component/NotFoundPage";
import ItemDetailPage from "./component/ItemDetailsPage";
function App() {
  return (
    <div className="Homepage">
      <Navbar />
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/item/:id" element={<ItemDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

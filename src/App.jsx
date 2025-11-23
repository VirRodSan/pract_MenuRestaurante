import MainLayout from "./layout/MainLayout"
import MenuList from "./components/MenuList"
import Home from "./pages/Home"
import Categories from "./pages/Categories"
import MenuItemDetail from "./components/MenuItemDetail"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css"

function App() {
  return (
    <div className="main-app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="categorias" element={<Categories />}>
              <Route path="seafood" element={<MenuList type={"seafood"} />} />
              <Route path="beef" element={<MenuList type={"beef"} />} />
              <Route path="lamb" element={<MenuList type={"lamb"} />} />
              <Route path=":category/:idMeal" element={<MenuItemDetail  />} />
            </Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

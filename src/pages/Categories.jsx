import { NavLink, Outlet } from "react-router-dom";
import "../styles/Categories.css"

export default function Categories() {
    
    
  return (
    <div className="categories-container">
      <h1>Menus:</h1>
      <nav className="categories-nav">
        <NavLink to="seafood" >
          <span>Marisco</span>
        </NavLink>
        <NavLink to="beef" >
          <span>Beef</span>
        </NavLink>
        <NavLink to="lamb" >
          <span>Lamb</span>
        </NavLink>
      </nav>
      <div className="categories-content">
        <Outlet />
      </div>
    </div>
  );
}

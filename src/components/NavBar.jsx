import { Link } from "react-router-dom" 
import "../styles/NavBar.css"
export default function NavBar(){
    return(
        <nav className="nav-bar">
            <ul className="ul-navbar">
                <Link 
                    to="/"
                >
                    <img
                        src="https://www.themealdb.com/images/logo.svg"
                        alt="Logo Restaurante"
                    />
                </Link>
                <Link  
                    to="/categorias"
                >
                    <li>Categorías</li>
                </Link>
                
            </ul>
        </nav>
    )
}
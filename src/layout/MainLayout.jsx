import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import "../styles/MainLayout.css"

export default function MainLayout(){
    return(
        <>
        <header className="main-header">
            <NavBar />
        </header>
        <main className="main-content">
            <Outlet />
        </main>
        <footer className="main-footer">
            <Footer />
        </footer>
        </>
    )
}
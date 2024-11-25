import { Outlet } from "react-router-dom"
import MainMenu from "../components/MainMenu.jsx"



export default function Defaultlayout() {

    return (
        <>


            <header>
                <div className="Logo">Logo :)</div>

                < MainMenu />
            </header>

            <main>
                <Outlet />
            </main>

            <footer>

                <p>Copyright 2024</p>
            </footer>



        </>


    )
}
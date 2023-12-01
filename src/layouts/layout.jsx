import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Layout () {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Layout;
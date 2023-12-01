import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import HomeHeader from "../components/HomeHeader";

function HomeLayout () {
    return (
        <>
            <header>
                <HomeHeader />
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

export default HomeLayout;
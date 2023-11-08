import { Link, NavLink, Outlet } from "react-router-dom";

function Layout () {
    return (
        <>
            <header>
                <div className="container">
                    <nav className="nav">
                        <NavLink className="exile" to='/'>Home</NavLink>
                        <NavLink className="exile" to='/catalog'>Catalog</NavLink>
                    </nav>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>
    )
}

export default Layout;
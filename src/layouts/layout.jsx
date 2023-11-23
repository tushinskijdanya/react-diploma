import { Link, NavLink, Outlet } from "react-router-dom";

function Layout () {
    return (
        <>
            <header className="layoutHeader">
                <div className="upperHeader container">
                    <nav className="nav-pages">
                        <NavLink className="layout-exile" to='/'>HOME</NavLink>
                        <NavLink className="layout-exile" to='/home/new'>NEW</NavLink>
                        <NavLink className="layout-exile" to='/home/catalog'>КАТАЛОГ</NavLink>
                        <NavLink className="layout-exile" to='/home/about' >О НАС</NavLink>
                    </nav>
                    <div className="logo">
                        <h1 className="logo-name logo-name_layout">DANTY</h1>
                    </div>
                    <div className="settings-buttons">
                        <button className="language-setting"><span className="setting-button_text-layout">RU</span><img src="../images/langArrow-layout.svg" alt="arrow" /></button>
                        <button className="currency-setting"><span className="setting-button_text-layout">BYN</span><img src="../images/langArrow-layout.svg" alt="arrow" /></button>
                    </div>
                    <div className="additional-links">
                        <button className="search-button"><img src="../images/search-layout.svg" alt="search" /></button>
                        <Link className="account_login"><img src="../images/account-layout.svg" alt="account" /></Link>
                        <Link className="like-page"><img src="../images/like-layout.svg" alt="like" /></Link>
                        <Link className="cart-page"><img src="../images/cart-layout.svg" alt="cart" /></Link>
                    </div>
                </div>
            </header>
            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>
            <footer></footer>
        </>
    )
}

export default Layout;
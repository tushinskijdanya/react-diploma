import { Link, NavLink, Outlet } from "react-router-dom";
import { headerData } from "../data/headerData";

function Layout () {
    let listName = headerData.isRussian ? headerData.russian : headerData.england;
    
    return (
        <>
            <header className="layoutHeader">
                <div className="upperHeader container">
                    <nav className="nav-pages">
                        <NavLink className="layout-exile" to='/'>{listName.links.home}</NavLink>
                        <NavLink className="layout-exile" to='/home/new'>{listName.links.new}</NavLink>
                        <NavLink className="layout-exile" to='/home/catalog'>{listName.links.catalog}</NavLink>
                        <NavLink className="layout-exile" to='/home/about' >{listName.links.about}</NavLink>
                    </nav>
                    <div className="logo">
                        <h1 className="logo-name logo-name_layout">DANTY</h1>
                    </div>
                    <div className="settings-buttons">
                        <select className="language-setting-layout setting-button_text-layout">
                            <option className="language" value="en" selected>EN</option>
                            <option className="language" value="ru">RU</option>
                        </select>
                        <select className="currency-setting-layout setting-button_text-layout">
                            <option className="currency" value="en" selected>BYN</option>
                            <option className="currency" value="ru">USD</option>
                        </select>
                        {/* <button className="language-setting"><span className="setting-button_text-layout">RU</span><img src="../images/langArrow-layout.svg" alt="arrow" /></button>
                        <button className="currency-setting"><span className="setting-button_text-layout">BYN</span><img src="../images/langArrow-layout.svg" alt="arrow" /></button> */}
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
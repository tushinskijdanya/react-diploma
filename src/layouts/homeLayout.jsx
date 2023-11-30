import { Link, NavLink, Outlet } from "react-router-dom";
import { headerData } from "../data/headerData";

function HomeLayout () {
    let languaName = headerData.isRussian ? headerData.russian : headerData.england;

    return (
        <>
            <header className="homeHeader">
                <div className="upperHeader container">
                    <nav className="nav-pages">
                        <NavLink className="exile" to='/'>{languaName.links.home}</NavLink>
                        <NavLink className="exile" to='/home/new'>{languaName.links.new}</NavLink>
                        <NavLink className="exile" to='/home/catalog'>{languaName.links.catalog}</NavLink>
                        <NavLink className="exile" to='/home/about' >{languaName.links.about}</NavLink>
                    </nav>
                    <div className="logo">
                        <h1 className="logo-name">DANTY</h1>
                    </div>
                    <div className="settings-buttons">
                        <select className="language-setting setting-button_text">
                            <option className="language" value="en" selected>EN</option>
                            <option className="language" value="ru">RU</option>
                        </select>
                        <select className="currency-setting setting-button_text">
                            <option className="currency" value="en" selected>BYN</option>
                            <option className="currency" value="ru">USD</option>
                        </select>
                        {/* <button className="language-setting"><span className="setting-button_text">RU</span><img src="../images/langArrow.svg" alt="arrow" /></button>
                        <button className="currency-setting"><span className="setting-button_text"></span><img src="../images/langArrow.svg" alt="arrow" /></button> */}
                    </div>
                    <div className="additional-links">
                        <button className="search-button"><img src="../images/search.svg" alt="search" /></button>
                        <Link className="account_login"><img src="../images/account.svg" alt="account" /></Link>
                        <Link className="like-page"><img src="../images/like.svg" alt="like" /></Link>
                        <Link className="cart-page"><img src="../images/cart.svg" alt="cart" /></Link>
                    </div>
                </div>
                <div className="lowerHeader">
                    <h2 className="newCollection-text">{languaName.homeLayout.new}</h2>
                    <div className="line" />
                    <button className="wetchNews-button"><span className="wetchNews-button_text">{languaName.homeLayout.wetch}</span><img src="../images/newArrow.svg" alt="arrow" /></button>
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

export default HomeLayout;
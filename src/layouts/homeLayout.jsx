import { Link, NavLink, Outlet } from "react-router-dom";

function HomeLayout () {
    return (
        <>
            <header className="homeHeader">
                <div className="upperHeader container">
                    <nav className="nav-pages">
                        <NavLink className="exile" to='/'>HOME</NavLink>
                        <NavLink className="exile" to='/home/new'>NEW</NavLink>
                        <NavLink className="exile" to='/home/catalog'>КАТАЛОГ</NavLink>
                        <NavLink className="exile" to='/home/about' >О НАС</NavLink>
                    </nav>
                    <div className="logo">
                        <h1 className="logo-name">DANTY</h1>
                    </div>
                    <div className="settings-buttons">
                        <button className="language-setting"><span className="setting-button_text">RU</span><img src="../images/langArrow.svg" alt="arrow" /></button>
                        <button className="currency-setting"><span className="setting-button_text">BYN</span><img src="../images/langArrow.svg" alt="arrow" /></button>
                    </div>
                    <div className="additional-links">
                        <button className="search-button"><img src="../images/search.svg" alt="search" /></button>
                        <Link className="account_login"><img src="../images/account.svg" alt="account" /></Link>
                        <Link className="like-page"><img src="../images/like.svg" alt="like" /></Link>
                        <Link className="cart-page"><img src="../images/cart.svg" alt="cart" /></Link>
                    </div>
                </div>
                <div className="lowerHeader">
                    <h2 className="newCollection-text">Новая коллекция</h2>
                    <div className="line" />
                    <button className="wetchNews-button"><span className="wetchNews-button_text">Смотреть Новинки</span><img src="../images/newArrow.svg" alt="arrow" /></button>
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
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { headerData } from "../data/headerData";

function Header () {
    const {language} = useSelector(state => state.lng);
    const textLang = (language === 'RU') ? headerData.russian : headerData.england;

    return(
        <div className="layoutHeader">
            <div className="upperHeader container">
                <nav className="nav-pages">
                    <NavLink className="layout-exile" to='/'>{textLang.links.home}</NavLink>
                    <NavLink className="layout-exile" to='/home/new'>{textLang.links.new}</NavLink>
                    <NavLink className="layout-exile" to='/home/catalog'>{textLang.links.catalog}</NavLink>
                    <NavLink className="layout-exile" to='/home/about' >{textLang.links.about}</NavLink>
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
                </div>
                <div className="additional-links">
                    <button className="search-button"><img src="../images/search-layout.svg" alt="search" /></button>
                    <Link className="account_login"><img src="../images/account-layout.svg" alt="account" /></Link>
                    <Link className="like-page"><img src="../images/like-layout.svg" alt="like" /></Link>
                    <Link className="cart-page"><img src="../images/cart-layout.svg" alt="cart" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Header;
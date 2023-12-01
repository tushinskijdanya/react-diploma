import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";

import { headerData } from "../data/headerData";
import { changeLangAC, changeCurrAC } from "../store/langCurrReducer";

function HomeHeader () {
    const {language} = useSelector(state => state.lng);
    const textLang = (language === 'ru') ? headerData.russian : headerData.england;

    const dispatch = useDispatch();

    const editLanguage = (e) => {
        console.log('language:', e.target.value)
        dispatch(changeLangAC(e.target.value))
    }

    const editCurrency = (e) => {
        dispatch(changeCurrAC(e.target.value))
    }

    return(
        <div className="homeHeader">
            <div className="upperHeader container">
                <nav className="nav-pages">
                    <NavLink className="exile" to='/'>{textLang.links.home}</NavLink>
                    <NavLink className="exile" to='/home/new'>{textLang.links.new}</NavLink>
                    <NavLink className="exile" to='/home/catalog'>{textLang.links.catalog}</NavLink>
                    <NavLink className="exile" to='/home/about' >{textLang.links.about}</NavLink>
                </nav>
                <div className="logo">
                    <h1 className="logo-name">DANTY</h1>
                </div>
                <div className="settings-buttons">
                    <select onChange={(e) => editLanguage(e)} defaultValue="ru" className="language-setting setting-button_text">
                        <option className="language" value="ru">RU</option>
                        <option className="language" value="en">EN</option>
                    </select>
                    <select onChange={(e) => editCurrency(e)} defaultValue="byn" className="currency-setting setting-button_text">
                        <option className="currency" value="byn">BYN</option>
                        <option className="currency" value="usd">USD</option>
                    </select>
                </div>
                <div className="additional-links">
                    <button className="search-button"><img src="../images/search.svg" alt="search" /></button>
                    <Link className="account_login"><img src="../images/account.svg" alt="account" /></Link>
                    <Link className="like-page"><img src="../images/like.svg" alt="like" /></Link>
                    <Link className="cart-page"><img src="../images/cart.svg" alt="cart" /></Link>
                </div>
            </div>
            <div className="lowerHeader">
                <h2 className="newCollection-text">{textLang.homeLayout.new}</h2>
                <div className="line" />
                <button className="wetchNews-button"><span className="wetchNews-button_text">{textLang.homeLayout.wetch}</span><img src="../images/newArrow.svg" alt="arrow" /></button>
            </div>
        </div>
    )
}

export default HomeHeader;
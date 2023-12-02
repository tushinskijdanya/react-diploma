import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import useOnClickOutside from "use-onclickoutside";

import { headerData } from "../data/headerData";
import { changeLangAC, changeCurrAC, openSearchAC } from "../store/langCurrReducer";
import HeadersRightLinks from "./HeadersRightLinks";
import SearchLine from "./Search";

function Header () {
    const {language, search} = useSelector(state => state.lng);
    const textLang = (language === 'ru') ? headerData.russian : headerData.england;
    const dispatch = useDispatch();
    const searchRef = useRef(null);

    useOnClickOutside(searchRef, () => {
        dispatch(openSearchAC(false))
    })

    const editLanguage = (e) => {
        console.log('language:', e.target.value)
        dispatch(changeLangAC(e.target.value))
    }

    const editCurrency = (e) => {
        dispatch(changeCurrAC(e.target.value))
    }

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
                    <select onChange={(e) => editLanguage(e)} defaultValue="ru" className="language-setting-layout setting-button_text-layout">
                        <option className="language" value="ru">RU</option>
                        <option className="language" value="en">EN</option>
                    </select>
                    <select onChange={(e) => editCurrency(e)} defaultValue="byn" className="currency-setting-layout setting-button_text-layout">
                        <option className="currency" value="byn">BYN</option>
                        <option className="currency" value="usd">USD</option>
                    </select>
                </div>
                <div className="right-menu" ref={searchRef}>
                    {
                        search ? <SearchLine /> : <HeadersRightLinks />
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;
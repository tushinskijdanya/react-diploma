import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import useOnClickOutside from "use-onclickoutside";

import { headerData } from "../data/headerData";
import { changeLangAC, changeCurrAC, openSearchAC } from "../store/langCurrReducer";
import SearchLine from "./Search";
import HomeHeadersRightLinks from "./HomeHeadersRightLinks";

function HomeHeader () {
    const {currency ,language, search} = useSelector(state => state.lng);
    const textLang = (language === 'ru') ? headerData.russian : headerData.england;
    const dispatch = useDispatch();
    const searchRef = useRef(null);
    const navigate = useNavigate();

    useOnClickOutside(searchRef, () => {
        console.log('что происходит')
        dispatch(openSearchAC(false))
    })

    const editLanguage = (e) => {
        console.log('language:', e.target.value)
        dispatch(changeLangAC(e.target.value))
    }

    const editCurrency = (e) => {
        dispatch(changeCurrAC(e.target.value))
    }

    const goCategory = () => {
        navigate(`/home/catalog`, {state: {category: 'new'}})
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
                    <select onChange={(e) => editLanguage(e)} defaultValue={language} className="language-setting setting-button_text">
                        <option className="language" value="ru">RU</option>
                        <option className="language" value="en">EN</option>
                    </select>
                    <select onChange={(e) => editCurrency(e)} defaultValue={currency} className="currency-setting setting-button_text">
                        <option className="currency" value="byn">BYN</option>
                        <option className="currency" value="usd">USD</option>
                    </select>
                </div>
                <div className="right-menu" ref={searchRef}>
                    {
                        search ? <SearchLine /> : <HomeHeadersRightLinks />
                    }
                </div>
            </div>
            <div className="lowerHeader">
                <h2 className="newCollection-text">{textLang.homeLayout.new}</h2>
                <div className="line" />
                <button onClick={() => goCategory()} className="wetchNews-button"><span className="wetchNews-button_text">{textLang.homeLayout.wetch}</span><img src="../images/newArrow.svg" alt="arrow" /></button>
            </div>
        </div>
    )
}

export default HomeHeader;
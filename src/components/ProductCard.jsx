import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CatalogContext } from "../pages/catalog/Catalog";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { headerData } from "../data/headerData";

function ProductCard () {
    const loc = useLocation();
    const product = loc.state.product.product;
    const {categoryActive, setCategoryActive} = useContext(CatalogContext)
    const {language} = useSelector(state => state.lng);
    const textLangLinks = (language === 'ru') ? headerData.russian : headerData.england;
    const categoryName = (language === 'ru') ? product.categoryRU : product.categoryEN;
    const category = product.categoryEN;
    const textLang = (language === 'ru') ? product.russian : product.name.english;
    const navigate = useNavigate();

    console.log('name: ', categoryName)
    console.log('productCategory: ', product.categoryEN)

    const goToCategories = () => {
        navigate(`/home/catalog`, {state: {category: category}})
    }

    return(
        <>
            <div className="pathsList-block">
                <NavLink className={({isActive}) => isActive ? "catalogsLink catalog_active" : "catalogsLink" } to='/'>{textLangLinks.links.main}</NavLink>
                <img src="/public/images/path-RightArrow.svg" alt="arrow" />
                <NavLink onClick={() => setCategoryActive(null)} className={({isActive}) => (isActive && (categoryActive === null)) ? "catalogsLink catalog_active" : "catalogsLink" } to='/home/catalog'>{textLangLinks.links.catalog}</NavLink>
                <div className="pathsList-block_category">
                    <img src="/public/images/path-RightArrow.svg" alt="arrow" />
                    <span onClick={goToCategories} className="catalogsLink">{categoryName}</span>
                </div>
                <div className="pathsList-block_category">
                    <img src="/public/images/path-RightArrow.svg" alt="arrow" />
                    <span className="catalogsLink catalog_active">{textLang.name}</span>
                </div>
            </div>
            <div className="productCard-block">

            </div>
        </>
        
    )
}

export default ProductCard;
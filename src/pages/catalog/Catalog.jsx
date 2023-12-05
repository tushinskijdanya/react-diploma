import { useState, createContext } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import CategoriesList from "../../components/CategoriesList";
import { useSelector } from "react-redux";

import { headerData } from "../../data/headerData";
import CatProductCard from "../../components/CatProductCard";

function Catalog () {
    const loc = useLocation()
    const locCategory = (loc.state) ? loc.state.category : null;
    const {language} = useSelector(state => state.lng);
    const {goods} = useSelector(state => state.gds)
    const textLang = (language === 'ru') ? headerData.russian : headerData.england;
    const [categoryActive, setCategoryActive] = useState(locCategory);
    const products = (categoryActive !== null) ? goods.filter(itemes => itemes.categoryEN == categoryActive || itemes.new == true) : goods;
    const nameLang = (language === 'ru') ? products[0].categoryRU : products[0].categoryEN;
    const [categoryName, setCategoryName] = useState(nameLang);

    console.log('loc', locCategory)
    console.log('category: ', categoryActive)
    console.log('categoryName', categoryName)

    

    console.log('products: ', products)

    return (
        <>
            <CatalogContext.Provider value={{categoryActive, setCategoryActive, setCategoryName}}>
                <div className="pathsList-block">
                    <NavLink className={({isActive}) => isActive ? "catalogsLink catalog_active" : "catalogsLink" } to='/'>{textLang.links.main}</NavLink>
                    <img src="/public/images/path-RightArrow.svg" alt="arrow" />
                    <NavLink onClick={() => setCategoryActive(null)} className={({isActive}) => (isActive && (categoryActive === null)) ? "catalogsLink catalog_active" : "catalogsLink" } to='/home/catalog'>{textLang.links.catalog}</NavLink>
                    <div className={(categoryActive !== null && locCategory !== null && categoryActive !== 'new') ? "pathsList-block_category" : 'none'}>
                        <img src="/public/images/path-RightArrow.svg" alt="arrow" />
                        <span className="catalogsLink catalog_active">{categoryName}</span>
                    </div>
                    <div className={(categoryActive == 'new') ? "pathsList-NEW" : 'none'}>
                        <p>{categoryActive}</p>
                    </div>
                </div>
                <div className="catalog-container">
                    <div className="catalog-container__categoryList">
                        <CategoriesList />
                    </div>
                    <div className="catalog-container__goodsList">
                        {
                            products.map((product, idx) => <CatProductCard product={product} key={idx} id={idx} />)
                        }
                    </div>
                </div>
            </CatalogContext.Provider>
        </>
        
    )
}

export const CatalogContext = createContext('default');
export default Catalog;
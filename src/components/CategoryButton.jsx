import { useContext } from "react";

import { CatalogContext } from "../pages/catalog/Catalog";
import { useSelector } from "react-redux";


function CategoryButton (props) {
    const {categoryActive, setCategoryActive, setCategoryName} = useContext(CatalogContext)
    const {language} = useSelector(state => state.lng)

    const thisCategory = props.product.categoryEN;
    const categoryName = (language === 'ru') ? props.product.categoryRU : props.product.categoryEN;

    const startThisButton = () => {
        setCategoryActive((prev) => prev = thisCategory)
        setCategoryName((prev) => prev = categoryName)
    }
    return(
        <div className="category_button-block">
            <button onClick={startThisButton} className={(categoryActive === thisCategory) ? 'category-buttonActive category-button' : 'category-button'}>{categoryName}</button>
        </div>
    )

}

export default CategoryButton;
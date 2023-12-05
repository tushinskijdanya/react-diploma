import { useSelector } from "react-redux";
import CategoryButton from "./CategoryButton";


function CategoriesList () {
    const {goods} = useSelector(state => state.gds);
    console.log('listGoods', goods)

    

    const mainsCategory = goods.filter((items, idx) => {
        if (idx === 0 || idx % 5 === 1) {
            return idx
        }
    });

    console.log('mainsCategory', mainsCategory)

    return(
        <div className="categoryList-block">
            {
                mainsCategory.map((product, idx) => <CategoryButton product={product} key={idx} idx={idx} />)
            }
        </div>
    ) 
}

export default CategoriesList;
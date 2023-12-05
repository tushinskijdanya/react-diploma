import { useSelector } from "react-redux";

function CatProductCard (props) {
    const {product} = props;
    const {currency, language} = useSelector(state => state.lng);
    const textLang = (language === 'ru') ? product.russian : product.english;

     return(
        <div className="categoriesCard_block">
            <div className="categoriesCard_block-image">
                <img className="block-image" src={product.images.image1} alt="clothes" />
                <div className="categoriesCard_block-image-like">
                    <button className={(product.favourite) ? 'none' : 'like'}><img src="/public/images/likeDefault.svg" alt="like" /></button>
                    <button className={(product.favourite) ? 'like' : 'none'}><img src="/public/images/likeActive.svg" alt="like" /></button>
                </div>
            </div>
            <div className="categoriesCard_block-name">
                <p className="name">{textLang.name}</p>
                <p className={(product.new) ? 'new' : 'none'}>new</p>
            </div>
            <div className="categoriesCard_block-shop">
                <p className="price">
                    {
                        (currency === 'byn') ? `${product.price_BY} byn` : `${product.priceUSD} usd`
                    }
                </p>
                <button className="shop-button"><img src="/public/images/shop_icon.svg" alt="shop" /></button>
            </div>
            <div className="categoriesCard_block-sizes">
                <p className="size">{product.size.sizeM}</p>
                <p className="size">{product.size.sizeL}</p>
                <p className="size">{product.size.sizeXL}</p>
            </div>
            <div className="categoriesCard_block-colors">
                <div className="color" style={{background: product.color.HEX1}}></div>
                <div className="color" style={{background: product.color.HEX2}}></div>
                <div className="color" style={{background: product.color.HEX3}}> </div>
            </div>
        </div>
     )
}

export default CatProductCard;
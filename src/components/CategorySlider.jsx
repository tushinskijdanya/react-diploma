import { useState } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router";

function CategorySlider () {
    const {goods} = useSelector(state => state.gds);
    const {language} = useSelector(state => state.lng);
    const navigate = useNavigate();

    const [idx, setIdx] = useState({
        idx1: 0,
        idx2: 5,
        idx3: 10,
        idx4: 15
    });

    function toNext () {
        setIdx((prev) => {
            let temp = {...prev}
            temp.idx1 = 20,
            temp.idx2 = 25,
            temp.idx3 = 30,
            temp.idx4 = 35

            return temp;
        })
    }

    function toBack () {
        setIdx((prev) => {
            let temp = {...prev}
            temp.idx1 = 0,
            temp.idx2 = 5,
            temp.idx3 = 10,
            temp.idx4 = 15

            return temp;
        })
    }

    const goCategory = (category) => {
        navigate(`/home/catalog`, {state: {category: category}})
        console.log('category', category)
    }

    return(
        <div className="homeCategory">
            <p className="homeCategory-name">{(language === 'ru' ? 'Категории' : 'Categories')}</p>
            <div className="homeCategory_slider">
                <div className="homeCategory_slider-block">
                    <div className="thisCategory" onClick={() => goCategory(goods[idx.idx1].categoryEN)}>
                        <img src={goods[idx.idx1].images.image1} alt='category' />
                        <div className="thisCategory-name">
                            <p>{(language === 'ru' ? goods[idx.idx1].categoryRU : goods[idx.idx1].categoryEN)}</p>
                        </div>
                    </div>
                    <div className="thisCategory" onClick={() => goCategory(goods[idx.idx2].categoryEN)}>
                        <img src={goods[idx.idx2].images.image1} alt="category" />
                        <div className="thisCategory-name">
                            <p>{(language === 'ru' ? goods[idx.idx2].categoryRU : goods[idx.idx2].categoryEN)}</p>
                        </div>
                    </div>
                    <div className="thisCategory" onClick={() => goCategory(goods[idx.idx3].categoryEN)}>
                        <img src={goods[idx.idx3].images.image1} alt="category" />
                        <div className="thisCategory-name">
                            <p>{(language === 'ru' ? goods[idx.idx3].categoryRU : goods[idx.idx3].categoryEN)}</p>
                        </div>
                    </div>
                    <div className="thisCategory" onClick={() => goCategory(goods[idx.idx4].categoryEN)}>
                        <img src={goods[idx.idx4].images.image1} alt="category" />
                        <div className="thisCategory-name">
                            <p>{(language === 'ru' ? goods[idx.idx4].categoryRU : goods[idx.idx4].categoryEN)}</p>
                        </div>
                    </div>
                </div>
                <div className={(idx.idx1 === 0) ? "none" : "homeCategory-button_left"}><button className="left-button homeCategory-button" onClick={toBack}><img src='/images/left.svg'/></button></div>
                <div className={(idx.idx1 === 0) ? "homeCategory-button_right" : 'none'}><button className="right-button homeCategory-button" onClick={toNext}><img src='/images/right.svg'/></button></div>
            </div>
        </div>
    )
}

export default CategorySlider;
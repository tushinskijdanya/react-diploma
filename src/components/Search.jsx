import { useNavigate } from "react-router";
import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";





function SearchLine () {
    const {language} = useSelector(state => state.lng);
    const placeholderText = (language === 'ru') ? 'Введите ваш запрос' : 'Enter your request';

    const navigate = useNavigate();

    const [line, setLine] = useState('');

    const searchRegust = (line) => {
        
        if (language === 'ru') {
            if (line === '') {
                alert('Заполните строку!')
            } else if (line === 'пальто') {
                navigate(`/home/catalog`)
            } else if (line === 'костюм' || line === 'костюмы' || line === 'классический костюм' || line === 'классические костюмы') {
                navigate(`/home/catalog/${coast}`)
            } else  {
                alert('Поиск не дал результатов!')
            }
        }
    }

    return(
        <div className="search_products">
            <input  onChange={(e) => setLine(prev => prev = e.target.value)} type='text' placeholder={placeholderText} name='search' value={line}/>
            <button onClick={() => searchRegust(line)} className="search_products-button"><img src="/public/images/search-smull.svg" alt="search"/></button>
        </div>
    )
}

export default SearchLine;
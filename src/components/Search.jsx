import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

function SearchLine () {
    const {language} = useSelector(state => state.lng);
    const placeholderText = (language === 'ru') ? 'Введите ваш запрос' : 'Enter your request';

    const [line, setLine] = useState('');

    return(
        <div className="search">
            <input onChange={(e) => setLine(prev => prev = e.target.value)} type='text' placeholder={placeholderText} name='search' value={line}/>
        </div>
    )
}

export default SearchLine;
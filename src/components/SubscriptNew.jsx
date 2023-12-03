import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

function SubscriptNew () {
    const subText = {
        en: {
            name: 'Be the first to know about new products',
            plac: 'Your e-mail*',
            button: 'SUBSCRIBE',
            ps: 'By clicking on the “Subscribe” button, I agree to the processing of my personal data and have read the privacy terms.'
        },
        ru: {
            name: 'Узнайте  первым о новинках',
            plac: 'Ваш e-mail*',
            button: 'ПОДПИСАТЬСЯ',
            ps: 'Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих персональных данных и ознакомлен(а) с условиями конфиденциальности.'
        }
    }

    const {language} = useSelector(state => state.lng);
    const langText = (language === 'ru' ? subText.ru : subText.en);
    const [line, setLine] = useState('');
    

    return(
        <div className="homeSub">
            <h4>{langText.name}</h4>
            <div className="homeSub-form">
                <input  onChange={(e) => setLine(prev => prev = e.target.value)} type='text' placeholder={langText.plac} value={line}/>
                <div className="homeSub-form_button">
                    <button>{langText.button}</button>
                </div>
            </div>
            <div className="homeSub_ps">
                <p>{langText.ps}</p>
            </div>
        </div>
    )
}

export default SubscriptNew;
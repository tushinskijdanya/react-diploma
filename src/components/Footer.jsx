import { useSelector } from "react-redux/es/hooks/useSelector";
import { footerData } from "../data/footerData"
import { Link } from "react-router-dom";

function Footer () {
    const {language} = useSelector(state => state.lng);
    const textLang = (language === 'ru') ? footerData.russian : footerData.england;
    
    return(
        <div className="footer container">
            <ul className="footer-block">
                <h3>{textLang.company.name}</h3>
                <li><Link className="footer-link">{textLang.company.about}</Link></li>
            </ul>
            <div className="footer-block">
                <h3>{textLang.helpful.name}</h3>
                <ul className="footer_links-block">
                    <li><Link className="footer-link">{textLang.helpful.pay}</Link></li>
                    <li><Link className="footer-link">{textLang.helpful.conditions}</Link></li>
                    <li><Link className="footer-link">{textLang.helpful.bonuses}</Link></li>
                </ul>
            </div>
            <div className="footer-block">
                <h3>{textLang.buyer.name}</h3>
                <ul className="footer_links-block">
                    <li><Link className="footer-link">{textLang.buyer.favorites}</Link></li>
                    <li><Link className="footer-link">{textLang.buyer.offer}</Link></li>
                    <li><Link className="footer-link">{textLang.buyer.privacy}</Link></li>
                </ul>   
            </div>
            <div className="footer-block">
                <h3>{textLang.contacts.name}</h3>
                <ul className="footer_links-block">
                    <li className="footer_webPages-block">
                        <a href="//www.instagram.com/"><img src={textLang.contacts.insta} alt="insta" /></a>
                        <a href="//web.telegram.org/k/"><img src={textLang.contacts.telegram} alt="telega" /></a>
                    </li>
                    <li className="contacts-block">
                        <a className="footer-link" href={`tel:${textLang.contacts.telephone}`}>{textLang.contacts.telephone}</a>
                    </li>
                    <li className="contacts-block">
                        <a className="footer-link" href={`mailto:${textLang.contacts.mail}`}>{textLang.contacts.mail}</a>
                    </li>
                </ul>
            </div>
        </div>
    )
} 

export default Footer;
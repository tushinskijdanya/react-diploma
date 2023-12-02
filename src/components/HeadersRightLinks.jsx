import { useDispatch } from "react-redux";
import { openSearchAC } from "../store/langCurrReducer";
import { Link } from "react-router-dom";

function HeadersRightLinks () {
    const dispatch = useDispatch();

    const openSearch = () => {
        dispatch(openSearchAC(true));
    }

    return(
        <nav className="additional-links">
            <button onClick={() => openSearch()} className="search-button"><img src="../images/search-layout.svg" alt="search" /></button>
            <Link className="account_login" ><img src="../images/account-layout.svg" alt="account" /></Link>
            <Link className="like-page" ><img src="../images/like-layout.svg" alt="like" /></Link>
            <Link className="cart-page" ><img src="../images/cart-layout.svg" alt="cart" /></Link>
        </nav>
    )
}

export default HeadersRightLinks;

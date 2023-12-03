import { useLocation } from "react-router-dom";

function Catalog () {

    const loc = useLocation()
    const { category } = loc.state;


    console.log('loc', category)
    return (
        <h2>Hello!</h2>
    )
}

export default Catalog;
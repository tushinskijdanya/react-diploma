import { useLocation } from "react-router-dom";

function Catalog () {
    const loc = useLocation()
    const locCategory = (loc.state) ? loc.state.category : null;
    // const { category } = loc.state;
    console.log('loc', locCategory)
    
    return (
        <h2>Hello!</h2>
    )
}

export default Catalog;
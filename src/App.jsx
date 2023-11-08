import { Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout";
import Home from "./pages/home/Home";
import Catalog from "./pages/catalog/Catalog";


function App() {

  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
        </Route>
    </Routes>
  );
}

export default App

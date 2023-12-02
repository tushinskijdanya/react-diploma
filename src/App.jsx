import { Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout";
import Home from "./pages/home/Home";
import Catalog from "./pages/catalog/Catalog";
import HomeLayout from "./layouts/homeLayout";
import NewPage from "./pages/new/New";
import AboutPage from "./pages/about/About";


function App() {

  return (
    <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/home" element={<Layout />}>
            <Route path="/home/new" element={<NewPage />} />
            <Route path="/home/catalog" element={<Catalog />} />
            <Route path="/home/catalog/:category" element={<Catalog />} />
            <Route path="/home/catalog/:category/:id" element={<Catalog />} />
            <Route path="/home/about" element={<AboutPage />} />
        </Route>
    </Routes>
  );
}

export default App

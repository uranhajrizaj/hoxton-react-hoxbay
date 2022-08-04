import { Navigate, Route, Routes } from "react-router-dom";
import { Basket } from "./components/Baasket";
import { Categories } from "./components/Categories";
import { CategoryDetailes } from "./components/CategoryDetailes";
import Header from "./components/Header";
import { Home } from "./components/Home";
import { ItemList } from "./components/ItemList";
import { PageNotFound } from "./components/PageNotFound";
import { ProductDetails } from "./components/ProductDetails";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* Create your routes here. Don't forget to install the router package! */}
        <Routes>
          <Route index element={<Navigate to="/products" />} />
          <Route path="/products" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id" element={<CategoryDetailes />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

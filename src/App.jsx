import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import ProductList from './Components/Routes/Products/ProductList';
import ProductDetail from './Components/Routes/Products/ProductDetail';
import AddProduct from './Components/Routes/Products/AddProduct';
import DeleteProduct from './Components/Routes/Products/DeleteProduct';

function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/product/productList" element={<ProductList />} />
      </Routes>
    </>
  );
}

export default App;

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Navigate, Routes, Route } from "react-router-dom";
import PageNotFound from './Components/PageNotFound/PageNotFound';
import SideNavContent from './Components/SideNavContent.jsx/SideNavContent';
import ProductList from './Components/Routes/Products/ProductList';
import AddProduct from './Components/Routes/Products/AddProduct';
import DeleteProduct from './Components/Routes/Products/DeleteProduct';
import ProductDetail from './Components/Routes/Products/ProductDetail';

function App() {
  return (
    <>

      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Navigate to={'/dashboard'} />} />
        <Route path="/" element={<Navbar />}>
          <Route path="dashboard" element={<SideNavContent />} />
          <Route path="productList" element={<ProductList />} />
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="deleteProduct" element={<DeleteProduct />} />
          <Route path="productDetail" element={<ProductDetail />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

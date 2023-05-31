import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Navigate, Routes, Route } from "react-router-dom";
// import SideNavContent from './Components/SideNavContent.jsx/SideNavContent';
import ProductList from './Components/Routes/Products/ProductList';
import PageNotFound from './Components/PageNotFound/PageNotFound';
// import ProductDetail from './Components/Routes/Products/ProductDetail';
// import AddProduct from './Components/Routes/Products/AddProduct';
// import DeleteProduct from './Components/Routes/Products/DeleteProduct';

function App() {
  return (
    <>

      {/* <Navbar /> */}
      <Routes>

        <Route path="/" element={<Navigate to={'/dashboard'} element={<Navbar />} />} />
        <Route path="/dashboard" element={<Navbar />}>
          <Route path="productList" element={<ProductList />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

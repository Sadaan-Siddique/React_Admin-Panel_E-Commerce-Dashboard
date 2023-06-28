import React from 'react';
import { Navigate, Routes, Route } from "react-router-dom";
import './App.css';
// Authentication
import Signup from './Components/Authentication/Signup';
import Signin from './Components/Authentication/Signin';
// Navbar
import Navbar from './Components/Navbar/Navbar';
// Universal Route
import UniversalRoute from './Components/Universal_Route/UniversalRoute';
// Side Nav Content
import SideNavContent from './Components/SideNavContent.jsx/SideNavContent';
// Products
import ProductList from './Components/Routes/Products/ProductList';
import AddProduct from './Components/Routes/Products/AddProduct';
import DeleteProduct from './Components/Routes/Products/DeleteProduct';
import ProductDetail from './Components/Routes/Products/ProductDetail';
// Orders
import NewOrder from './Components/Routes/Orders/NewOrder';
import OrderHistory from './Components/Routes/Orders/OrderHistory';
// Inventory
import AddInventory from './Components/Routes/Inventory/AddInventory';
import InventoryDetail from './Components/Routes/Inventory/InventoryDetail';
// Users
import UsersList from './Components/Routes/Users/UsersList';
import UserProfile from './Components/Routes/Users/UserProfile';
// Auth
import useAuth from './Hooks/authHook';

function App() {
  const { authorize, admin } = useAuth();
  return (
    <>

      {authorize ?

        <Routes>
          {admin ?
            <>
              {/* Invalid Routes Handling */}
              <Route path="/" element={<Navigate to={'/dashboard'} />} />
              <Route path="/product" element={<Navigate to={'/productList'} />} />
              <Route path="/order" element={<Navigate to={'/newOrder'} />} />
              <Route path="/inventory" element={<Navigate to={'/addInventory'} />} />
              <Route path="/user" element={<Navigate to={'/usersLists'} />} />
              <Route path="/signup" element={<Navigate to={'/dashboard'} />} />
              <Route path="/signin" element={<Navigate to={'/dashboard'} />} />

              <Route path="/" element={<Navbar />}>
                {/* Main Route */}
                <Route path="dashboard" element={<SideNavContent />} />
                {/* Products Routes */}
                <Route path="/productList" element={<ProductList />} />
                <Route path="/addProduct" element={<AddProduct />} />
                <Route path="/deleteProduct" element={<DeleteProduct />} />
                <Route path="/productDetail" element={<ProductDetail />} />
                {/* Orders Routes */}
                <Route path="/newOrder" element={<NewOrder />} />
                <Route path="/orderHistory" element={<OrderHistory />} />
                {/* Inventory Routes */}
                <Route path="/addInventory" element={<AddInventory />} />
                <Route path="/inventoryDetail" element={<InventoryDetail />} />
                {/* Users Routes */}
                <Route path="/usersLists" element={<UsersList />} />
                <Route path="/userProfile" element={<UserProfile />} />

              </Route>
              {/* Universal Route */}
              <Route path='*' element={<UniversalRoute />} />
            </>
            :
            <>
              {/* Invalid Routes Handling */}
              <Route path="/" element={<Navigate to={'/productList'} />} />
              <Route path="/dashboard" element={<Navigate to={'/productList'} />} />
              {/* <Route path="/product" element={<Navigate to={'/productList'} />} /> */}
              <Route path="/signup" element={<Navigate to={'/addProduct'} />} />
              <Route path="/signin" element={<Navigate to={'/productList'} />} />

              <Route path="/" element={<Navbar />}>
                {/* Products Routes */}
                <Route path="/productList" element={<ProductList />} />
                <Route path="/addProduct" element={<AddProduct />} />
                <Route path="/deleteProduct" element={<DeleteProduct />} />
                <Route path="/productDetail" element={<ProductDetail />} />
                {/* Orders Routes */}
                <Route path="/newOrder" element={<NewOrder />} />
                <Route path="/orderHistory" element={<OrderHistory />} />
                {/* Inventory Routes */}
                <Route path="/addInventory" element={<AddInventory />} />
                <Route path="/inventoryDetail" element={<InventoryDetail />} />

              </Route>
              {/* Universal Route */}
              <Route path='*' element={<UniversalRoute />} />
            </>
          }

        </Routes>
        :
        <Routes>

          {/* Invalid Routes Handling */}
          <Route path="/" element={<Navigate to={'/signin'} />} />
          {/* <Route path="/dashboard" element={<Navigate to={'/signin'} />} /> */}

          {/* Authentication Routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          {/* Universal Route */}
          <Route path='*' element={<UniversalRoute />} />

        </Routes>

      }


    </>
  );
}

export default App;

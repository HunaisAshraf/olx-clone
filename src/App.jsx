import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AuthProvider } from "./context/AuthContext";
import Sell from "./pages/Sell";
import AddProduct from "./pages/AddProduct";
import { ProductProvider } from "./context/ProductContext";
import Home from "./pages/Home.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="product-details/:id" element={<ProductDetails />} />
      </Route>
      <Route path="/sell" element={<Sell />} />
      <Route path="/add-product" element={<AddProduct />} />
    </>
  )
);

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;

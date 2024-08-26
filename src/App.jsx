import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/layout.jsx';
import Products from './components/products/products.jsx';
import Register from './components/register/register.jsx';
import Login from './components/login/login.jsx';
import Brands from './components/brands/brands.jsx';
import Category from './components/category/category.jsx';
import NotFound from './components/notFound/notFound.jsx';
import Cart from './components/cart/cart.jsx';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './context/authContext.jsx';
import ProtectedRoute from './components/protectedRoute/protectedRoute.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductDetails from './components/productDetails/productDetails.jsx';
import AddToCartProvider from './context/addTocartContext.jsx';
function App() {
  let router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <ProtectedRoute><Products/></ProtectedRoute> },
        { path: '/products', element: <ProtectedRoute><Products/></ProtectedRoute> },
        { path: '/productDEtails/:id', element: <ProtectedRoute><ProductDetails/></ProtectedRoute> },
        { path: '/register', element:<Register/>},
        { path: '/category', element: <ProtectedRoute><Category /></ProtectedRoute> },
        { path: '/brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
        { path: '/login', element: <Login />},
        { path: '/cart', element: <ProtectedRoute><Cart /> </ProtectedRoute>},
        { path: '*', element: <NotFound/> },
      ],
    },
  ]);
  let queryclient=new QueryClient()

  return (
    <QueryClientProvider client={queryclient}>
    <AuthProvider>
      <AddToCartProvider>
      <Toaster></Toaster>
      <RouterProvider router={router} />
      </AddToCartProvider>
    </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;

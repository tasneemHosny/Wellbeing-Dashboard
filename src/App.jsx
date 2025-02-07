import './App.css';
import { createBrowserRouter, RouterProvider , Navigate} from 'react-router-dom';
import Layout from './components/layout/layout.jsx';
import MainPage from './components/MainPage/MainPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Navigate to="/الرئيسية" replace /> }, 
      { path: '/الرئيسية', element: <MainPage /> },
      { path: '/المتخصصين', element: <MainPage /> },
      { path: '/المستفيدين', element: <MainPage /> },
      { path: '/المواعيد', element: <MainPage /> },
      { path: '/الجلسات', element: <MainPage /> },
      { path: '/الاعلانات', element: <MainPage /> },
      { path: '/الدفع', element: <MainPage /> },
      { path: '/الإعدادات', element: <MainPage /> },
    ],
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;

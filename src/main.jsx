import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from './App.jsx'
import './index.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
createRoot(document.getElementById('root')).render(
    <App />
)

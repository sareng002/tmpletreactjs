// import ReactDOM from "react-dom/client";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Blenk from "./pages/blenk";
import Dasboard from "./pages/dasboard";
import DataPenduduk from "./pages/dasboard/datapenduduk";
import DataKK from "./pages/dasboard/datapenduduk/datakk";
import List from "./pages/dasboard/posts";
import Home from './pages/home';
import About from "./pages/home/about";
import Profail from "./pages/home/profail";
function App() {
        return (
            <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/profail" element={<Profail />}/>
            <Route path="/dasboard" element={<Dasboard />}/>
            <Route path="/datapenduduk" element={<DataPenduduk />}/>
            <Route path="/datakk" element={<DataKK />}/>
            <Route path="/posts" element={<List />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<Blenk />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;

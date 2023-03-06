import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login";
import { Products } from "../pages/products";

export const RoutesProvider = () => {
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/produtos" element={<Products/>}/>
        </Routes>
    );
}

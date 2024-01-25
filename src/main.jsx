import React from "react";
import ReactDOM from "react-dom";
import {App} from './App.jsx'

// Rotas
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home.jsx";
import { Produtos } from "./routes/Produtos.jsx";
import { Erro } from "./routes/Erro.jsx";
import { Sobre } from "./routes/Sobre.jsx";
import { Login } from "./routes/Login.jsx";

//Objeto de rotas
const routes = (
  <Routes>
    <Route path="/" element={<App />} errorElement={<Erro/>}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/sobre" element={<Sobre/>}/>
      <Route path="*" element={<Erro/>}/>
    </Route>
  </Routes>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>{routes}</Router>
  </React.StrictMode>
);

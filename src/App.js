import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import "./App.css";
import User from "./Components/User";
import Treino from "./Components/Treino";
import { GlobalStorage } from "./Hooks/GlobalContext";
import Tabela from "./Components/Tabela";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="user/:name/" element={<User />} />
          <Route path="user/:name/:treino/" element={<Treino />} />
          <Route path="user/:name/:treino/tabela" element={<Tabela />} />
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
};

export default App;

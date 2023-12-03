import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ForApp } from "./ForApp";
import { Login } from "./components/Login/Login";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/header";
import { MainContent } from "./components/MainContent/MainContent";
import { getDeleprices } from "../src/utils/index";
import { useEffect } from "react";

function App() {
  login();
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <ForApp />
          }
        ></Route>
        <Route
          path='/signin'
          element={
          <Login />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;

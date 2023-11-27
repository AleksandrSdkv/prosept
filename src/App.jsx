import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ForApp } from "./ForApp";
import { Login } from "./components/Login/Login";

function App() {
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

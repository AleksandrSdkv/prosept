import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ForApp } from "./ForApp";
import { Dillers } from "./components/Dillers/Dillers";
import { Login } from "./components/Login/Login";
import { PrivateRoute } from "./utils/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dillers />
          </PrivateRoute>
        }
      />
      <Route
        path="/item"
        element={
          <PrivateRoute>
            <ForApp />
          </PrivateRoute>
        }
      />
      <Route path="/signin" element={<Login />} />
    </Routes>
  );
}

export default App;

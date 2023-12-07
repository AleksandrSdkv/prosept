import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ForApp } from "./ForApp";
import { Dillers } from "./components/Dillers/Dillers";
import { Login } from "./components/Login/Login";
import { PrivateRoute } from "./utils/PrivateRoute";
import { Suspense } from "react";
function App() {
  function Loading() {
    return <h2>🌀 Loading...</h2>;
   
  }
  return (
    <Suspense fallback={<Loading />}>
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
          path="/item/:id"
          element={
            <PrivateRoute>
              <ForApp />
            </PrivateRoute>
          }
        />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </Suspense>
  );
}

export default App;

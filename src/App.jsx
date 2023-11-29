import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/header";
import { MainContent } from "./components/MainContent/MainContent";
import { getDeleprices } from "../src/utils/index";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    getDeleprices().then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;

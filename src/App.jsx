import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/header";
import { MainContent } from "./components/MainContent/MainContent";
import { getApi } from "./utils";
function App() {
  getApi();

  // let response = fetch("http://45.87.246.151:8000/api/auth/jwt/login", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     username: "super@gmail.com",
  //     password: "Super_Customer",
  //   }),
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded",
  //   },
  // }).catch((err) => {
  //   console.log(err);
  // });
  // console.log(response);
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;

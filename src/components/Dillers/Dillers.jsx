import "./Dillers.css";
import { Header } from "../../components/Header/header";
import { DillersCardList } from "./DillersCardList/DillersCardList";
import { Sidebar } from "../MainContent/Sidebar/Sidebar";
export function Dillers() {
  return (
    <>
      <Header />
      <DillersCardList />
      <Sidebar />
    </>
  );
}

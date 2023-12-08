import { Dropdown } from "./Dropdown/dropdown";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <header className="header">
      <Link to="/">
        <div className="logo"></div>
      </Link>
      <Dropdown />
    </header>
  );
}

import { Dropdown } from "./Dropdown/dropdown";

export function Header() {
  return (
    <header className="header">
      <div className="logo"></div>
      <Dropdown />
    </header>
  );
}

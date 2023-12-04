export function Dropdown() {
  const localUsername = localStorage.getItem("username");
  return <p className="dropdown">{localUsername}</p>;
}

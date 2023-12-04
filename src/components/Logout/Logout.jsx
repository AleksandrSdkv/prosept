import { useNavigate } from "react-router-dom";
import { TableButton } from "../TableButton/TableButton";
export function Logout() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.clear();
    navigate("/signin", { replace: true });
  };

  return (
    <section onClick={handleSubmit} className="logout">
      <TableButton nameBtn="Выйти" styleBtn={"sidebar__menu-logout"} />
    </section>
  );
}

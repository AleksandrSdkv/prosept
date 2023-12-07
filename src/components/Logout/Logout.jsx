import { useNavigate } from "react-router-dom";
import { TableButton } from "../TableButton/TableButton";
import { logout } from "../../utils/AuthService";
export function Logout() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
 
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.clear();
    logout(token);
    navigate("/signin", { replace: true });
  };

  return (
    <section onClick={handleSubmit} className="logout">
      <TableButton nameBtn="Выйти" styleBtn={"sidebar__menu-logout"} />
    </section>
  );
}

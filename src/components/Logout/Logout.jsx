import { useNavigate } from "react-router-dom";
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
      <button
        onClick={handleSubmit}
        className="button-table sidebar__menu-logout"
      >
        Выйти
      </button>
    </section>
  );
}

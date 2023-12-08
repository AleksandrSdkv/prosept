import { useNavigate } from "react-router-dom";
export function TableButton({ nameBtn, styleBtn, onClick, productArray }) {
  let randomIndex = Math.floor(Math.random() * productArray.length);
  let randomObject = productArray[randomIndex].id;
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        if (nameBtn === "Нет") {
          onClick();
        }
        if (nameBtn === "Да") {
          navigate(`/item/${randomObject}`);
          location.reload();
        }
        if (nameBtn === "Отложить") {
          navigate(`/item/${randomObject}`);
          location.reload();
        }
      }}
      className={`button-table ${styleBtn}`}
    >
      {nameBtn}
    </button>
  );
}

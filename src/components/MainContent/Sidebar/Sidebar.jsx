import { useState } from "react";

import { Logout } from "../../Logout/Logout";

export function Sidebar() {
  const [isStateSideBar, setIsStateSideBar] = useState(false);
  const [isStateSideBtn, setIsStateSideBtn] = useState(false);

  const handleClickOpenSideBar = () => {
    setIsStateSideBar(!isStateSideBar);
    setIsStateSideBtn(!isStateSideBtn);
  };

  return (
    <div className={`sidebar ${isStateSideBar ? "active" : "close"}`}>
      {isStateSideBar && (
        <div className="sidebar__group">
          <div className="sidebar__dashboard">Аналитика работы</div>
          <div className="sidebar__db">Загрузить базу</div>
        </div>
      )}
      {isStateSideBar && <Logout />}
      <div
        className={`sidebar__menu ${
          isStateSideBtn ? "sidebar__menu_active" : ""
        }`}
        onClick={handleClickOpenSideBar}
      ></div>
    </div>
  );
}

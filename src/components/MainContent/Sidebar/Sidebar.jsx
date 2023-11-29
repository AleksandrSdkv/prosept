import { useState } from "react";

export function Sidebar() {
  const [isStateSideBar, setIsStateSideBar] = useState(false);
  const [isStateSideBtn, setIsStateSideBtn] = useState(false);

  const handleClickOpenSideBar = () => {
    setIsStateSideBar(!isStateSideBar);
    setIsStateSideBtn(!isStateSideBtn);
  };

  return (
    <div className={`sidebar ${isStateSideBar ? "active" : "close"}`}>
      <div
        className={`sidebar__menu ${
          isStateSideBtn ? "sidebar__menu_active" : ""
        }`}
        onClick={handleClickOpenSideBar}
      ></div>
    </div>
  );
}

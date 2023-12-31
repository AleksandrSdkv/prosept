import { useState } from "react";

export function Card(props) {
  const [isChange, setIsChange] = useState(false);
  function handleCLick() {
    setIsChange(!isChange);
  }

  
  return (
    <div className={props.name} onClick={handleCLick}>
      <p className="manufacture__table-item-name">{props.product.name_1c}</p>
      <div className="manufacture__table-group">
        <h3 className="manufacture__table-item-price">
          {props.randomNumbers + "p"}
        </h3>
        <div className={isChange ? "manufacture__table-item-icon" : ""}></div>
      </div>
    </div>
  );
}

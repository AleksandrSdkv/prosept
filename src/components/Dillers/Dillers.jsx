import "./Dillers.css"
import logo from "../../images/logo.svg"
import { DillersCardList } from "./DillersCardList/DillersCardList"

export function Dillers() {
    return(
        <>
            <div className="dillers__header">
                <img
                    className="dillers__logo"
                    src={logo}
                    alt="логотип"
                />
            </div>
            <DillersCardList  />          
        </>
    )
}
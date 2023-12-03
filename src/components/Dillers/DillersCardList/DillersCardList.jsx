// import { DillersCard } from "../DillersCard/DillersCard";
// import { useState} from "react";
import { DillersCardListHeader } from "../DillersCardListHeader/DillersCardListHeader";
import { DillersCardTable } from "../DillersCardTable/DillersCardTable";

export function DillersCardList() { 
    // const [isLoading, setIsLoading] = useState(false);
    // const [filter, setFilter] = useState({});    
    return (
        <>
        <DillersCardListHeader />
        {/* <DillersCard /> */}
        <DillersCardTable
        //   onChange= {(e) =>
        //   setFilter(e.target.value)} 
        />
        </>
    )
}
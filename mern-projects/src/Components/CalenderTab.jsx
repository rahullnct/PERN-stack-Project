import { useMemo } from "react";

function CalendarTab(){
let num=1212;
    const square=useMemo(()=>{
        console.log("calculating:");
        return num* num;
    })
    return(
        <div>
            {square}
        </div>
    )
};
export default CalendarTab;
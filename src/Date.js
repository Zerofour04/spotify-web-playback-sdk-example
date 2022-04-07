import React, {useEffect} from "react";
import { useState } from "react";

function DateLine(){
    const [date, setDate] = useState(new Date());

    function refresh(){
        setDate(new Date());
    }

    useEffect(() =>{
        const timeID = setInterval(refresh, 1000);
        return function reset() {
            clearInterval(timeID);
        };
        }, []);

    return (
        <span2>
            {date.toLocaleDateString()}
        </span2>

    );
}

export default DateLine;
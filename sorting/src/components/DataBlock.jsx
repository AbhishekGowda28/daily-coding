import React from "react";
import getRandomColor from "../utils";

const DataBlock = ({ data }) => {
    return (
        <div className="data-block">
            {data.map((value, index) => {
                return (<div key={index} className="value-block" style={{ backgroundColor: getRandomColor(value) }}>{value}</div>)
            })}
        </div>
    )
}
export default DataBlock;
import React from "react";
import Button from "./Common/Button";
import { yieldInsertionSort } from "../utils/insertionSort";
import { yeildSelectionSort } from "../utils/selectionSort";

const SortinTypes = props => {
    return (
        <div className="Sorting-Types">
            <Button
                disabled={props.disabled}
                onClick={() => { props.sortData(yieldInsertionSort(props.data)) }}
                label="Insertion Sort"
            />
            <Button
                disabled={props.disabled}
                onClick={() => { props.sortData(yeildSelectionSort(props.data)) }}
                label="Selection Sort"
            />
        </div>
    )
}

export default SortinTypes;
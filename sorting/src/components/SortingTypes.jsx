import React from "react";
import { yeildSelectionSort, yieldBubbleSort, yieldInsertionSort } from "../utils/sortingAlgorithms";
import Button from "./Common/Button";

const SortinTypes = props => {
    return (
        <div className="Sorting-Types">
            <Button
                disabled={props.disabled}
                onClick={() => { props.sortData(yieldBubbleSort(props.data)) }}
                label="Bubble Sort"
            />
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
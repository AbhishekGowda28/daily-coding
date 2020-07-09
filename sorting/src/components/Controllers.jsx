/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import generateRandomNumbers from '../utils/generateRandomNumbers';
import { yieldInsertionSort } from '../utils/insertionSort';
import { yeildSelectionSort } from "../utils/selectionSort";

function Controllers(props) {
    const [disableController, setDisableController] = React.useState(false);
    const [isSorted, setIsSorted] = React.useState(false);
    const ARRAY_SIZE = 150;
    const CONTROL_RATE = 15;

    const randomizeNumber = () => {
        props.updateTime(0);
        setIsSorted(false);
        const dataValue = generateRandomNumbers(ARRAY_SIZE)
        props.updateData(dataValue);
    }

    /**
     * 
     * @param {Generator<number, number[], number[]>} sortMethod 
     */
    const sortData = (sortMethod) => {
        setDisableController(true);
        const startTime = (new Date()).getTime();
        props.updateTime("--");
        const interval = setInterval(() => {
            let other = sortMethod.next();
            if (other.value !== undefined) {
                props.updateData([...other.value]);
            } else {
                clearInterval(interval);
                const endTime = (new Date()).getTime();
                const totalTime = (endTime - startTime) / 1000
                setDisableController(false);
                setIsSorted(true);
                props.updateTime(totalTime);
            }
        }, CONTROL_RATE);
    }

    React.useEffect(() => {
        randomizeNumber();
    }, []);

    return (
        <div className="controllers">
            <div>
                <button disabled={disableController} onClick={randomizeNumber}>Randomize</button>
            </div>
            <div className="Sorting-Types">
                <button
                    disabled={disableController || isSorted}
                    onClick={() => { sortData(yieldInsertionSort(props.data)) }}>Insertion Sort</button>
                <button
                    disabled={disableController || isSorted}
                    onClick={() => { sortData(yeildSelectionSort(props.data)) }}>Selection Sort</button>
            </div>
        </div>
    )
}

export default Controllers;
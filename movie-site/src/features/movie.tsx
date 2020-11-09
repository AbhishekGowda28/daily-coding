import React from "react";
import store from "../app/store";
export const Movie = () => {
    return (
        <div onClick={store.dispatch}>Moives</div>
    );
}
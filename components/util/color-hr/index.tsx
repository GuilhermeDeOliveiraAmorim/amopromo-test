import React from "react";
import ColorHrStyles from './ColorHr.module.scss';

function ColorHr() {

    return (
        <div className={ColorHrStyles.ColorHr}>
            <span style={{ height: "4px", backgroundColor: "#64BA00" }}></span>
            <span style={{ height: "4px", backgroundColor: "#68629C" }}></span>
            <span style={{ height: "4px", backgroundColor: "#FFD012" }}></span>
            <span style={{ height: "4px", backgroundColor: "#007E47" }}></span>
        </div>
    )
}

export { ColorHr };
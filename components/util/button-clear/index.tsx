import React from "react";
import IButton from "../../../interfaces/IButton";
import ButtonClearStyles from './ButtonClear.module.scss';

function ButtonClear(props: IButton) {
    const { title, color, bgColor, fontSize } = props;
    return (
        <button className={ButtonClearStyles.ButtonClear} style={{ color: color, backgroundColor: bgColor, fontSize: fontSize }}>
            {title}
        </button>
    )
}

export { ButtonClear };
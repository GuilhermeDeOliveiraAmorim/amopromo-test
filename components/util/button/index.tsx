import React from "react";
import IButton from "../../../interfaces/IButton";
import ButtonStyles from './Button.module.scss';

function Button(props: IButton) {
    const { title } = props;
    return (
        <button className={ButtonStyles.Button}>
            {title}
        </button>
    )
}

export { Button };
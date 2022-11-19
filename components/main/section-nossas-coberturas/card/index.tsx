import React from "react";
import { ButtonClear } from "../../../util/button-clear";
import CardStyles from './Card.module.scss';

interface ICard {
    image: string;
    title: string;
    content: string;
}

function Card(props: ICard) {
    const { image, title, content } = props;
    return (
        <div className={CardStyles.Card}>
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <p>{content}</p>
            <ButtonClear title="Saiba Mais" color="#33794A" bgColor="#60C742" fontSize="12px" />
        </div>
    )
}

export { Card };
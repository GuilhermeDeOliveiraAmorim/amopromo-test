import React from "react";
import { ButtonClear } from "../../util/button-clear";
import { Card } from "./card";
import NossasCoberturasStyles from './NossasCoberturas.module.scss';

const arrCards = [
    {
        id: 1,
        image: "/icons/angel.svg",
        title: "Morte",
        content: "Se você vier a faltar por causa de um acidente ou doença, a pessoa que você escolheu como beneficiário receberá o valor contratado.",
    },
    {
        id: 2,
        image: "/icons/angel.svg",
        title: "Morte",
        content: "Se você vier a faltar por causa de um acidente ou doença, a pessoa que você escolheu como beneficiário receberá o valor contratado.",
    },
    {
        id: 3,
        image: "/icons/angel.svg",
        title: "Morte",
        content: "Se você vier a faltar por causa de um acidente ou doença, a pessoa que você escolheu como beneficiário receberá o valor contratado.",
    },
]

function SectionNossasCoberturas() {
    return (
        <div className={NossasCoberturasStyles.NossasCoberturas}>
            <div className={NossasCoberturasStyles.Titles}>
                <h1>
                    Nossas coberturas
                </h1>
                <h2>
                    Veja mais detalhes de cada proteção!
                </h2>
            </div>
            <div className={NossasCoberturasStyles.Cards}>
                {arrCards.map(card =>
                    <Card key={card.id} title={card.title} image={card.image} content={card.content} />
                )}
            </div>
            <div className={NossasCoberturasStyles.Footer}>
                <ButtonClear title="Faça sua cotação" />
            </div>
        </div>
    )
}

export { SectionNossasCoberturas };
import React from "react";
import { ButtonClear } from "../../util/button-clear";
import NossasCoberturasStyles from './NossasCoberturas.module.scss';

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
                <div className={NossasCoberturasStyles.Card}>
                    <img src="/icons/angel.svg" alt="" />
                    <h1>Morte</h1>
                    <p>Se você vier a faltar por causa de um acidente ou doença, a pessoa que você escolheu como beneficiário receberá o valor contratado.</p>
                    <ButtonClear title="Saiba Mais" color="#33794A" bgColor="#60C742" fontSize="12px" />
                </div>
                <div className={NossasCoberturasStyles.Card}>
                    <img src="/icons/angel.svg" alt="" />
                    <h1>Morte</h1>
                    <p>Se você vier a faltar por causa de um acidente ou doença, a pessoa que você escolheu como beneficiário receberá o valor contratado.</p>
                    <ButtonClear title="Saiba Mais" color="#33794A" bgColor="#60C742" fontSize="12px" />
                </div>
                <div className={NossasCoberturasStyles.Card}>
                    <img src="/icons/angel.svg" alt="" />
                    <h1>Morte</h1>
                    <p>Se você vier a faltar por causa de um acidente ou doença, a pessoa que você escolheu como beneficiário receberá o valor contratado.</p>
                    <ButtonClear title="Saiba Mais" color="#33794A" bgColor="#60C742" fontSize="12px" />
                </div>
            </div>
            <div className={NossasCoberturasStyles.Footer}>
                <ButtonClear title="Faça sua cotação" />
            </div>
        </div>
    )
}

export { SectionNossasCoberturas };
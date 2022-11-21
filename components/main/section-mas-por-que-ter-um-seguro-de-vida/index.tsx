import React from "react";
import IAccordionData from "../../../interfaces/IAccordionData";
import { Accordion } from "../../util/accordion";
import { ButtonClear } from "../../util/button-clear";
import PorQueSeguroStyles from './PorQueSeguro.module.scss';

function SectionPorQueSeguro(props: IAccordionData) {
    const { data } = props;
    return (
        <div className={PorQueSeguroStyles.PorQueSeguro}>
            <h1>
                Mas por que ter um seguro de vida?
            </h1>
            <div className={PorQueSeguroStyles.Content}>
                <div className={PorQueSeguroStyles.AccordionsList}>
                    <Accordion data={data} />
                </div>
                <div className={PorQueSeguroStyles.Image}>
                    <img src="02.png" />
                    <ButtonClear title="Faça sua cotação" />
                </div>
            </div>
        </div>
    )
}

export { SectionPorQueSeguro };
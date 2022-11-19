import React from "react";
import IAccordionData from "../../../interfaces/IAccordionData";
import PorQueSeguroStyles from './PorQueSeguro.module.scss';

function SectionPorQueSeguro(props: IAccordionData) {
    const { data } = props;
    return (
        <div className={PorQueSeguroStyles.PorQueSeguro}>

        </div>
    )
}

export { SectionPorQueSeguro };
import React from "react";
import { ButtonClear } from "../../util/button-clear";
import QualSeguroContratarStyles from './QualSeguroContratar.module.scss';

function SectionQualSeguroContratar() {

    return (
        <div className={QualSeguroContratarStyles.QualSeguroContratar}>
            <div className={QualSeguroContratarStyles.Title}>
                <h1>
                    Ainda não sabe qual seguro contratar?
                </h1>
            </div>
            <div className={QualSeguroContratarStyles.Content}>
                <h1>
                    Ligue pra gente e receba uma consultoria personalizada gratuitamente!
                </h1>
                <div className={QualSeguroContratarStyles.Phone}>
                    <img src="/icons/phone.svg" />
                    <span>
                        (99) 99999.9999
                    </span>
                </div>
                <ButtonClear title="Se preferir, entre em contato pelo Whatsapp" fontSize="12px" />
                <h2>
                    Atendemos pelo telefone de seg. a sex., das 9h às 17h
                </h2>
            </div>
        </div>
    )
}

export { SectionQualSeguroContratar };
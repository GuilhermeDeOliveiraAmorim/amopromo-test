import React from "react";
import IAccordion from "../../../interfaces/IAccordion";
import AccordionItemsStyles from './AccordionItems.module.scss';

function Accordion(props: IAccordion) {
    const { title, text } = props;
    return (
        <div className={AccordionItemsStyles.AccordionItem}>
            <div className={AccordionItemsStyles.Title}>
                <h1>
                    {title}
                </h1>
                <img src="/icons/arrow-down.svg" alt="" />
            </div>
            <p>
                {text}
            </p>
            <hr />
        </div>
    )
}

export { Accordion };
import React, { useState } from "react";
import IAccordionData from "../../../interfaces/IAccordionData";
import { AccordionItem } from "./accordion-item";
import AccordionItemsStyles from './AccordionItems.module.scss';

function Accordion(props: IAccordionData) {
    const { data } = props;

    const [currentIdx, setCurrentIdx] = useState(-1);
    const btnOnClick = (idx: number) => {
        setCurrentIdx(idx);
    };

    return (
        <div className={AccordionItemsStyles.AccordionsList}>
            {data.map((item, idx) =>
                <AccordionItem
                    {...item}
                    isOpen={idx === currentIdx}
                    btnOnClick={() => btnOnClick(idx)}
                />
            )}
        </div>
    )
}

export { Accordion };


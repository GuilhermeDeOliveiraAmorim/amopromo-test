import React, { useEffect, useRef, useState } from "react";
import IAccordion from "../../../../interfaces/IAccordion";
import AccordionItemStyles from './AccordionItem.module.scss';

function AccordionItem(props: IAccordion) {
    const { title, text, btnOnClick, isOpen } = props;

    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (isOpen) {
            const contentEl = contentRef.current as HTMLDivElement;

            setHeight(contentEl?.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    return (
        <div className={`${AccordionItemStyles.AccordionItem} ${isOpen ? 'active' : ''}`}>
            <div className={AccordionItemStyles.Title}>
                <span className={AccordionItemStyles.TitleH1} onClick={btnOnClick}>
                    {title}
                </span>
                <img src="/icons/arrow-down.svg" alt="" />
            </div>
            <p style={{ height }}>
                {isOpen && <div className="accordion-item-content">{text}</div>}
            </p>
            <hr />
        </div>
    )
}

export { AccordionItem };
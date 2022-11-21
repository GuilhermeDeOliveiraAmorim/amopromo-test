import IAccordion from "../../../../interfaces/IAccordion";
import AccordionItemStyles from './AccordionItem.module.scss';
import React, { useEffect, useRef, useState } from "react";

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
        <div key={title} className={`${AccordionItemStyles.AccordionItem} ${isOpen ? 'active' : ''}`}>
            <div className={AccordionItemStyles.Title}>
                <span className={AccordionItemStyles.TitleH1}>
                    {title}
                </span>
                <img src={isOpen ? "/icons/arrow-up.svg" : "/icons/arrow-down.svg"} className={AccordionItemStyles.TitleImg} onClick={btnOnClick} />
            </div>
            <div style={{ height }}>
                {isOpen && <p>{text}</p>}
            </div>
            <hr />
        </div>
    )
}

export { AccordionItem };
import React from "react";
import ContactStyles from './Contact.module.scss';

interface IContact {
    title: string;
    phoneNumber: string;
    whatsapp: string;
}

function Contact(props: IContact) {

    const { title, phoneNumber, whatsapp } = props;

    return (
        <div className={ContactStyles.Contact}>
            <span className={ContactStyles.title}>
                {title}
            </span>
            <div className={ContactStyles.phone}>
                <img className={ContactStyles.phone.img} src="/icons/phone-contact.svg" alt="" />
                <span>
                    {phoneNumber}
                </span>
            </div>
            <div className={ContactStyles.phone}>
                <img className={ContactStyles.phone.img} src="/icons/whatsapp-contact.svg" alt="" />
                <span>
                    {whatsapp}
                </span>
            </div>
        </div>
    )
}

export { Contact };
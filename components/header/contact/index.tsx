import React from "react";
import IContact from "../../../interfaces/IContact";
import ContactStyles from './Contact.module.scss';

function Contact(props: IContact) {

    const { title, phoneNumber, whatsapp } = props;

    return (
        <div className={ContactStyles.Contact}>
            <span className={ContactStyles.title}>
                {title}
            </span>
            <div className={ContactStyles.contacts}>
                <div className={ContactStyles.phone}>
                    <img className={ContactStyles.phone} src="/icons/phone-contact.svg" alt="" />
                    <span>
                        {phoneNumber}
                    </span>
                </div>
                <div className={ContactStyles.phone}>
                    <img className={ContactStyles.phone} src="/icons/whatsapp-contact.svg" alt="" />
                    <span>
                        {whatsapp}
                    </span>
                </div>
            </div>
        </div>
    )
}

export { Contact };
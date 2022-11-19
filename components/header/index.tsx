import React from "react";
import IHeader from "../../interfaces/IHeader";
import { Contact } from "./contact";
import { Nav } from "./nav";
import { Hero } from "./hero";
import HeaderStyles from './Header.module.scss';

function Header(props: IHeader) {
    const { contact, nav } = props;
    return (
        <div className={HeaderStyles.Header}>
            <Contact {...contact} />
            <Nav {...nav} />
            <Hero />
        </div>
    )
}

export { Header };
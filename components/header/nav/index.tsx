import Link from "next/link";
import React from "react";
import IMenu from "../../../interfaces/IMenu";
import NavStyles from './Nav.module.scss';

function Nav(menu: IMenu) {
    return (
        <div className={NavStyles.Nav}>
            <img src="logo-white.svg" />
            <div className={NavStyles.Menu}>
                <ul>
                    {menu.menu.map(item =>
                        <Link key={item.id} href={item.link} className={NavStyles.Link}>
                            <li key={item.id}>{item.title}</li>
                        </Link>
                    )}
                </ul>
            </div>
            <div className={NavStyles.CustomerArea}>
                <img src="icons/user.svg" alt="" />
                <Link href={"#"} className={NavStyles.Link}>
                    <span>Área do Cliente</span>
                </Link>
                <img src="icons/arrow-right.svg" alt="" />
            </div>
        </div>
    )
}

export { Nav };
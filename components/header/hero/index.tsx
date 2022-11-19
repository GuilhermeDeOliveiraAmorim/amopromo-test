import React from "react";
import { Button } from "../../util/button";
import HeroStyles from './Hero.module.scss';

function Hero() {
    return (
        <div className={HeroStyles.Hero}>
            <h1>
                Tranquilidade para viver mais
            </h1>
            <div className={HeroStyles.hero_bottom}>
                <h2>
                    Viva mais e melhor com os benefícios que um serguro de vida te oferece
                </h2>
                <Button title="Faça sua cotação" />
            </div>
        </div>
    )
}

export { Hero };
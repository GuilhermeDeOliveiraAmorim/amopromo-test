import React from "react";
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
                <button>
                    Faça sua cotação
                </button>
            </div>
        </div>
    )
}

export { Hero };
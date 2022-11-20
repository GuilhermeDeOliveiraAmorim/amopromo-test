import React from "react";
import { ButtonClear } from "../../util/button-clear";
import PlanosPersonalizadosStyles from './PlanosPersonalizados.module.scss';

function SectionPlanosPersonalizados() {

    return (
        <div className={PlanosPersonalizadosStyles.PlanosPersonalizados}>
            <div className={PlanosPersonalizadosStyles.ImgPrincipal}>
                <img src="01.png" alt="" />
            </div>
            <div className={PlanosPersonalizadosStyles.Content}>
                <h1>
                    Planos personalizados e sem burocracia
                </h1>
                <div className={PlanosPersonalizadosStyles.List}>
                    <div className={PlanosPersonalizadosStyles.Itens}>
                        <div className={PlanosPersonalizadosStyles.Item}>
                            <img src="icons/1..svg" alt="" />
                            <span>
                                Informe seus dados
                            </span>
                        </div>
                        <div className={PlanosPersonalizadosStyles.Item}>
                            <img src="icons/2..svg" alt="" />
                            <span>
                                Descubra o plano ideal para o seu perfil
                            </span>
                        </div>
                        <div className={PlanosPersonalizadosStyles.Item}>
                            <img src="icons/3..svg" alt="" />
                            <span>
                                Escolha sua forma de pagamento e contrate 100% online
                            </span>
                        </div>
                    </div>
                </div>
                <div className={PlanosPersonalizadosStyles.Footer}>
                    <span>
                        Pronto! Agora você e sua família têm todos os benefícios de viver com segurança total
                    </span>
                    <ButtonClear title="Faça sua cotação" />
                </div>
            </div>
        </div>
    )
}

export { SectionPlanosPersonalizados };
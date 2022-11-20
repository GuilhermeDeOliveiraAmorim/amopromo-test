import Link from "next/link";
import React from "react";
import FooterStyles from './Footer.module.scss';

const quem_somos = [
    {
        id: 1,
        title: "A empresa",
        link: "#",
    },
    {
        id: 2,
        title: "Atendimento",
        link: "#",
    },
    {
        id: 3,
        title: "Afiliados",
        link: "#",
    },
    {
        id: 4,
        title: "Política de Privacidade",
        link: "#",
    },
    {
        id: 5,
        title: "Termos de Uso",
        link: "#",
    },
    {
        id: 6,
        title: "Trabalhe conosc",
        link: "#",
    },
];

const seguradoras = [
    {
        id: 7,
        title: "Coris",
        link: "#",
    },
    {
        id: 8,
        title: "Assist Card",
        link: "#",
    },
    {
        id: 9,
        title: "ITA Travel",
        link: "#",
    },
    {
        id: 10,
        title: "Universal Assistance",
        link: "#",
    },
    {
        id: 11,
        title: "Intermac",
        link: "#",
    },
    {
        id: 12,
        title: "Affinity",
        link: "#",
    },
    {
        id: 13,
        title: "GTA",
        link: "#",
    },
    {
        id: 14,
        title: "Assist Seguro Viagem",
        link: "#",
    },
    {
        id: 15,
        title: "My Travel Assist",
        link: "#",
    },
    {
        id: 16,
        title: "Vital Card",
        link: "#",
    },
    {
        id: 17,
        title: "Travel Care",
        link: "#",
    },
];

const seguros = [
    {
        id: 18,
        title: "Seguro EUA",
        link: "#",
    },
    {
        id: 19,
        title: "Seguro Europa",
        link: "#",
    },
    {
        id: 20,
        title: "Seguro América do Sul",
        link: "#",
    },
    {
        id: 21,
        title: "Seguro América Central",
        link: "#",
    },
    {
        id: 22,
        title: "Seguro África",
        link: "#",
    },
    {
        id: 23,
        title: "Seguro Ásia",
        link: "#",
    },
    {
        id: 24,
        title: "Seguro Viagem Internacional",
        link: "#",
    },
    {
        id: 25,
        title: "Seguro Viagem Nacional",
        link: "#",
    },
    {
        id: 26,
        title: "Seguro Oceania",
        link: "#",
    },
    {
        id: 27,
        title: "Seguro Viagem Oriente Médio",
        link: "#",
    },
    {
        id: 28,
        title: "Seguro Marítimo",
        link: "#",
    },
    {
        id: 29,
        title: "Seguro de Vida",
        link: "#",
    },
];

const blog = [
    {
        id: 30,
        title: "Dicas de Viagem",
        link: "#",
    },
    {
        id: 31,
        title: "Intercâmbio",
        link: "#",
    },
    {
        id: 32,
        title: "Mais lidos",
        link: "#",
    },
    {
        id: 33,
        title: "Seguro Viagens",
        link: "#",
    }
];

function Footer() {
    return (
        <div>
            <div className={FooterStyles.ColorHr}>
                <span style={{ height: "4px", backgroundColor: "#64BA00" }}></span>
                <span style={{ height: "4px", backgroundColor: "#68629C" }}></span>
                <span style={{ height: "4px", backgroundColor: "#FFD012" }}></span>
                <span style={{ height: "4px", backgroundColor: "#007E47" }}></span>
            </div>
            <div className={FooterStyles.Footer}>
                <div className={FooterStyles.Social}>
                    <img src="logo-color.svg" />
                    <div className={FooterStyles.SocialItems}>
                        <span>
                            ACOMPANHE A GENTE:
                        </span>
                        <img src="/icons/social/facebook.svg" />
                        <img src="/icons/social/twitter.svg" />
                        <img src="/icons/social/instagram.svg" />
                    </div>
                </div>
                <hr className={FooterStyles.Hr} />
                <div className={FooterStyles.FooterMenu}>
                    <div className={FooterStyles.Links}>
                        <h1>
                            QUEM SOMOS
                        </h1>
                        <ul>
                            {quem_somos.map(qs =>
                                <Link key={qs.id} href={qs.link} className={FooterStyles.Link} >
                                    <li key={qs.id}>{qs.title}</li>
                                </Link>
                            )}
                        </ul>
                    </div>
                    <div className={FooterStyles.Links}>
                        <h1>
                            SEGURADORAS
                        </h1>
                        <ul>
                            {seguradoras.map(qs =>
                                <Link key={qs.id} href={qs.link} className={FooterStyles.Link} >
                                    <li key={qs.id}>{qs.title}</li>
                                </Link>
                            )}
                        </ul>
                    </div>
                    <div className={FooterStyles.Links}>
                        <h1>
                            SEGUROS
                        </h1>
                        <ul>
                            {seguros.map(qs =>
                                <Link key={qs.id} href={qs.link} className={FooterStyles.Link} >
                                    <li key={qs.id}>{qs.title}</li>
                                </Link>
                            )}
                        </ul>
                    </div>
                    <div className={FooterStyles.Links}>
                        <h1>
                            BLOG
                        </h1>
                        <ul>
                            {blog.map(qs =>
                                <Link key={qs.id} href={qs.link} className={FooterStyles.Link} >
                                    <li key={qs.id}>{qs.title}</li>
                                </Link>
                            )}
                        </ul>
                    </div>
                    <div className={FooterStyles.Sales}>
                        <div className={FooterStyles.SalesItem}>
                            <h1>
                                CENTRAL DE VENDAS
                            </h1>
                            <ul>
                                <Link href={"#"} className={FooterStyles.SalesLink} >
                                    <li>
                                        <img src="/icons/footer-phone.svg" />
                                        <span>(31) 4000-1667</span>
                                    </li>
                                </Link>
                                <Link href={"#"} className={FooterStyles.SalesLink} >
                                    <li>
                                        <img src="/icons/footer-whatsapp.svg" />
                                        <span>(31) 2534-2115</span>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                        <div className={FooterStyles.SalesItem}>
                            <h1>
                                ATENDIMENTO
                            </h1>
                            <ul>
                                <Link href={"#"} className={FooterStyles.SalesLink} >
                                    <li className={FooterStyles.SalesLink}>
                                        <img src="/icons/footer-phone.svg" />
                                        <span>(31) 4000-1667</span>
                                    </li>
                                </Link>
                                <Link href={"#"} className={FooterStyles.SalesLink} >
                                    <li className={FooterStyles.SalesLink}>
                                        <img src="/icons/footer-help.svg" />
                                        <span>Central de Ajuda</span>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={FooterStyles.Payments}>
                    <div className={FooterStyles.PaymentsTitle}>
                        <h1>FORMAS DE PAGAMENTO:</h1>
                    </div>
                    <div className={FooterStyles.PaymentsContainer}>
                        <span>
                            Crédito em até 12 vezes
                        </span>
                        <div className={FooterStyles.PaymentsBanks}>
                            <div className={FooterStyles.PaymentsBank}>
                                <img src="/icons/flag/amex.svg" />
                            </div>
                            <div className={FooterStyles.PaymentsBank}>
                                <img src="/icons/flag/diners.svg" />
                            </div>
                            <div className={FooterStyles.PaymentsBank}>
                                <img src="/icons/flag/elo.svg" />
                            </div>
                            <div className={FooterStyles.PaymentsBank}>
                                <img src="/icons/flag/hyper.svg" />
                            </div>
                            <div className={FooterStyles.PaymentsBank}>
                                <img src="/icons/flag/master.svg" />
                            </div>
                            <div className={FooterStyles.PaymentsBank}>
                                <img src="/icons/flag/visa.svg" />
                            </div>
                        </div>
                        <img src="icons/discounts/discount_5.svg" />
                    </div>
                    <div className={FooterStyles.PaymentsContainer}>
                        <span>
                            Boleto bancário
                        </span>
                        <div className={FooterStyles.PaymentsBanks}>
                            <div className={FooterStyles.PaymentsBank}>
                                <img src="/icons/ticket.svg" />
                            </div>
                        </div>
                        <img src="icons/discounts/discount_5.svg" />
                    </div>
                    <div className={FooterStyles.PaymentsContainer}>
                        <span>
                            Transferência bancária
                        </span>
                        <div className={FooterStyles.PaymentsBanks}>
                            <div className={FooterStyles.PaymentsBank}>
                                <img src="icons/banks/bancos-0.svg" />
                            </div>
                            <div className={FooterStyles.PaymentsBank}>
                                <img src="icons/banks/bancos-1.svg" />
                            </div>
                            <div className={FooterStyles.PaymentsBank}>
                                <img src="icons/banks/bancos-2.svg" />
                            </div>
                            <div className={FooterStyles.PaymentsBank}>
                                <img src="icons/banks/bancos-3.svg" />
                            </div>
                            <div className={FooterStyles.PaymentsBank}>
                                <img src="icons/banks/bancos-4.svg" />
                            </div>
                            <div className={FooterStyles.PaymentsBank}>
                                <img src="icons/banks/bancos-5.svg" />
                            </div>
                            <div className={FooterStyles.PaymentsBank}>
                                <img src="icons/banks/bancos-6.svg" />
                            </div>
                        </div>
                        <img src="icons/discounts/discount_5.svg" />
                    </div>
                </div>
                <hr className={FooterStyles.Hr} />
                <div className={FooterStyles.CopyrightSponsors}>
                    <div className={FooterStyles.Copyright}>
                        <span>
                            2XT | CNPJ: 73.690.653/0001-13 | Rua dos Timbiras, nº 1.532, 10º andar - Belo Horizonte - MG
                            © 2022 Seguros Promo | By - Amopromo
                        </span>
                    </div>
                    <div className={FooterStyles.Sponsors}>
                        <img src="/icons/ssl.png" />
                        <img src="/icons/iata.png" />
                        <img src="/icons/abav.png" />
                        <img src="/icons/brasil-turismo.png" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export { Footer };
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { SectionPorQueSeguro } from '../components/main/section-mas-por-que-ter-um-seguro-de-vida';
import { SectionNossasCoberturas } from '../components/main/section-nossas-coberturas';
import { SectionPlanosPersonalizados } from '../components/main/section-planos-personalizados';
import { SectionQualSeguroContratar } from '../components/main/section-qual-seguro-contratar';
import { ColorHr } from '../components/util/color-hr';
import IAccordionData from '../interfaces/IAccordionData';

const contactContent = {
	title: 'CENTRAL DE VENDAS:',
	phoneNumber: '(31) 4000-1667',
	whatsapp: '(31) 2534-2115'
}

const navContent = {
	menu: [
		{ id: 1, title: "Seguro de Vida", link: "#" },
		{ id: 2, title: "Multi-trip", link: "#" },
		{ id: 3, title: "Atendimento", link: "#" },
		{ id: 4, title: "FAQ", link: "#" },
		{ id: 5, title: "Afiliados", link: "#" },
		{ id: 6, title: "Blog", link: "#" },
	]
};

export default function Home(accordionData: IAccordionData) {
	return (
		<div>
			<Header contact={contactContent} nav={navContent} />
			<main>
				<SectionPlanosPersonalizados />
				<SectionNossasCoberturas />
				<SectionPorQueSeguro data={accordionData.data} />
				<SectionQualSeguroContratar />
			</main>
			<ColorHr />
			<Footer />
		</div>
	)
}

export async function getServerSideProps() {
	const res = await fetch(`https://stark-cove-48986.herokuapp.com/seguros/motivos`);
	const data = await res.json();
	return { props: { data } }
}
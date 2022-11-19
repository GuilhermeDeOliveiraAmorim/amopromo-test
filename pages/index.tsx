import Head from 'next/head';
import { Contact } from '../components/header/contact';

interface IAccordionData {
	title: string;
	text: string;
}

export default function Home(accordionData: IAccordionData[]) {
	return (
		<div>
			<header>
				<Contact title='CENTRAL DE VENDAS:' phoneNumber='(31) 4000-1667' whatsapp='(31) 2534-2115' />
			</header>

			<main>
				Main
			</main>

			<footer>
				Footer
			</footer>
		</div>
	)
}

export async function getServerSideProps() {
	const res = await fetch(`https://stark-cove-48986.herokuapp.com/seguros/motivos`);
	const accordionData = await res.json();
	return { props: { accordionData } }
}
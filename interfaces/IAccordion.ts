export default interface IAccordion {
    title: string;
    text: string;
    isOpen: boolean;
    btnOnClick: () => void;
}

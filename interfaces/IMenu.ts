interface IItem {
    id: number;
    title: string;
    link: string;
}

export default interface IMenu {
    menu: IItem[];
}

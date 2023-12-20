import {Document} from "mongoose"

export interface IMenu {
    name: string;
    category: string;
    description: string;
    price: number;
}

export type MenuType = Document & IMenu;
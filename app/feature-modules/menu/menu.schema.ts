import { model } from "mongoose";
import { BaseSchema } from "../../utility/base.schema";
import { MenuType } from "./menu.types";




const menuSchema = new BaseSchema({
    name : {
        type : String
    },
    category : {
        type : String
    },
    description : {
        type : String
    },
    price : {
        type : Number
    }
});

export const menuModel = model<MenuType>("Menu", menuSchema);
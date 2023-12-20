import {Document} from "mongoose"
export interface IUser {
    username: string;
    password : string;
    role : string
}

export type UserType = Document & IUser;
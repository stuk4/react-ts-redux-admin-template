import { Roles } from "../constants/enums/Roles";

export interface IResponseLogin {
    status:      string;
    message:     string;
    accessToken: string;
    expiresIn:   number;
    user:        IUser;
}
export interface ILogin{
    username:string;
    password:string;
    expiresIn:number;
    roles:Roles[];
}
export interface IUser {
    id:       number;
    fname:    string;
    lname:    string;
    username: string;
    email:    string;
    avatar:   string;
    roles:    Roles[];
}

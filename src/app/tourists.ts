import { Tripdetails } from "./tripDetails";
export interface Tourist{
    name:string;
    phone:string;
    email:string;
    password:string;
    details:Tripdetails[];
}
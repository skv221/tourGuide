export interface Guide{
    _id:string;
    name:string;
    phone:string;
    email:string;
    password:string;
    spot:string;
    rating:number;
    price:number;
    gender:string;
    waitingOrders:any[];
    myTrips:any[];
}
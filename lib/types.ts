export type Car = {
    id: number;
    model: string;
    name: string;
    type: string;
    price: number;
    booked: boolean;
    imageSrc: string;

};

export type User = {
    isAdmin:boolean;
    userId:number;
    username:string;
    auth: string;
};
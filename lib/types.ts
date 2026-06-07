export type Car = {
    id: number;
    model: string;
    name: string;
    type: string;
    price: number;
    booked: boolean;
    imageSrc: string;

};

export type Booking ={
    userId: number;
    carId: number
    fromDate: string,
    toDate: string,
}

export type User = {
    isAdmin:boolean;
    userId:number;
    username:string;
    credentials: string;
};
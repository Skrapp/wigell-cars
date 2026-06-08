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
    id: number;
    userId: number;
    carId: number;
    fromDate: string;
    toDate: string;
}

export type NewBooking ={
    userId: number;
    carId: number;
    fromDate: string;
    toDate: string;
}

export type BookingView = {
    id:number;
    carId:number;
    carModel:string;
    carName:string;
    userId:number;
    userFirstName:string;
    userLastName:string;
    fromDate:string;
    toDate:string;
}

export type User = {
    isAdmin:boolean;
    userId:number;
    username:string;
    credentials: string;
};
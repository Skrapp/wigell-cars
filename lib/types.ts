export type Car = {
    id: number;
    model: string;
    name: string;
    type: string;
    price: number;
    booked: boolean;
    imageSrc: string;
    feature1: string;
    feature2: string;
    feature3: string;
};

export type Booking ={
    id: number;
    userId: number;
    carId: number;
    fromDate: string;
    toDate: string;
    active: boolean;
}

export type UpdateBooking = {
    id: number;
    userId: number | null;
    carId: number | null;
    fromDate: string | null;
    toDate: string | null;
}

export type NewBooking ={
    userId: number;
    carId: number;
    fromDate: string;
    toDate: string;
}

export type NewUser = {
    firstName: string;
    lastName: string;
    username: string;
    phone: string;
    email: string;
    password: string;
};
export type NewCar = {
    name: string;
    model: string;
    type: string;
    price: number;
    imageSrc: string;
    feature1?: string;
    feature2?: string;
    feature3?: string;
};
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
    active:boolean;
}

export type UserCookie = {
    isAdmin:boolean;
    userId:number;
    username:string;
    credentials: string;
};

export type User = {
    id:number;
    firstName: string;
    lastName: string;
    username:string; 
    phone:string;
    email:string;
    noOfOrders: number;
    role:string;
}

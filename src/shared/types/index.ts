export interface Service {
    id: string;
    name: string;
    price: number;
}

export interface SelectedService extends Service {
    quantity: number;
}

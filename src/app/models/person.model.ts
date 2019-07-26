export interface Person {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
}

export interface Card {
    id: number;
    card_number: number;
    person_id: number;
    balance: number;
}

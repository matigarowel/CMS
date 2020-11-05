export interface UsersModel{
    id: number;
    name: string;
    email: string;
    password?: string;
    date_created: string;
    date_change: string;
    active: boolean;
    created_by: string;
}
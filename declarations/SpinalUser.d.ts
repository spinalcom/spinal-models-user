export interface UserInterface {
    id?: string;
    name: string;
    type?: string;
    email?: string;
    password?: string;
    [key: string]: any;
}

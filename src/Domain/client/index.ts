import { string } from "yup"

export interface IClient{
    _id?: string,
    name: string,
    lastName: string,
    gender: string,
    birthdayDate: string,
    email: string,
    password: string,
    age?: string,
    idCity: string,
    createAt?: string
}
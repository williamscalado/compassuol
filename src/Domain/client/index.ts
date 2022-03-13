export interface IClient {
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

export interface IClientUseCase {
    createClient(data: IClient): any,
    findByName(nameClient: string): any | Promise<IClient>,
    findById(idClient: string): any | Promise<IClient>,
    updateClient(data: IClient, idClient: string): void,
    deleteClient(idClient: string): void
}

export interface IClientRepository {
    createClient(data: IClient): any,
    findByEmail(email: string): any | Promise<IClient>,
    findByName(nameClient: string) : any | Promise<IClient>,
    findById(idClient: string): any | Promise<IClient>,
    updateClient(data: IClient, idClient: string): void,
    deleteClient(idClient: string): void
}
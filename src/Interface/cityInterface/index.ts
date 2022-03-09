export interface ICity {
    _id?: string,
    name: string,
    stateId: string,
    active?: boolean,
    createAt?: number
}


export interface ICityRepository {
    createCity() : any 
}
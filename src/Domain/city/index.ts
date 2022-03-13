export interface ICity {
    _id?: string,
    name: string,
    stateId: string,
    active?: boolean,
    createAt?: number
}


export interface ICityRepository {
    createCity(data: ICity): Promise<ICity>,
    findByName(name: string, idStade?: string): any | Promise<ICity>,
    findByCityByStates(idState: string): any,
    findByID(idCity: string): any | Promise<ICity> ,
}

export interface ICityUseCase {
    createCity(data: ICity): void,
    findByName(nameCity: string): null | Promise<ICity>,
    findByCityByStates(idStade: string): null | Promise<ICity>
}
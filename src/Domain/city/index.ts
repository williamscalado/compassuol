type IsRequired<T> =
  undefined extends T
  ? false
  : true;

export interface ICity<T>{
    _id?: string,
    name: string,
    stateId: string,
    active?: boolean,
    createAt?: number
}


export interface ICityRepository {
    createCity(data: ICity<null>): Promise<ICity<null>>,
    findByName(name: string, idStade?: string):  Promise<ICity<null>>,
    findByCityByStates(idState: string): any,
    findByID(idCity: string): Promise<ICity<null>> ,
}

export interface ICityUseCase {
    createCity(data: ICity<null>): void,
    findByName(nameCity: string):  Promise<ICity<null>>,
    findByCityByStates(idStade: string):  Promise<ICity<null>>
}
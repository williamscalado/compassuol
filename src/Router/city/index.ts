import { Router } from "express";
import { cityController } from "../../Http/Controller/cityController";


const cityRouters = Router()

cityRouters.get('/city/name/:name', cityController.findByName)
cityRouters.get('/city/state/:id', cityController.findByCityByStates)
cityRouters.post('/city', cityController.createCity)


export { cityRouters }
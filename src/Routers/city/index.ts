import { Router } from "express";
import { cityController } from "../../Controller/cityController";


const cityRouters = Router()

cityRouters.get('/city', () => { })
cityRouters.get('/city/:name', cityController.findByName)
cityRouters.get('/city/state/:id', cityController.findByCityByStates)
cityRouters.post('/city', cityController.createCity)


export { cityRouters }
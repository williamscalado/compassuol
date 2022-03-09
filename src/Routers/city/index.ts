import { Router } from "express";
import { cityController } from "../../Controller/cityController";


const cityRouters = Router()

// Cadastrar cidade
// Consultar cidade pelo nome
// Consultar cidade pelo estado
// remover cidade
cityRouters.get('/city', () => { })
cityRouters.get('/city/:name', cityController.findByName)
cityRouters.get('/city/:id', () => { })
cityRouters.get('/city/state/:id', () => { })
cityRouters.post('/city', cityController.createCity)
cityRouters.delete('/city', () => { })
cityRouters.patch('/city', () => { })


export { cityRouters }
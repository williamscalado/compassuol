import { Router } from "express";
import { testeError } from "../../Controller/teste";


const cityRouters = Router()

// Cadastrar cidade
// Consultar cidade pelo nome
// Consultar cidade pelo estado
// remover cidade
cityRouters.get('/city', testeError)
cityRouters.get('/city/:name', () => { })
cityRouters.get('/city/:id', () => { })
cityRouters.get('/city/state/:id', () => { })
cityRouters.post('/city', () => { })
cityRouters.delete('/city', () => { })
cityRouters.patch('/city', () => { })


export { cityRouters }
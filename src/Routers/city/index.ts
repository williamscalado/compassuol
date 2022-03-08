import { Router } from "express";

const cityRouters = Router()

cityRouters.get('/city', () => { })
cityRouters.get('/city/:name', () => { })
cityRouters.get('/city/:id', () => { })
cityRouters.get('/city/country/:id', () => { })

cityRouters.post('/city', () => { })
cityRouters.delete('/city', () => { })
cityRouters.patch('/city', () => { })


export { cityRouters }
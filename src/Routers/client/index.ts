import { Request, Response, Router } from "express";
import { clientController } from "../../Controller/clientController";

const clientRouters = Router()

clientRouters.get('/client/:id', () => { })
clientRouters.get('/client/:name', () => { })
clientRouters.post('/client', clientController.createClinet)
clientRouters.patch('/client', () => { })
clientRouters.delete('/client/:id', () => { })

export { clientRouters }


import { Request, Response, Router } from "express";
import { clientController } from "../../Controller/clientController";

const clientRouters = Router()

clientRouters.get('/client/:id', clientController.findById)
clientRouters.get('/client/name/:name', clientController.findByName)
clientRouters.post('/client', clientController.createClinet)
clientRouters.patch('/client/:id', () => { })
clientRouters.delete('/client/:id', () => { })

export { clientRouters }


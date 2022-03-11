import { Router } from "express";
import { clientController } from "../../Http/Controller/clientController";

const clientRouters = Router()

clientRouters.get('/client/:id', clientController.findById)
clientRouters.get('/client/name/:name', clientController.findByName)
clientRouters.post('/client', clientController.createClient)
clientRouters.patch('/client/:id', clientController.updateClient)
clientRouters.delete('/client/:id', clientController.deleteClient)

export { clientRouters }


import { Router } from "express";
import { stateController } from "../../Controller/stateController";

const statesRouters = Router();

statesRouters.get('/states', stateController.getAllStates)
statesRouters.get('/states/id/:id', stateController.findByID)
statesRouters.get('/states/sigla/:sigla', stateController.findBySigla)

export { statesRouters }
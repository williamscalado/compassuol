import { Router } from "express";
import { stateController } from "../../Http/Controller/stateController";

const statesRouters = Router();

statesRouters.get('/states', stateController.getAllStates)
statesRouters.get('/states/id/:id', stateController.findByID)
statesRouters.get('/states/stateAcronym/:stateAcronym', stateController.findBySigla)

export { statesRouters }
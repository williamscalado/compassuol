import { Request, Response, Router } from "express";

const customerRouters = Router()

customerRouters.get('/customer/:id', () => { })
customerRouters.get('/customer/:name', () => { })
customerRouters.post('/customer', () => { })
customerRouters.patch('/customer', () => { })
customerRouters.delete('/customer/:id', () => { })

export { customerRouters }


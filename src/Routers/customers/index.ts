import { Router } from "express";

const customerRouters = Router()

// Cadastrar cliente
// Consultar cliente pelo nome
// Consultar cliente pelo Id
// Remover cliente
// Alterar o nome do cliente

customerRouters.get('/customer', ()=>{})
customerRouters.get('/customer/:id', ()=>{})
customerRouters.get('/customer/:name', ()=>{})
customerRouters.post('/customer', ()=>{})
customerRouters.patch('/customer', ()=>{})
customerRouters.delete('/customer/:id', ()=>{})




export { customerRouters }


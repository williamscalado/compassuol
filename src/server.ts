import express , { NextFunction, Request, Response} from 'express'
import dotenv from  'dotenv'
import { cityRouters } from './Routers/city';
import { customerRouters } from './Routers/customers';
import { errorMiddleware } from './Middleware/Error';
import { connectMongoDb } from './Config/mongoDB';

connectMongoDb();

dotenv.config()

const app = express();
app.use(express.json())

app.use(cityRouters)
app.use(customerRouters)


app.use(errorMiddleware)


app.use('/',(req: Request, res: Response)=>{
    res.status(404).json({
        error: true,
        message: "Page not found!"
    })
})



app.listen(process.env.PORT || 3000) 



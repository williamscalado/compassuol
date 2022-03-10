import express , {Request, Response} from 'express'
import dotenv from  'dotenv'
import { cityRouters } from './Router/city';
import { clientRouters } from './Router/client';
import { connectMongoDb } from './Config/database';
import { statesRouters } from './Router/states';
import { errorMiddleware } from './Error';

connectMongoDb();

dotenv.config()

const app = express();
app.use(express.json())

app.use(statesRouters)
app.use(cityRouters)
app.use(clientRouters)



app.use(errorMiddleware)


app.use('/',(req: Request, res: Response)=>{
    res.status(404).json({
        error: true,
        message: "Page not found!"
    })
})



app.listen(process.env.PORT || 3000) 



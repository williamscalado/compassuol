import express , { NextFunction, Request, Response} from 'express'
import dotenv from  'dotenv'
import { cityRouters } from './Routers/city';
dotenv.config()

const app = express();
app.use(express.json())



app.use(cityRouters)

app.use('/',(req: Request, res: Response)=>{
    res.status(404).json({
        error: "Page not found!"
    })
})

app.use((error: Error, req: Request, res: Response, next: NextFunction)=>{

    if(error) throw new  Error(error.message)
    next()

})




app.listen(process.env.PORT || 3000) 



import express , {NextFunction, Request, Response} from 'express'
import dotenv from  'dotenv'
import timeout from 'connect-timeout'
import { cityRouters } from './Router/city';
import { clientRouters } from './Router/client';
import { connectMongoDb } from './Config/database';
import { statesRouters } from './Router/state';

dotenv.config();

connectMongoDb()

const app = express();

app.use(timeout('10s'))
app.use(express.json())
app.use(haltOnTimedout)

app.use(statesRouters)
app.use(cityRouters)
app.use(clientRouters)



app.use((error: Error, req: Request, res:Response, next: NextFunction)=>{
    const errorMessage = {
        error : 'ServerError',
        message: error.message
    }
    res.status(500).json(errorMessage)
    
})

function haltOnTimedout (req: Request, res: Response, next: NextFunction) {
    req.setMaxListeners(10)
    if (!req.timedout) next()
  }


app.use('/',(req: Request, res: Response)=>{
    res.status(404).json({
        error: true,
        message: "Page not found!"
    })
})



app.listen(process.env.PORT || 3000) 



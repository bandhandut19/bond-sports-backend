import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './router'
import bodyParser from 'body-parser'
const app: Application = express()

//parsers
app.use(express.json())
app.use(
  cors({
    // origin: 'https://bond-sports-frontend.vercel.app',
    origin: 'http://localhost:5173',
    credentials: true,
  }),
)
app.use(bodyParser.json())
app.use('/api/bond-sports', router)
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Bond Sports')
})

export default app

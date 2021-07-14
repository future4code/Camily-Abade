import express, { Express } from "express"
import cors from "cors"

export const app: Express = express()

app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
   res.send("Hello from Express! =)")
})

app.listen(2308,()=>{
   console.log("server ready")
})
import express, { Request, Response } from 'express'
import cors from 'cors'
import { send } from 'process'

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: "ADMIN",
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: "NORMAL",
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: "NORMAL",
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: "NORMAL",
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: "ADMIN",
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: "ADMIN",
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

//ex 1
app.get("/users", (req: Request, res: Response) => {
  try{
    console.log(req.query)
    res.send(users)
  }catch(error) {

  }
})

//ex 3
app.get("/users/name", (req: Request, res: Response) => {
  let  codeError: number = 400
  try{
    const name: string = req.query.name as string
    const user: User | undefined = users.find((user) => user.name.toLowerCase() === name.toLowerCase())
    if (!user){ 
      codeError = 404
      throw new Error ('User not found') 
    }
    res.status(200).send(user)
  }catch(error){
    res.status(codeError).send({message: error.message})
  }
})


//ex4
app.post("/users/createNewUser", (req: Request, res: Response) => {
  let errorCode: number = 400
  try{
    const {name, email, id, age, type} = req.body
    if(!id || !name || !email || !age || !type){
      errorCode = 422
      throw new Error('Please check the fields')
    }
    const newUser:  User = {
      id,
      name,
      email,
      type,
      age
    }
    users.push(newUser)
    res.status(200).send({message: 'user create succesefully'})

  }catch(error){
    res.status(errorCode).send({message: error.message})
  }
})
app.listen(2308, () => {
  console.log('Server is running at port 3003')
})

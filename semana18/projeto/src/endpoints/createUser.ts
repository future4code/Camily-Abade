import { Request, Response } from "express"
import { user } from "../types"
import { RecipeDatabase } from "../data/RecipeDatabase"

// export async function createUser(
//    req: Request,
//    res: Response
// ): Promise<void> {
//    try {

//       const title = (req.query.title || "%") as string
//       const sort = req.query.sort === "title" ? "title" : "created_at"
//       const order = req.query.order === "DESC" ? "DESC" : "ASC"
//       const page = Number(req.query.page) || 1
//       const size = Number(req.query.size) || 10

//       //pag1 -> offset 10 * 0
//       //pag2 -> offset 10 * 1
//       //pag3 -> offset 10 * 2
//       //pag4 -> offset 10 * 3

//       const offset:number = size * (page - 1)


//       //tornar esse trecho do código (entre as linhas 27 e 33)
//       //uma parte da classe de receitas

//       // const result = await connection("aula49_recipes")
//       //    .where("title", "LIKE", `%${title}%`)
//       //    .orderBy(sort, order)
//       //    .limit(size)
//       //    .offset(offset)
      
//       const rd = new RecipeDatabase();
//       //const recipes = await new RecipeDatabase().getRecipes(..parametros)
//       const recipes = await rd.getRecipes(title, sort, order, size, offset);

//       res.status(200).send(recipes)

//    } catch (error) {
//       res.status(500).send("Internal server error")
//    }
// }

// export const toRecipe = (input: any): recipe => {
//    return {
//       id: input.id,
//       title: input.title,
//       description: input.description,
//       userId: input.user_id,
//       createdAt: input.created_at
//    }
// }


// export default async function createUser {
//    req: Request,
//    res: Response
// ): Promise<void> {
//    try {

//       const { id, name, email, age } = req.body

//       if (!id || !name || !email || !age ) {
//          res.statusCode = 422
//          throw "'id', 'name', 'email' e 'birthdate' são obrigatórios"
//       }
 
  
//     const newUser: user = { id, name, email, age, }

//       await connection('labenu_system_student').insert(newStudent)

//       res.status(201).send("Novo aluno inserido")

//    } catch (error:any) {

//       if (typeof error === "string") {

//          res.send(error)
//       } else {

//          console.log(error.sqlMessage || error.message);
//          res.status(500).send("Ops! Um erro inesperado ocorreu =/")
//       }

//    }
// }
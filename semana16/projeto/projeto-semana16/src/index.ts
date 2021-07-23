import app from "./app";
import connection from "./connection";
import { Request, Response } from "express";
import { nextTick } from "process";

const getUserById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT * FROM Users WHERE id = ${id}`
   );
  return result[0][0];
};

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
      const id = req.params.id;
      const user = await getUserById(id);
      res.status(200).send(user);
  } catch (err: any) {
      res.status(500).send({
          message: err.message,
      });
  }
});


app.post("/user", async (req: Request, res: Response) => {
  try {
    const {name, nickname, email} = req.body;
    let errorCode: number = 400;
    const newUser = {
      id: Date.now().toString(),
      name,
     nickname,
     email
    };
    if(!name || !nickname || !email){
      errorCode = 422;
      throw new Error("Please check the fields!");
    }

    await connection("Users").insert(newUser)

     res.status(200).send("dados enviados");
  } catch (error:any) {
    res.status(400).send(error.sqlMessage || error.message);
  }
});

app.put("/user/edit/:id", async (req: Request, res: Response) => {
  try {
      await connection("Users")
          .update({
              name: req.body.name,
              nickname: req.body.nickname,
          })
          .where({ id: req.params.id });

      res.status(200).send("dados atualizados");
  } catch (error: any) {
      res.status(400).send(error.sqlMessage || error.message);
  }
});


app.post("/task", async(req:Request, res:Response) => {
  try {
      const splitDate = req.body.limitDate.split("/")
      const correctedDate = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`
      const result = await connection.raw(`
      INSERT INTO Task (id, title, description, limitDate, creatorUserId)
      VALUES(
          " ${req.body.id = Date.now().toString()}",
          "${req.body.title}",
          "${req.body.description}",
          "${correctedDate}",
          "${req.body.creatorUserId}"
      );
          `)
          res.status(200).send("A new task has been created!")
  } catch (err) {
      res.status(400).send({
          message: err.message
  })
}})

// const getTaskById = async (id: string): Promise<any> => {
//   const result = await connection.raw(`
//   SELECT * FROM Task  WHERE id = ${id}`
//    );
//      return result[0][0];
// };

// app.get("/task/:id", async (req: Request, res: Response) => {
//   try {
//       const id = req.params.id;
//       const user = await getTaskById(id);
//       res.status(200).send(user);
    
//   } catch (err: any) {
//       res.status(500).send({
//           message: err.message,
//       });
//   }
// });


app.get("/task/:id", async (req: Request, res: Response) => {
  try {
      const result = await connection.raw(`
      SELECT Task.id, title, description, limitDate, creatorUserId, nickname  
      FROM Task 
      JOIN Users ON creatorUserId = Users.id
      WHERE Task.id = ${req.params.id};
      `)

      res.status(200).send(result[0])

  } catch (err) {
      res.status(400).send({
          message: err.message
      })
  }
})
import app from "./app";
import connection from "./connection";
import { Request, Response } from "express";

// const searchActor = async (name: string): Promise<any> => {
//   const result = await connection.raw(`
//     SELECT * FROM Actor WHERE name = "${name}"
//   `)
//   return result[0]
// }

//   searchActor("Camily Abade")
//     .then(result => {
//         console.log(result)
//     })
//     .catch(err => {
//         console.log(err)
//     });

// // const countActors = async (gender: string): Promise<any> => {
// //   const result = await connection.raw(`
// //     SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
// //   `);

// //   return result[0];
// // };
// //   countActors("female")
// //   .then(result => {
// //     console.log(result)
// //   })
// //   .catch(err => {
// //     console.log(err)
// //   });


// const updateActor = async (id: string, salary:number): Promise<any> => {
//   const result = await connection("Actor").update({
//     salary: salary,
//   }).where("id", id);

// };
//   updateActor("002", 2000)
//   .then(result => {
//     console.log(result)
//     console.log("deu certo!")
//   })
//   .catch(err => {
//     console.log(err)
//     console.log("deu erradooooo")
//   });



// const deleteActor = async (id: string): Promise<void> => {
//   const result = await connection("Actor")
//     .delete()
//     .where("id", id);
// }; 

//   deleteActor("005")
//   .then(result => {
//     console.log(result)
//     console.log("deletado com sucesso")
//   })
//   .catch(err => {
//     console.log(err)
//   });


//   const avgSalary = async (gender: string): Promise<any> => {
//     const result = await connection("Actor")
//       .avg("salary as average")
//       .where({ gender });
  
//     return result[0].average;
//   };
//     avgSalary("male")
//     .then(result => {
//       console.log(result)
//       console.log("média salariaaal")
//     })
//     .catch(err => {
//       console.log(err)
//     });



//////// Requisições /////////

const countActorByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw( `
   SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}' 
   `);
  return result[0][0]
}


app.get('/actor', async (req: Request, res: Response) => {
  try {
    const gender = req.query.gender
    const count = await countActorByGender(gender as string)
    res.status(200).send({ quantity: count, })
  }
  catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
})


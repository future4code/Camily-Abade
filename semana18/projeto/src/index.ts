import { app } from "./app";
import { createUser } from "./endpoints/createUser";
import { RecipeDatabase } from "./data/RecipeDatabase";
import { NotFoundError } from "./error/CustomError";

class User {
    public id: string;
    public name: string;
    private age: number;
    private email: string;

    constructor(
        id: string,
        name: string,
        age: number,
        email: string,
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.name = name;
        this.age = age;
        this.email = email;
    }

    public getAge(): number {
        return this.age
    }

    public getEmail(): string {
        return this.email
    }
}

class Product {
    private name: string;
    private description: string;
    private price: number;

    constructor(
        name: string,
        description: string,
        price: number,
    ) {
        console.log("Chamando o construtor da classe Product")
        this.name = name;
        this.description = description;
        this.price = price;
    }

    public getName(): string {
        return this.name
    }

    public getDescription(): string {
        return this.description
    }

    public getprice(): number {
        return this.price
    }
}


interface ticket_destination {
    leaving: string;
    going: string;
}

class Ticket extends Product implements ticket_destination {
    public leaving: string = ""
    public going: string = ""

    constructor(
        id: string,
        name: string,
        description: string,
        price: number
    ) {
        super(name, description, price)
    }
    public setLeaving(): string {
        return this.leaving;
    }

    public setGoing(): string {
        return this.going;
    }
}

interface quantity_purchase {
    quantity: number;
}




class Purchase extends Product implements quantity_purchase{
   public quantity: number = 1
 
   constructor(
       id: string,
       name: string,
       description: string,
       price: number,
    ) {
      super(name, description, price)
   }
 
   public getTotal(price:number, quantity:number): number {
    const total = price * quantity
    return total
  }

  
 }
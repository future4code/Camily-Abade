// A) Para criar tipo uma memória da class. Para chamarmos utilizamos a palavra New + nome do constructor.

// B) apareceu 4 vezes

// C) Apenas indiretamente através de métodos 


class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
    public getCpf():string {
        return this.cpf
    }

    public setAge(age: number) {
        if (age >= 18) {
          this.age = age;
        } else {
          throw new Error("Idade deve ser maior que 18");
        }
      }

    public setCPF(cpf: string) {
    if (cpf.length === 11) {
        this.cpf = cpf;
    } else {
        throw new Error("Quantidade de dígitos incorretos");
    }
    }

  }

//Exercicio 2
  class Transaction {
    private date: string;
    private value: number;
    private description: string;

    public getDate=() =>{
        return this.date
    }

    public getValue=() =>{
        return this.value
    }
     public getDescription=() =>{
      return this.description
  }

    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }
  }

//Exercicio 3
  class Bank {

    private accounts: UserAccount[];


    public addUser(cpf:string, name: string, age: number) {
        const user = new UserAccount(cpf,name,age);
        this.accounts.push(user);
      }

    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
    public getAccount():UserAccount[] {
        return this.accounts
    }

    public setAccount():UserAccount[] {
        return this.accounts
    }

  }

const Thiago = new UserAccount("124.145.167-09", "Thiago", 20)
const Camily = new UserAccount("124.145.167-09", "Camily", 19)
const Bruna = new UserAccount("124.145.167-09", "Bruna", 31)

Camily.setAge(32)
console.log(Camily)
console.log(Camily.getCpf())
Camily.setCPF("12312312309")
console.log("NOVO CPF: ",Camily.getCpf())


// console.log(Thiago.getCpf())
// console.log(Thiago.setAge(18))
// console.log(Thiago.setCPF("12312312309"))


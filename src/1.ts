/*1) Crie uma classe Pessoa com os atributos nome, sexo e idade. Crie os getters e
setters. No setters valide se o nome for em branco retorne uma mensagem de nome
inválido. Se o sexo for diferente de Masculino ou Feminino retorne uma mensagem
inválida. Se a idade for 0 retorne uma mensagem de idade inválida. Crie um método
para receber a idade, se a idade for maior ou igual a 18 exibir a mensagem pessoa
maior de idade, caso contrário exibir a mensagem pessoa menor de idade.*/
class Pessoa {
  constructor(
    private _nome: string,
    private _sexo: string,
    private _idade: number
  ) {}

  get nome() {
    return this._nome;
  }
  set nome(nome: string) {
    if (nome == "" || nome == undefined) {
      throw new Error("Nome inválido!");
    }
    this._nome = nome;
  }

  get sexo() {
    return this._sexo;
  }
  set sexo(sexo: string) {
    switch (sexo) {
      case "Masculino":
      case "Feminino":
        this._sexo = sexo;
        break;
      default:
        throw new Error("Sexo Inválido!");
    }
  }

  get idade() {
    return this._idade;
  }
  set idade(idade: number) {
 
    this._idade = idade;
  }
  ifExistsAdult(idade:number):string{
    if (idade <= 0) {
      throw new Error("Idade inválida");
    } else if (idade >= 18) {
      return "Maior de idade";
    }else{
      return "Menor de idade de idade";
    }

  }
}

const people1 = new Pessoa("Matheus", "Masculino", 20);
try {
  // console.log((people1.nome = ""));
  // people1.idade = -20;
  // console.log(people1);
  console.log((people1.sexo = "Masculino"));
  console.log(people1.ifExistsAdult(20));
} catch (error:any) {
  console.log(error.message);
}






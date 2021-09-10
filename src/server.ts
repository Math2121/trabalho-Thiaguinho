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
    if (idade <= 0) {
      throw new Error("Idade inválida");
    } else if (idade >= 18) {
      console.log("Maior de idade");
    }
    console.log("Menor de idade de idade");
    this._idade = idade;
  }
}

const people1 = new Pessoa("Matheus", "Masculino", 20);

// console.log(people1.nome = '')
people1.idade = -20
console.log(people1)
// console.log((people1.sexo = "golfino"));
// console.log(people1)
/*2) Crie uma classe Veiculos com os atributos modelo, marca, ano, valorLocacao e
quantidade de dias. Crie os getters e setters. No setters crie validações para não
aceitar modelo, marca, ano, valorLocacao e quantidade em branco ou com valor
zero. Crie um método passeio para receber a quantidade de dias e o valor da
locação. O sistema calcule o total que será a multiplicação da quantidade de dias
pelo valor da locação. */

class Veiculos {
  constructor(
    public _modelo: string,
    public _marca: string,
    public _ano: number,
    public _valorLocacao: number,
    public _quantidadeDia: number
  ) {}

  get modelo() {
    return this._modelo;
  }
  get marca() {
    return this._marca;
  }
  get ano() {
    return this._ano;
  }
  get valorLocacao() {
    return this._valorLocacao;
  }
  get quantidadeDia() {
    return this._quantidadeDia;
  }
  set modelo(modelo: string) {
    if (!modelo) {
      throw new Error("Modelo vazio!");
    }
    this._modelo = modelo;
  }

  set marca(marca: string) {
    if (!marca) {
      throw new Error("Marca vazio!");
    }
    this._marca = marca;
  }
  set ano(ano: number) {
    if (!ano) {
      throw new Error("Ano vazio!");
    }
    this._ano = ano;
  }
  set valorLocacao(valorLocacao: number) {
    if (!valorLocacao) {
      throw new Error("Valor da Locação vazio!");
    }
    this._valorLocacao = valorLocacao;
  }
  set quantidadeDia(quantidadeDia: number) {
    if (!quantidadeDia) {
      throw new Error("Quantidade vazio!");
    }
    this._quantidadeDia = quantidadeDia;
  }

  passeio(quantidadeDia: number, valorLocacao: number): string {
    const total = quantidadeDia * valorLocacao;

    return `O valor do passeio será: R$${total.toFixed(2)}`;
  }
}
// const carro = new Veiculos("Fiesta","Nissan",2015,125,6)
// console.log(carro.passeio(5,600))

// try {
//   const carro = new Veiculos(" ", "Nissan", 2015, 125, 6);
//   carro.marca = "";
// } catch (error) {
//   console.log(error);
// }

/*3) Crie uma classe Fatura com os atributos números, descrição, quantidade
Comprada e preço. Crie um método valor da Fatura para multiplicar a quantidade
comprada pelo preço.*/

class Fatura {
  constructor(
    public _numeros: number,
    public _descricao: string,
    public _quantidadeCompra: number,
    public _preco: number
  ) {}
  get numeros() {
    return this._numeros;
  }
  get descricao() {
    return this._descricao;
  }
  get quantidadeCompra() {
    return this._quantidadeCompra;
  }
  get preco() {
    return this._preco;
  }

  set numeros(numeros: number) {
    this._numeros = numeros;
  }

  set descricao(descricao: string) {
    this._descricao = descricao;
  }
  set quantidadeCompra(quantidadeCompra: number) {
    this._quantidadeCompra = quantidadeCompra;
  }
  set preco(preco: number) {
    this._preco = preco;
  }

  valorFatura(): string {
    const total = this._quantidadeCompra * this._preco;
    return `O valor da sua fatura é ${total.toFixed(2)}`;
  }
}

// const faturas = new Fatura(566, "Fatura nova", 65, 1200);
// console.log(faturas.valorFatura());


/*4) Crie uma classe para calcular o imposto de renda. Crie uma classe Pai com os
atributos nome e renda anual. Crie os getters e setters com as suas validações. Crie
uma classe filha Pessoa Física para herdar da classe Pai e com o atributo gastos
com saúde, crie os getter e setter com a validação. Crie uma classe filha Pessoa
Jurídica para herdar da classe Pai e com o atributo número de funcionários. Crie o
getter e o setter com a validação.
Regras para os cálculos
Pessoa Física: Pessoas cuja renda foi abaixo de 20.000,00 pagam 15% de imposto.
Pessoas com renda maior ou igual a 20.000,00 pagam imposto de 25%. Se a
pessoa teve gastos com saúde, 50% destes gastos são abatidos no imposto.
Exemplo: Se uma pessoa cuja renda foi de 50.000,00 e teve 2.000,00 em gastos
com saúde, o imposto fica: (50.000,00 * 25%) - (2000 * 50%) = 11.500,00
Pessoa Jurídica: Pessoas jurídicas pagam 16% de imposto, porém, se a empresa
possuir mais de 10 funcionários, ela paga 14% de imposto. Exemplo: Uma empresa
Trabalho de POO I 2
cuja renda foi de 400.000,00 e possui 25 funcionários, o imposto fica: 400.000,00 *
14% = 56.000,00
5) Crie uma classe chamada Vendedores com os atributos nome, salario e valor da
venda. Crie os getters e setters e as validações. Crie um método desconto para
calcular 8% do salário.
*/
interface IImpostoDeRenda {
  nome: string;
  renda: number;
}

abstract class ImpostoDeRenda {
  protected nome: string;
  protected renda: number;
  constructor({ nome, renda }: IImpostoDeRenda) {
    this.nome = nome;
    this.renda = renda;
  }
  get getNome(): string {
    return this.nome;
  }
  get getRenda(): number {
    return this.renda;
  }
  set setNome(nome: string) {
    if (nome.length < 1) {
      throw new Error("Nome invalido!");
    }
    this.nome = nome;
  }
  set setRenda(renda: number) {
    if (renda == 0 || !renda) {
      throw new Error("Renda invalida!");
    }
    this.renda = renda;
  }
  public abstract calcularImposto(): number;
}
interface IPessoaFisica {
  gastosComSaude: number;
  nome: string;
  renda: number;
}
class PessoaFisica extends ImpostoDeRenda {
  private gastosComSaude: number;

  constructor({ gastosComSaude, nome, renda }: IPessoaFisica) {
    super({ nome, renda });
    this.gastosComSaude = gastosComSaude;
  }
  public get getgastosComSaude(): number {
    return this.gastosComSaude;
  }
  public set setgastosComSaude(gastosComSaude: number) {
    if (gastosComSaude < 0) {
      throw new Error("Gasto com saude invalido!");
    }
    this.gastosComSaude = gastosComSaude;
  }
  calcularImposto() {
    const abateGastoSaude =
      this.gastosComSaude == 0 ? 0 : this.gastosComSaude * 0.5;
    if (this.renda < 20000) {
      return this.renda * 0.15 - abateGastoSaude;
    } else {
      return this.renda * 0.25 - abateGastoSaude;
    }
  }
}
interface IPessoaJuridica {
  numeroDeFuncionarios: number;
  nome: string;
  renda: number;
}
class ImpostoPessoaJuridica extends ImpostoDeRenda {
  private numeroDeFuncionarios: number;

  constructor({ numeroDeFuncionarios, nome, renda }: IPessoaJuridica) {
    super({ nome, renda });
    this.numeroDeFuncionarios = numeroDeFuncionarios;
  }
  public get getNumeroDeFuncionarios(): number {
    return this.numeroDeFuncionarios;
  }
  public set setNumeroDeFuncionarios(numeroDeFuncionarios: number) {
    if (numeroDeFuncionarios == 0) {
      throw new Error("Numero de funcionarios invalido!");
    }
    this.numeroDeFuncionarios = numeroDeFuncionarios;
  }
  calcularImposto() {
    if (this.numeroDeFuncionarios > 10) {
      return this.renda * 0.14;
    } else {
      return this.renda * 0.16;
    }
  }
}
/*5) Crie uma classe chamada Vendedores com os atributos nome, salario e valor da
venda. Crie os getters e setters e as validações. Crie um método desconto para
calcular 8% do salário.
Crie uma classe filha chamada Vendedor de Pessoa Física com o atributo região,
crie o getter e setter com validação para aceitar somente as regiões sul, sudeste,
centro-oeste, norte e nordeste. Crie um método para calcular a comissão. Se a
região for sul a comissão será de 10% sobre o valor da venda. Se a região for
sudeste a comissão será de 12% sobre o valor da venda, se a região for centrooeste a comissão será de 14% sobre o valor da venda, se a região for norte a
comissão será de 15% sobre o valor da venda, Se a região for nordeste a comissão
será de 17% sobre o valor da venda. Crie o método para calcular o salário total que
será o salario mais a comissão.
Crie uma classe filha chamada Pessoa Jurídica com os atributos nome da empresa,
total de funcionários, crie os getters, setters e as suas validações. Crie um método
para calcular a comissão. Se o valor da venda for menor que 5.000,00 o valor da
comissão será de 2% sobre o valor da venda. Se o valor da venda for maior ou igual
a 5.000,00 e menor que 10.000,00 o valor da comissão será de 4% sobre o valor da
venda. Se o valor da venda for maior ou igual a 10.000,00 o valor da comissão será
de 6% sobre o valor da venda. Crie um método salario Total que será a soma do
salario mais comissão e mais R$ 200,00 se o número de funcionários for menor que
100 ou mais R$ 300,00 se o número de funcionários for maior ou igual a 100.*/
class Vendedores {
  constructor(
    private _nome: string,
    private _salario: number,
    private _valorVenda: number
  ) {}

  get nome() {
    return this._nome;
  }
  get salario(): number {
    return this._salario;
  }
  get valoVenda() {
    return this._valorVenda;
  }
  set nome(nome: string) {
    this._nome = nome;
  }

  set salario(salario: number) {
    this._salario = salario;
  }
  set valorVenda(valorVenda: number) {
    this._valorVenda = valorVenda;
  }

  desconto(): number {
    const reajuste = (this._salario * 8) / 100;
    return reajuste;
  }
}

class VendedorFisico extends Vendedores {
  constructor(
    private _regiao: string,
    _nome: string,
    _salario: number,
    _valorCompra: number
  ) {
    super(_nome, _salario, _valorCompra);
  }
  get regiao() {
    return this._regiao;
  }
  set regiao(regiao: string) {
    this._regiao = regiao;
  }
  comissao(): number {
    let comissao = 0;

    if (this.regiao == "Sul") {
      comissao += (this.valoVenda * 10) / 100;
    } else if (this.regiao == "Sudeste") {
      comissao += (this.valoVenda * 12) / 100;
    } else if (this.regiao == "Centro-Oeste") {
      comissao += (this.valoVenda * 14) / 100;
    } else if (this.regiao == "Norte") {
      comissao += (this.valoVenda * 15) / 100;
    } else if (this.regiao == "Nordeste") {
      comissao += (this.valoVenda * 17) / 100;
    } else {
      console.log("Não há comissão");
    }

    return comissao;
  }

  salarioTotal() {
    const totalSalario = this.salario + this.comissao();
    return `O salário total do Vendedor é ${totalSalario.toFixed(2)}`;
  }
}

class PessoaJuridica extends Vendedores {
  constructor(
    private _empresa: string,
    private _totalFunc: number,
    _nome: string,
    _salario: number,
    _valorCompra: number
  ) {
    super(_nome, _salario, _valorCompra);
  }
  get empresa() {
    return this._empresa;
  }
  set empresa(empresa: string) {
    this._empresa = empresa;
  }
  get funcionario() {
    return this._totalFunc;
  }
  set funcionario(totalFunc: number) {
    this._totalFunc = totalFunc;
  }
  comissao() {
    let comissao = 0;
    if (this.valoVenda < 5000) {
      comissao = (this.valoVenda * 2) / 100;
    } else if (this.valoVenda >= 5000 && this.valoVenda < 10000) {
      comissao = (this.valoVenda * 4) / 100;
    } else if (this.valoVenda >= 10000) {
      comissao = (this.valoVenda * 6) / 100;
    }
    return comissao;
  }

  salarioTotal() {
    let totalSalario = this.salario + this.comissao();
    if (this.funcionario < 100) {
      totalSalario += 200;
    }
    totalSalario += 300;
    return `O salário total do Vendedor é ${totalSalario.toFixed(2)}`;
  }
}

// const vende = new Vendedores("Salomao", 50000, 300);
// console.log("Vendedores:" + vende.desconto());
// const pessoaFi = new VendedorFisico("Sudeste", "Salomao", 50000, 300);
// console.log("Pessoa Física:" + pessoaFi.comissao());
// console.log("Pessoa Física:" + pessoaFi.salarioTotal());
// const pessoaJuridica = new PessoaJuridica("Maria", 60, "Salomao", 50000, 300);
// console.log("PEssoa Juridica " + pessoaJuridica.comissao());
// console.log("PEssoa Juridica " + pessoaJuridica.salarioTotal());


/*6) Crie uma interface chamado IEndereço com os seguintes atributos rua, numero,
bairro e cidade. Crie um variável do endereço que seja do tipo da interface
endereço. Atribua um endereço uma rua, numero, bairro e cidade para a variável
endereço que é do mesmo tipo da interface. Utilize o console.log para exibir o
conteúdo da variável endereço.*/

interface IEndereço {
  rua: string;
  numero: number;
  bairro: string;
  cidade: string;
}

const endereco: IEndereço = {
  rua: "Alfeneiros",
  numero: 4,
  bairro: "Condado Surrey",
  cidade: "Londres",
};

console.log(endereco);

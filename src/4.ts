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

abstract class ImpostoDeRenda {
    protected nome: string;
    protected renda: number;
    constructor(nome: string, renda: number) {
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
      super(nome, renda);
      this.gastosComSaude = gastosComSaude;
    }
    public get getgastosComSaude(): number {
      return this.gastosComSaude;
    }
    public set setgastosComSaude(gastosComSaude: number) {
      if (gastosComSaude <= 0) {
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
  const fisico = new PessoaFisica({gastosComSaude:2000,nome:"Vacina",renda:30000})
  console.log("Retorno Imposto:" + fisico.calcularImposto())
  interface IPessoaJuridica {
    numeroDeFuncionarios: number;
    nome: string;
    renda: number;
  }
  class ImpostoPessoaJuridica extends ImpostoDeRenda {
    private numeroDeFuncionarios: number;
  
    constructor({ numeroDeFuncionarios, nome, renda }: IPessoaJuridica) {
      super(nome, renda);
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
  const juri = new ImpostoPessoaJuridica({numeroDeFuncionarios:5,nome:"Vacina",renda:30000})
  console.log("Retorno Imposto Juridico:" + juri.calcularImposto())
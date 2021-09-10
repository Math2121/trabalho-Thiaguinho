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
  
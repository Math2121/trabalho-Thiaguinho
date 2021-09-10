/*2) Crie uma classe Veiculos com os atributos modelo, marca, ano, valorLocacao e
quantidade de dias. Crie os getters e setters. No setters crie validações para não
aceitar modelo, marca, ano, valorLocacao e quantidade em branco ou com valor
zero. Crie um método passeio para receber a quantidade de dias e o valor da
locação. O sistema calcule o total que será a multiplicação da quantidade de dias
pelo valor da locação. */

class Veiculos {
    constructor(
      private _modelo: string,
      private _marca: string,
      private _ano: number,
      private _valorLocacao: number,
      private _quantidadeDia: number
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
  
  try {
    const carro = new Veiculos("TEsla ", "Nissan", 2015, 125, 6);
    // carro.marca = "";
    // carro.modelo = "";
    // carro.ano = 0;
    // carro.quantidadeDia = 0;
    carro.valorLocacao = 0;
    console.log(carro)
  } catch (error:any) {
    console.log(error.message);
  }
  
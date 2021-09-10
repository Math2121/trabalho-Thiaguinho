/*3) Crie uma classe Fatura com os atributos números, descrição, quantidade
Comprada e preço. Crie um método valor da Fatura para multiplicar a quantidade
comprada pelo preço.*/

class Fatura {
    constructor(
      private _numeros: number,
      private _descricao: string,
      private _quantidadeCompra: number,
      private _preco: number
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
  
  const faturas = new Fatura(566, "Fatura nova", 10, 2000);
  console.log(faturas.valorFatura());
  
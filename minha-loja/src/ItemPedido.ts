import { Produto } from "./Produto.js";

export class ItemPedido {
    constructor(
        private _produto: Produto,
        private _quantidade: number
    ) {}

    public get valorUnitario(): number {
        return this._produto.preco;
    }

    public get quantidade(): number {
        return this._quantidade;
    }

    public set quantidade(novaQuantidade: number) {
        if (novaQuantidade > 0) {
            this._quantidade = novaQuantidade;
        } else {
            console.log("A quantidade deve ser um número positivo");
        }
    }

    public calcularSubTotal(): number {
        return this.valorUnitario * this._quantidade
    }

    public toJSON() {
        return {
            produto: this._produto.toJSON(),
            quantidade: this.quantidade
        };
    }

    public static fromData(data: any): ItemPedido {
        return new ItemPedido(data.produto, data.quantidade);
    }

}
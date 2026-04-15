import { Cliente } from "./Cliente.js";
import { ItemPedido } from "./ItemPedido.js";

export class Pedido {
    private _total: number = 0;

    public cliente: Cliente;
    public itens: ItemPedido[] = [];

    constructor(
        public id: number,
        public data: Date,
        cliente: Cliente
    ) {
        this.cliente = cliente;
        console.log(`Pedido #${this.id} criado na data ${this.data.toLocaleDateString()}`);
    }

    public get total(): number {
        return this._total;
    }
}
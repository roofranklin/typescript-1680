import { Pedido } from './Pedido.js'

export class Cliente {
    public pedidos: Pedido[] = [];
    constructor (
        public id: number,
        public nome: string,
        public email: string
    ) {
        console.log(`Cliente ${this.nome} criado com sucesso!`);
    }
}

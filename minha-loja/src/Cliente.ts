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

    public adicionarPedido(pedido: Pedido): void {
        this.pedidos.push(pedido);   
    }
    
    public calcularTotalGasto(): number {
        let total = 0;
        for(const pedido of this.pedidos) {
            total += pedido.total;
        }
        return total;
    }
}

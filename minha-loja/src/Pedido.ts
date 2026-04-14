export class Pedido {
    private _total: number = 0;

    constructor(
        public id: number,
        public data: Date,
        // Futuramente, aqui teremos um atributo do tipo Cliente
    ) {
        console.log(`Pedido #${this.id} criado na data ${this.data.toLocaleDateString()}`);
    }

    public get total(): number {
        return this._total;
    }
}
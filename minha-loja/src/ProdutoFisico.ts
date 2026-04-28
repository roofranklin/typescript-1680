import { Produto } from "./Produto.js";

export class ProdutoFisico extends Produto {
    constructor(
        id: number,
        nome: string,
        preco: number,
        descricao: string,
        public pesoEmGramas: number
    ) {
        super(id, nome, preco, descricao);
    }
}
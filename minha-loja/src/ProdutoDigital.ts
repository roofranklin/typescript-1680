import { Produto } from "./Produto.js";

export class ProdutoDigital extends Produto {
    constructor(
        id: number,
        nome: string,
        preco: number,
        descricao: string,
        public linkDownload: string
    ) {
        super(id, nome, preco, descricao);
    }
}
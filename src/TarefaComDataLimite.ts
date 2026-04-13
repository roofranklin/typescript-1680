import { Tarefa } from "./Tarefa.js";

export class TarefaComDataLimite extends Tarefa {
    public dataLimite: Date;

    constructor(id: number, descricao: string, dataLimite: Date) {
        super(id, descricao);
        this.dataLimite = dataLimite;
    }
}
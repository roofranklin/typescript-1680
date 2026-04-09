import { Tarefa } from "./Tarefa.js";

export class ListaDeTarefas {
    private tarefas: Tarefa[] = []
    private proximoId = 1;

    public adicionarTarefa(descricao: string): void {
        const novaTarefa = new Tarefa(this.proximoId++, descricao);
        this.tarefas.push(novaTarefa);
        console.log(`Tarefa "${descricao}" adicionada com sucesso!`)

    }

    public listarTarefas(): void {
        console.log("\n--- Lista de Tarefas ---");
        this.tarefas.forEach(tarefa => {
            const status = tarefa.concluida ? "[X]" : "[ ]"
            console.log(`${status} ${tarefa.id} - ${tarefa.descricao}`);
        });
        console.log("-----------------");
    }

    public marcarTarefaComoConcluida(id: number): void {
        const tarefa = this.encontrarTarefaPorId(id);
        if(tarefa){
            tarefa.marcarComoConcluida();
            console.log(`Tarefa "${tarefa.descricao}" marcada como concluída!`);
        } else {
            console.log("Tarefa não encontrada!");
        }
    }

    private encontrarTarefaPorId(id: number): Tarefa | undefined{
        return this.tarefas.find(tarefa => tarefa.id === id);
    }
}

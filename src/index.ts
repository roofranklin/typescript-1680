import { ListaDeTarefas } from "./ListaDeTarefas.js";

const minhaLista = new ListaDeTarefas();

minhaLista.adicionarTarefa("Estudar Typescript");
minhaLista.adicionarTarefa("Fazer o desafio da aula");
minhaLista.adicionarTarefa("Preparar o jantar");

minhaLista.marcarTarefaComoConcluida(2);
minhaLista.marcarTarefaComoConcluida(5);


minhaLista.listarTarefas();
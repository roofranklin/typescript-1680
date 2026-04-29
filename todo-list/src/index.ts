import { ListaDeTarefas } from "./ListaDeTarefas.js";

const minhaLista = new ListaDeTarefas();

minhaLista.adicionarTarefa("Estudar Typescript");
minhaLista.adicionarTarefa("Fazer o desafio da aula");
minhaLista.adicionarTarefa("Preparar o jantar");

const dataLimite = new Date();
dataLimite.setDate(dataLimite.getDate() + 7); // Data limite de 7 dias

minhaLista.adicionarTarefaComDataLimite("Entregar relatório", dataLimite);

minhaLista.marcarTarefaComoConcluida(2);

minhaLista.removerTarefa(1);

minhaLista.listarTarefas();
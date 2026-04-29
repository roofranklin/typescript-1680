import { Cliente } from './ClienteBase.js'
import { Pedido } from './Pedido.js'
import { ItemPedido } from './ItemPedido.js';
import { ProdutoFisico } from './ProdutoFisico.js';
import { ProdutoDigital } from './ProdutoDigital.js';

console.log("--- Iniciando Sistema de E-Commerce ---");

// Criando instância de Clientes
const cliente1 = new Cliente(1, "Carlos Ferreira", "carlos@email.com");
const cliente2 = new Cliente(2, "Mariana Andrade", "mariana@email.com");

console.log("\n--- Clientes Cadastrados ---");
console.log(cliente1);
console.log(`Email do segundo cliente: ${cliente2.email}`)

// Criando instâncias de Produtos
const livro = new ProdutoFisico(1, "Livro de TypeScript", 120, "Aprenda TypeScript do básico ao avançado", 500);
const ebook = new ProdutoDigital(2, "Ebook de JavaScript", 50, "Aprenda JavaScript do básico ao avançado", "https://www.google.com.br");
const placaVideo = new ProdutoFisico(3, "Placa de Vídeo RTX 3080", 3500, "Placa de vídeo de alta performance para jogos e trabalho", 1500);
const cursoOnline = new ProdutoDigital(4, "Curso Online de React", 200, "Aprenda React do básico ao avançado", "https://www.google.com.br");

// Criando Instâncias de ItemPedido
const item1 = new ItemPedido(livro, 2);
const item2 = new ItemPedido(ebook, 1);
const item3 = new ItemPedido(placaVideo, 1);
const item4 = new ItemPedido(cursoOnline, 3);

// Criando instância de Pedidos
const pedido1 = new Pedido(101, new Date(), cliente1);
const pedido2 = new Pedido(102, new Date(), cliente2);

// Associando itens aos pedidos
pedido1.adicionarItem(item1);
pedido1.adicionarItem(item2);
pedido2.adicionarItem(item3);
pedido2.adicionarItem(item4);

// Associar pedidos aos clientes
cliente1.adicionarPedido(pedido1);
cliente2.adicionarPedido(pedido2);

console.log("\n--- Pedidos Realizados ---");
console.log(`Total do pedido 1 (inicial): R$ ${pedido1.total.toFixed(2)}`);
// pedido1.total = 100
// A linha acima daria um erro pois totalé somente leitura graças ao getter

console.log("\n--- Verificando conexões ---");
console.log("Cliente 01 com pedidos:");
console.log(cliente1);
console.log("\nResumo do Pedido 01:");
console.log(pedido1.obterResumo());

console.log("\n--- Testando validações do ItemPedido ---");
console.log("Tentando criar um item com valor negativo");
const itemInvalido = new ItemPedido(livro, -100);
console.log(itemInvalido); // Veremos a mensagem de erro e o valor não será atribuído

console.log("\nTentando atribuir quantidade negativa a uma item já existente:");
console.log(`Quantidade original do item2: ${item2.quantidade}`);
item2.quantidade = -5; // Tem que mostrar erro aqui
console.log(`Quantidade do item2 após tentativa de alteração: ${item2.quantidade}`);

console.log("\n--- Testando novas funcionalidades ---");
console.log(`Total gasto por ${cliente1.nome}: R$ ${cliente1.calcularTotalGasto().toFixed(2)}`);

console.log(`\nStatus inicial do pedido 01: ${pedido1.status}`);
pedido1.pagar();
console.log(`\nStatus depois de pagar: ${pedido1.status}`);
pedido1.enviar();
console.log(`\nStatus depois de enviar: ${pedido1.status}`);
pedido1.entregar();
console.log(`\nStatus depois de entregar: ${pedido1.status}`);

console.log("\n--- Testando Validações do cliente ---");
console.log("Tentando criar cliente com nome inválido:");
const clienteInvalido1 = new Cliente(3, "A", "ana@email.com");

console.log("Tentando criar cliente com email inválido:");
const clienteInvalido2 = new Cliente(4, "Beatriz", "beatrizemail.com");

console.log("Tentando alterar para um nome inválido:");
const clienteValido = new Cliente(5, "Eduardo", "edu@email.com");
console.log(`\nNome Original: ${clienteValido.nome}`);

clienteValido.nome = "E";
console.log(`\nNome depois de tentar alterar: ${clienteValido.nome}`);

console.log("\n--- Testando Serialização ---");
const jsonPedido = JSON.stringify(pedido1, null, 2);
console.log(jsonPedido);

console.log("\n--- Testando Desserialização ---");
const dadosDoServidor = JSON.parse(jsonPedido);
const pedidoRecriado = Pedido.fromData(dadosDoServidor, cliente1);
console.log(pedidoRecriado);
console.log(`Total do pedido recriado: R$ ${pedidoRecriado.total.toFixed(2)}`);

console.log("\n--- Testando Serialização e Desserialização do Cliente ---");
const clienteOriginal = new Cliente(10, "Joana Silva", "joana@email.com");
const jsonCliente = JSON.stringify(clienteOriginal.toJSON(), null, 2);
console.log("Cliente serializado:");
console.log(jsonCliente);

const clienteRecriado = Cliente.fromJSON(jsonCliente);
console.log("\nCliente Recriado a partir do JSON");
console.log(clienteRecriado);

console.log("\n--- Testando atualização parcial e validações ---")
const atualizacaoParcial = { email: "novoemail@email.com", nome: "J" };
console.log(`\nAplicando atualizações: ${JSON.stringify(atualizacaoParcial)}`);
clienteRecriado.aplicarAtualizacoes(atualizacaoParcial);
console.log("\nCliente após a tentativa de atualização com dados inválidos:");
console.log(clienteRecriado);

console.log("\n--- Sistema Finalizado ---");
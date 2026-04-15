import { Cliente } from './Cliente.js'
import { Pedido } from './Pedido.js'
import { ItemPedido } from './ItemPedido.js';

console.log("--- Iniciando Sistema de E-Commerce ---");

// Criando instância de Clientes
const cliente1 = new Cliente(1, "Carlos Ferreira", "carlos@email.com");
const cliente2 = new Cliente(2, "Mariana Andrade", "mariana@email.com");

console.log("\n--- Clientes Cadastrados ---");
console.log(cliente1);
console.log(`Email do segundo cliente: ${cliente2.email}`)

// Criando Instâncias de ItemPedido
const item1 = new ItemPedido("Placa de Vídeo", 3500, 1);
const item2 = new ItemPedido("Mouse Gamer", 150, 2);
const item3 = new ItemPedido("Teclado Mecânico", 600, 1);
const item4 = new ItemPedido("Monitor 4k", 1200, 1);

// Criando instância de Pedidos
const pedido1 = new Pedido(101, new Date(), cliente1);
const pedido2 = new Pedido(102, new Date(), cliente2);

// Associando itens aos pedidos
pedido1.adicionarItem(item1);
pedido1.adicionarItem(item2);
pedido2.adicionarItem(item3);
pedido2.adicionarItem(item4);

// Associar pedidos aos clientes
cliente1.pedidos.push(pedido1);
cliente2.pedidos.push(pedido2);

console.log("\n--- Pedidos Realizados ---");
console.log(`Total do pedido 1 (inicial): R$ ${pedido1.total.toFixed(2)}`);
// pedido1.total = 100
// A linha acima daria um erro pois totalé somente leitura graças ao getter

console.log("\n--- Verificando conexões ---");
console.log("Cliente 01 com pedidos:");
console.log(cliente1);
console.log("\nResumo do Pedido 01:");
console.log(pedido1.obterResumo());

console.log("\n--- Sistema Finalizado ---");
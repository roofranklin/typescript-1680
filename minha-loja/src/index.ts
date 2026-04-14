import { Cliente } from './Cliente.js'
import { Pedido } from './Pedido.js'

console.log("--- Iniciando Sistema de E-Commerce ---");

// Criando instância de Clientes
const cliente1 = new Cliente(1, "Carlos Ferreira", "carlos@email.com");
const cliente2 = new Cliente(2, "Mariana Andrade", "mariana@email.com");

console.log("\n--- Clientes Cadastrados ---");
console.log(cliente1);
console.log(`Email do segundo cliente: ${cliente2.email}`)

// Criando instância de Pedidos
const pedido1 = new Pedido(101, new Date());
const pedido2 = new Pedido(102, new Date());

// pedido1.total = 100
// A linha acima daria um erro pois totalé somente leitura graças ao getter

console.log("\n--- Pedidos Realizados ---");
console.log(`Total do pedido 1 (inicial): R$ ${pedido1.total.toFixed(2)}`);

console.log("\n--- Sistema Finalizado ---");
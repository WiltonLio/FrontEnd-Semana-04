class Computador {
    constructor(modelo, processador, memoria, armazenamento) {
        this.Modelo = modelo;
        this.Processador = processador;
        this.Memoria = memoria;
        this.Armazenamento = armazenamento;
    }

    ligar() {
        return `${this.Modelo} está ligado.`;
    }

    desligar() {
        return `${this.Modelo} está desligado.`;
    }
}

// Criando objetos Computador
const computador1 = new Computador('Desktop', 'Intel Core i5', '8GB', '1TB HDD');
const computador2 = new Computador('Laptop', 'AMD Ryzen 7', '16GB', '512GB SSD');
const computador3 = new Computador('All-in-One', 'Intel Core i7', '12GB', '256GB SSD');

// Função para converter um objeto Computador em um mapa
function objetoParaMap(computador) {
    return new Map(Object.entries(computador));
}

// Função para exibir um mapa em uma lista desordenada no HTML
function exibirMapaNaLista(map) {
    const listaElement = document.getElementById('computadoresList');

    for (const [chave, valor] of map) {
        const listItem = document.createElement('li');
        listItem.textContent = `${chave}: ${valor}`;
        listaElement.appendChild(listItem);
    }
}

// Convertendo objetos Computador em mapas
const mapaComputador1 = objetoParaMap(computador1);
const mapaComputador2 = objetoParaMap(computador2);
const mapaComputador3 = objetoParaMap(computador3);

// Exibindo mapas em uma lista desordenada no HTML
exibirMapaNaLista(mapaComputador1);
exibirMapaNaLista(mapaComputador2);
exibirMapaNaLista(mapaComputador3);
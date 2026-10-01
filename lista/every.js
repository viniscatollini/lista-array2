const produtos = [
    { id: 1, nome: 'Notebook', preco: 3500, estoque: 5, ativo: true },
    { id: 2, nome: 'Mouse', preco: 80, estoque: 0, ativo: true },
    { id: 3, nome: 'Teclado', preco: 150, estoque: 10, ativo: false },
    { id: 4, nome: 'Monitor', preco: 1200, estoque: 3, ativo: true },
];

// 13
const verificadorPreco = produtos.every((produto) => produto.preco > 50)
console.log("Produtos com preço maior que 50:", verificadorPreco)

// 14
const produtosDisponiveis = produtos.every((produto) => produto.estoque > 0)
console.log("Produtos com estoque disponível:", produtosDisponiveis)

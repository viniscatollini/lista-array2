const produtos = [
    { id: 1, nome: 'Notebook', preco: 3500, estoque: 5, ativo: true },
    { id: 2, nome: 'Mouse', preco: 80, estoque: 0, ativo: true },
    { id: 3, nome: 'Teclado', preco: 150, estoque: 10, ativo: false },
    { id: 4, nome: 'Monitor', preco: 1200, estoque: 3, ativo: true },
];

// 5
const produtoEncontrado = produtos.find((produto) => produto.id === 3)
console.log("Produto encontrado:", produtoEncontrado)

// 6
const produtosemEstoque = produtos.find((produto) => produto.estoque === 0)
console.log("Produto sem estoque:", produtosemEstoque)

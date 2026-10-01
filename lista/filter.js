const produtos = [
    { id: 1, nome: 'Notebook', preco: 3500, estoque: 5, ativo: true },
    { id: 2, nome: 'Mouse', preco: 80, estoque: 0, ativo: true },
    { id: 3, nome: 'Teclado', preco: 150, estoque: 10, ativo: false },
    { id: 4, nome: 'Monitor', preco: 1200, estoque: 3, ativo: true },
];

// 3
const produtosAtivos = produtos.filter((produto) => produto.ativo)

console.log("Produtos ativos:", produtosAtivos)

// 4
const produtosCondicao = produtos.filter((produto) => produto.preco > 100 && produto.estoque > 0)

console.log("Produtos com preço maior que 100 e estoque maior que 0:", produtosCondicao)

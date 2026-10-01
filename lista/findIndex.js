const produtos = [
    { id: 1, nome: 'Notebook', preco: 3500, estoque: 5, ativo: true },
    { id: 2, nome: 'Mouse', preco: 80, estoque: 0, ativo: true },
    { id: 3, nome: 'Teclado', preco: 150, estoque: 10, ativo: false },
    { id: 4, nome: 'Monitor', preco: 1200, estoque: 3, ativo: true },
];

// 7
const indexProduto = produtos.findIndex((produto) => produto.nome === "Monitor")
console.log("Índice do produto:", indexProduto)

// 8
const indexProdutodesativado = produtos.findIndex((produto) => produto.ativo === false)
console.log("Índice do produto desativado:", indexProdutodesativado)

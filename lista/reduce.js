const produtos = [
    { id: 1, nome: 'Notebook', preco: 3500, estoque: 5, ativo: true },
    { id: 2, nome: 'Mouse', preco: 80, estoque: 0, ativo: true },
    { id: 3, nome: 'Teclado', preco: 150, estoque: 10, ativo: false },
    { id: 4, nome: 'Monitor', preco: 1200, estoque: 3, ativo: true },
];

// 9
const totalEstoque = produtos.reduce((acumulador, produto) => acumulador + produto.estoque, 0)
console.log("Total de estoque:", totalEstoque)

// 10
const patrimonioTotal = produtos.reduce((acumulador, produto) => acumulador + (produto.preco * produto.estoque), 0)
console.log("Patrimônio total:", patrimonioTotal)

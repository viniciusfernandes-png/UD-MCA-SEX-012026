let objetos = [{ nome: 'faca', preço: 100, estoque: 30 }, { nome: 'garfo', preço: 10, estoque: 40 }, { nome: 'colher', preço: 20, estoque: 60 }, { nome: 'prato', preço: 50, estoque: 20 }, { nome: 'copo', preço: 30, estoque: 50 }, { nome: 'panela', preço: 200, estoque: 10 }, { nome: 'frigideira', preço: 150, estoque: 15 }, { nome: 'tábua de corte', preço: 80, estoque: 25 }, { nome: 'liquidificador', preço: 300, estoque: 5 }, { nome: 'batedeira', preço: 250, estoque: 8 }]
console.log(objetos[1].preço)
console.log(objetos[2].preço)
console.log(objetos.length)

for (let i = 0; i < objetos.length; i++) { console.log(objetos[i].nome) }

let totalestoque = 0;
for (let i = 0; i < objetos.length; i++) { totalestoque += objetos[i].estoque }
console.log(totalestoque)

let maior = objetos[0];
for (let i = 1; i < objetos.length; i++) { if (objetos[i].estoque > maior.estoque) { maior = objetos[i] } }
console.log('Maior estoque: ', maior.nome)
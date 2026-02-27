let faca = { nome: 'faca', cor: 'prata', preço: 100, estoque: 30 }
console.log(faca.nome)
console.log(faca['preço'])
faca.estoque = 80
for (let x in faca) { console.log(x + ': ' + faca[x]) }


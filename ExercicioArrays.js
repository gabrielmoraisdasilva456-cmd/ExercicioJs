let filmes =["300","007","todo mundo em panico","Homem-Aranha","Homem-formiga"]
// 1. Crie um array com 5 filme

// 2. Exibir todos os filmes usando forEach
console.log("Lista de filmes:");
filmes.forEach((filme, index) => {
  console.log(index + ": " + filme);
});

// 3. Adicionar um filme no final e mostrar o array atualizado
filmes.push("Inception");
console.log("\nApós adicionar no final:");
console.log(filmes);

// 4. Remover o último filme
filmes.pop();
console.log("\nApós remover o último:");
console.log(filmes);

// 5. Adicionar um filme no início
filmes.unshift("O Poderoso Chefão");
console.log("\nApós adicionar no início:");
console.log(filmes);

// 6. Remover o primeiro filme
filmes.shift();
console.log("\nApós remover o primeiro:");
console.log(filmes);

// 7. Remover um filme na posição 2 (índice 1)
filmes.splice(1, 1);
console.log("\nApós remover o filme da posição 2:");
console.log(filmes);

// 8. Adicionar um filme na posição 3 (índice 2)
filmes.splice(2, 0, "Homem-Aranha");
console.log("\nApós adicionar filme na posição 3:");
console.log(filmes);
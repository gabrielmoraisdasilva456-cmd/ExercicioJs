// Array de filmes

const filmes = [

    { titulo: "Avatar", duracao: 162, genero: "Ficção Científica", nota: 8.2 },

    { titulo: "Senhor dos Aneis", duracao: 229, genero: "Alta Fantasia", nota: 9.1 },

    { titulo: "Divertida mente", duracao: 95, genero: "Animação", nota: 8.5 },

    { titulo: "Toy Story", duracao: 81, genero: "Animação", nota: 8.3 },

    { titulo: "Vingadores Ultimato", duracao: 248, genero: "Super-Heroi", nota: 8.8 },

    { titulo: "Titanic", duracao: 195, genero: "Romance-Drama", nota: 8.7 }

];





const titulos = filmes.map(filme => filme.titulo);

console.log("Títulos:", titulos);



const longos = filmes.filter(filme => filme.duracao > 120);

console.log("Filmes longos:", longos);





const duracaoTotal = filmes.reduce((total, filme) => total + filme.duracao, 0);

console.log("Duração total:", duracaoTotal);





const filmeTop = filmes.find(filme => filme.nota > 9);

console.log("Filme com nota > 9:", filmeTop);





const temNotaRuim = filmes.some(filme => filme.nota < 5);

const todosBons = filmes.every(filme => filme.nota > 6);



console.log("Existe filme com nota < 5?", temNotaRuim);

console.log("Todos têm nota > 6?", todosBons);





const ordenados = [...filmes].sort((a, b) => b.nota - a.nota);

console.log("Ordenados por nota:", ordenados);





filmes.splice(2, 1, {

    titulo: "Parasita",

    duracao: 110,

    genero: "Thriller-Drama",

    nota: 9.4

});



console.log("Lista atualizada:", filmes);
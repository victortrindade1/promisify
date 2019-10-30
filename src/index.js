// // -------- Callback --------

// // importa a função writeFile do módulo fs
// const { writeFile } = require("fs");

// // recebe o nome do arquivo, conteúdo e o callback
// // para lidar com a operação
// writeFile("arquivo.txt", "conteúdo do arquivo", err => {
//   // verifica se houve algum erro
//   // Se houve, logada e aborta a função
//   if (err) return console.log(err);

//   // se não houve erro
//   console.log("arquivo criado com sucesso!");
// });

// // -------- Promissificando o Callback --------

// const { writeFile } = require("fs");

// function criaArquivo(nome, conteudo) {
//   return new Promise((resolve, reject) => {
//     writeFile("arquivo.txt", "conteúdo do arquivo", err => {
//       if (err) return reject(err);
//       resolve();
//     });
//   });
// }
// criaArquivo()
//   .then(() => console.log("arquivo criado com sucesso!"))
//   .catch(err => console.log(err));

// // -------- Com o promisify --------

// // O promisify consta no core do Node 8+

// // importou promisify do módulo util
// const { promisify } = require("util");
// const { writeFile } = require("fs");

// // promisifica a função writeFile
// const writeFilePromisificado = promisify(writeFile);

// writeFilePromisificado("arquivo.txt", "conteúdo arquivo")
//   .then(() => console.log("arquivo criado com sucesso!"))
//   .catch(err => console.log(err));

// -------- Com o promisify usando async await --------

const { promisify } = require("util");

// faz o require já promisificando
const writeFile = promisify(require("fs").writeFile);

(async function() {
  try {
    await writeFile("arquivo.txt", "conteúdo arquivo");
    console.log("arquivo criado com sucesso!");
  } catch (err) {
    console.log(err);
  }
})();

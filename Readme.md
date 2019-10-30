# Promisify

## Definição

O promisify tetifica funções que precisam de callback. O node acima do 8 criou
uma função no próprio core para facilitar. Está no módulo `util` do Node.

Muitas callbacks são escritas sob a forma de _Promises_, e o código acaba
ficando grande. Daí veio o promisify para reduzir essas promisses.

## Callbacks

O Node possui muitas funções com callback. Isto quer dizer que são funções que
esperam um tratamento de erro como sendo último parâmetro da função.

Ex de uma callback:

```
const { writeFile } = require("fs");

writeFile("arquivo.txt", "conteúdo do arquivo", err => {

  if (err) return console.log(err);

  console.log("arquivo criado com sucesso!");
});
```

## Promissificando uma callback

```
const { writeFile } = require("fs");

function criaArquivo(nome, conteudo) {
  return new Promise((resolve, reject) => {
    writeFile("arquivo.txt", "conteúdo do arquivo", err => {
      if (err) return reject(err);
      resolve();
    });
  });
}
criaArquivo()
  .then(() => console.log("arquivo criado com sucesso!"))
  .catch(err => console.log(err));
```

## Usando promisify

```
const { promisify } = require("util"); // importou promisify do módulo util
const { writeFile } = require("fs");

const writeFilePromisificado = promisify(writeFile);

writeFilePromisificado("arquivo.txt", "conteúdo arquivo")
  .then(() => console.log("arquivo criado com sucesso!"))
  .catch(err => console.log(err));
```

## Usando promisify + async await

```
const { promisify } = require("util");

const writeFile = promisify(require("fs").writeFile);

(async function() {
  try {
    await writeFile("arquivo.txt", "conteúdo arquivo");
    console.log("arquivo criado com sucesso!");
  } catch (err) {
    console.log(err);
  }
})();
```

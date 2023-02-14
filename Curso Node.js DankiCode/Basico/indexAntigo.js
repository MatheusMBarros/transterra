const http = require('http')//importando do node para criar o servidor
const fs = require('fs'); // manipula arquivos
const read = require()
const hostname = "127.0.0.1"; // localhost

const port = "3000"; // define a porta que o servidor vai rodar



//Cria novo arquivo
fs.writeFileSync('Barros.txt', 'Teste Barros', (err) => {
    if (err) throw err;
    console.log('O arquivo foi lido com sucesso')
})

//Cria novo arquivo ou insete o conteúdo depois do que ja existe
fs.appendFile('Barros.txt', "\noutro conteudo" , (err) => {
    if(err) throw err
    console.log('Conteudo adicionado')
})



//Cria servidor
const server = http.createServer((require, response) => {

    if (require.url == '/barros') {
        fs.readFile('index.html', (err,data) => {
        response.writeHead(200, { 'Contet-Type': 'text/html' }) // lendo arquivo
        response.write(data);
        return response.end();
        })
   } else {
        console.log('acesso negado')
        return response.end()
        }


})


//lendo arquivos
// fs.readFile('index.html', (err, data) => {
//     if (err) throw err
//     console.log(data.toString())

// })

// lendo e splitando o arquivo
// fs.readFile('Barros.txt', (err, data) => {
//     if (err) throw err

//     let str = data.toString()

//     let newStr = str.substring(0,3)

//     console.log(newStr)

// })



// informa a porta e o hostname que o servidor vai ouvir e retorna um callback
server.listen(port, hostname, () => {
    console.log("Servidor está rodando");
})


//deleta
// fs.unlink('Barros.txt', (err) => {
//     console.log('deletado')
// })

//rename
fs.rename('Barros.txt', 'Renomeado.html', function (err) {
    console.log('Renomeado')
})

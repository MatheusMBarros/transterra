const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Qual é seu nome?', function (name) {
    console.log('O nome do usuario é' + name)
})

rl.on('close', () => {
    console.log('Adeus!')
    process.exit(0);
})

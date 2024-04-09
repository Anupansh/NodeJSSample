const Logger = require('./logger.js')
const http = require('http')

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.write('Hello world')
        res.end()
    }
    if (req.url === '/courses/link') {
        res.write('Printing Array' + JSON.stringify([1,2,3,4,5,6]))
        res.end()
    }
})

server.listen(3000)

console.log('Listening to port 3000')

// const logger = new Logger()

// logger.on('eventTriggered',(args) => {
//     var sum = 0
//     for (let index = 0; index < args.length; index++) {
//         sum += args[index]
//     }
//     console.log(`Sum is: ${sum}`)
// })

// logger.log('Welcome to addition of arrays')
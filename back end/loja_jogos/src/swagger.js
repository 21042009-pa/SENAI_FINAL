const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info:{
        title:"API Loja de Jogos",
        description: 'Documentação automática da API loja de jogos utilizando Swagger Autogen',
        version: '1.0.0'
    },
    host: 'localhost:3001',
    schemes: ['http'],

    
}

const outputFile =  './swagger_output.json'
const endpointsFiles = ['./src/routes/index.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    console.log("Documentação do swagger gerada com sucesso!")
})
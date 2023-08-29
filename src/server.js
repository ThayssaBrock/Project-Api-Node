// const express = require('express')
import express from 'express'
import bodyParser from 'body-parser'

import {PORT} from './config.js'
import logger from './middlewares/logger.js'

import userRoute from './router/userRoute.js'
import productRoute from './router/productRoute.js'

const api = express()

// Middlewares
api.use(logger)
//pega o body e transforma o json em objeto
api.use(bodyParser.json())

api.get('/', (req, res)=>{   
    res.json({message: "Bem-vindo a API"})
})

api.use('/user', userRoute)
api.use('/product', productRoute) 

api.all('*', (req, res)=>{
    res.status(404).json({message: "Rota não encontrada!"})
})

api.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})
const express = require ('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize') 

//config 
    //template engine
    app.engine('handlebars', handlebars.engine({defaultlayout:'main'})) // novas versões do handlebars necessitam do acrescimo do ".engine" antes de declarar a função para funcionar.
    app.set('view engine', 'handlebars') // defininfo defoutltlayout como main, poderão ser feito incrementos em HTML(nesse caso) não será necessário chamar toda a estrutura html.
  
    
    app.use(express.urlencoded({extended:false}))
    app.use(express.json())
    
    // criando conexão com o banco de dados
const sequelize = new Sequelize('handlebars', 'root', '20020976',{
    host:'localhost', 
    dialect: 'mysql' // driver instalado myslq2
})
//ROTAS 
    app.get('/cad', function(req,res){
        res.render('formulario') // chamando a renderização do arquivo formulario.handlebanders
    })
    app.post('/comprar' ,function(req,res){
        res.send("Moeda:"+req.body.moeda+ " Quantidade:"+req.body.quantidade)
    })

app.listen('3001', function(){
    console.log('servidor rodando na porta 3001')
})
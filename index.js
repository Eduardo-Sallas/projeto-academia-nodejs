/* Projeto sendo inicializado, Estrutura CRUD montada, porém não atribuida ao mongodb, pois será necessário montar a estrutura
do banco com classes e relacionamentos */

const express = require('express'); // Realizando importacao do express

const server = express();

server.use(express.json()); // Informando que o express vai receber formato de json

const users = ["Luan", "Eduardo", "Vinicius"]

// Fazendo conexão local com o servidor
server.get('/users', (req, res) =>{
    ;
    return res.json({users});
});


/* PARA VERIFICAR AS REQUISIÇÕES DO CRUD, É NECESSÁRIO UTILIZAR O POSTMAN, VISTO QUE AINDA NÃO SUBIMOS UM BANCO DE DADOS*/

// Criando metodo POST

server.post('/users', (req, res) =>{
    const { name } = req.body

    users.push(name)

    return res.json(users);
});

// Editar Usuário

server.put('/users/:index', (req, res) =>{
    const { index } = req.params
    const { name } = req.body

    users[index] = name

    return res.json(users);
});

// Deletar Usuário

server.put('/users/:index', (req, res) =>{

    users.splice(index, 1) // metodo splice percorre todo array até chegar o indice desejado para realizar o delete
   
});


server.listen(3000); //Escutando a porta 3000 no servidor.
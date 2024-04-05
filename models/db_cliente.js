const { DataTypes } = require('sequelize')

const conn = require('../controllers/connection')

const Cliente = conn.define('Cliente', {
    CPF: {
        type: DataTypes.STRING,primaryKey: true,
        allowNull: false,
    },
    Nome: {
        type: DataTypes.STRING,
        allowNull:false,
    
    },
    Endereco: {
        type: DataTypes.STRING,
   
    },
    Telefone: {
        type: DataTypes.STRING,
   
    },
    Email: {
        type: DataTypes.STRING,
   
    },
})

module.exports = Cliente
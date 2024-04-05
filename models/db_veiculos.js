const { DataTypes } = require('sequelize')

const conn = require('../controllers/connection')

const Veiculo = conn.define('Veiculo', {
    Placa: {
        type: DataTypes.STRING,primaryKey: true,
        allowNull: false,
    },
    Marca: {
        type: DataTypes.STRING,
        allowNull:false,
    
    },
    Modelo: {
        type: DataTypes.STRING,
   
    },
    Ano: {
        type: DataTypes.STRING,
   
    },
})

module.exports = Veiculo
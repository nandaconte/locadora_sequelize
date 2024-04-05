const { DataTypes } = require('sequelize')

const conn = require('../controllers/connection')

const Reserva = conn.define('Reserva', {
    IdReserva: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CPF: {
        type: DataTypes.STRING,
        allowNull:false,
    
    },
    Placa: {
        type: DataTypes.STRING,
        allowNull:false,
   
    },
    DataInicio: {
        type: DataTypes.DATEONLY,
   
    },
    DataFim: {
        type: DataTypes.DATEONLY,
   
    },
})

module.exports = Reserva
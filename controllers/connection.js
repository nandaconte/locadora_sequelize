const {Sequelize } = require('sequelize')

const sequelize = new Sequelize('locadora_sequelize', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log('Conectamos com o Sequelize!')
  } catch (error) {
    console.error('Não foi possível conectar:', error)
  }
  
module.exports = sequelize
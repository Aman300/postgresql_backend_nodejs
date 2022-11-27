
const {Sequelize} = require('sequelize')
module.exports = (sequelize, DataType) =>{
    const Users = sequelize.define('users', {

        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
          },

        email:{
            type: Sequelize.STRING,
            unique: true
        },

        password:{
            type: Sequelize.STRING,
            unique: true
        }

    },{
        timestamps: true,
        //tableName: 'userdata',
        //updatedAt: false,
        //enging: 'MYISAM',
    
    })

    return Users;
}
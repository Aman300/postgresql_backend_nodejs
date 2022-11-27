
const {Sequelize} = require('sequelize')
module.exports = (sequelize, DataType) =>{
    const UserProfile = sequelize.define('userprofile', {

        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
          },

        userId:{
            type: Sequelize.STRING
        },

        first_name:{
            type: Sequelize.STRING,
        },
        last_name:{
            type: Sequelize.STRING
        },

        age:{
            type: Sequelize.INTEGER
        },
        gender:{
            type: Sequelize.STRING
        },
        message:{
            type: Sequelize.STRING
        }

    },{
        timestamps: true,
        //tableName: 'userdata',
        //updatedAt: false,
        //enging: 'MYISAM',
    
    })

    return UserProfile;
}
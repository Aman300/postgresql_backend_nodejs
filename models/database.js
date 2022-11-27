const {Sequelize, DataTypes} = require('sequelize')

const  sequelize = new Sequelize('database', 'postgres','root',{
    host: 'localhost',
    dialect: 'postgres',
})
sequelize.authenticate()
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log("error" + err)
})



const db = {};


db.Sequelize = Sequelize;

db.sequelize = sequelize;


db.users  = require('./users')(sequelize, DataTypes)

db.userprofile  = require('./userProfile')(sequelize, DataTypes)




db.users.hasOne(db.userprofile,{foreignKey: 'userId'});
db.userprofile.belongsTo(db.users,{foreignKey: 'userId'});

db.sequelize.sync({force: false})
.then(()=>{
    console.log("yes re sync")
})

module.exports = db;
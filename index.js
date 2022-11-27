const express = require('express')

const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())



require('./models/database')

const {createUser, getUser, deleteUser, updateUser} = require('./controllers/userController')

const {createUserProfile, oneToOne} = require('./controllers/userProfieController')

app.get('/', (req,res)=>{
    res.send("server is running ")
})


app.post('/createUser', createUser)

app.get('/getUser', getUser)

app.delete('/deleteUser/:id', deleteUser)

app.put('/updateUser/:id', updateUser)




////////////////////////////////////////////



app.post('/createUserProfile', createUserProfile)

app.get('/oneToOne', oneToOne)








app.listen(process.env.PORT || 3000, ()=>{
    console.log("express is connected for this", 3000)
})
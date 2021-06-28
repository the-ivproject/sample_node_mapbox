const express = require('express')
const path = require('path')

const app = express()

const public = path.join(__dirname, './public/')
app.use(express.static(public))

app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

app.set('view engine', 'ejs')
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log('APP Run on Port 3000')
})
app.get('/', (req,res) => {
    let data = 'testing'
    res.render('index',{data:data})
})

const express =require("express");
const path =require("path");
const app = express();
const port = 8000;

app.use(express.urlencoded())
app.use('/static',express.static('static'))

app.set('view engine', 'pug')
app.set('views',path.join(__dirname,'views'))
 
app.get('/', (req, res) => {
    const paths={}
    res.render('homepage.pug', paths)
})
 app.get('/loginpage.pug', (req, res) => {
    const paths={}
    res.render('loginpage.pug', paths)
 })
app.get('/registerpage.pug', (req, res) => {
    const paths={}
     res.render('registerpage.pug', paths)
 })
app.listen(port,()=>{
    console.log(`this application is started sucesfully ${port}`)
})  


  
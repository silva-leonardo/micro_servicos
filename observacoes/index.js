const express = require ('express')
const app = express()
//erro comum: esquecer de chamar a função
//json 
//não faça isso: app.use(express.json)
app.use(express.json())

//localhost:5000/lembretes/123456/observacoes
app.post('/lembretes/:id/observacoes', (req, res) => {

})

//localhost:5000/lembretes/abcd/observacoes
app.get('/lembretes/:id/observacoes', (req, res) => {

})

app.listen(5000, () => console.log('Observações. Porta 5000.'))
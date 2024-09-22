const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());  


const equipe = JSON.parse(fs.readFileSync('equipe.json', 'utf-8'));


app.get('/equipe.json', (req, res) => {
    const { especialidade, nome } = req.query;
    let resultado = equipe;


    if (especialidade) {
        resultado = resultado.filter(prof => prof.especialidade.toLowerCase() === especialidade.toLowerCase());
    }

    if (nome) {
        resultado = resultado.filter(prof => prof.nome.toLowerCase().includes(nome.toLowerCase()));
    }

    res.json(resultado);
});

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});

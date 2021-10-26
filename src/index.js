const express = require('express');
const cors = require('cors');

//Porta em que o backend roda
const port = process.env.PORT || 3333; 

const app = express();

app.use(cors());
app.use(express.json());

app.get('/' , (request, response) => {
  return response.json({
    evento: "Semana Omni Stack",
    aluno: "eu"
  })
})

app.listen(port, () => {
  console.log('Server listening on port ' + port);
})


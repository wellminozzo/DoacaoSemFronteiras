const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


/** GET = BUSCAR INFO DO BACK-END 
 * POST = CRIAR INFO NO BACK-END
 * PUT = ALTERAR INFO NO BACK-END
 * DELETE = DELETAR INF NO BACK-END
 * 
*/

/**
 * Tipos parametros
 * Query Params : enviados para a rota após "?" (filtros, paginação)
 * Route Params: utilizado para identifcar recursos
 * Rquest Body: utilizado para criar ou alterar recursos
 */



app.listen(3333);
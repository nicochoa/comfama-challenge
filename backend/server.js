const express = require('express');
const app = express();
const port = '4000';
const animeRoutes = require('./src/routes/anime');
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use('/anime', animeRoutes);
app.use((err, req, res, next) => {
    if (!err) {
        return next();
    }
    console.log(JSON.stringify(err));
    return res.status(500)
        .json("Se ha producido un error inesperado.");
});


app.listen(port , () => console.log(`Se ha iniciado en el puerto ${port}`))
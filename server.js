const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();
const port = 3000;

const imagesPath = path.join(__dirname, '/views');

app.use(session({ secret: 'test', resave: false, saveUninitialized: true }));
app.set('view engine', 'ejs');
app.use(express.static(imagesPath)); // Используем express.static для обслуживания статических файлов из папки с изображениями
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => 
{
    res.render('index');
}
);

app.listen(port, '0.0.0.0', () => {
    console.log(`Listening at :${port}`);
});
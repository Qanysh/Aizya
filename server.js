const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const { registerPost } = require('./controllers/registerController');
const { loginPost } = require('./controllers/loginController');
const { User, Event } = require('./database/db');
const eventRoutes = require('./routes/eventRoutes');

const app = express();
const port = 3000;

const imagesPath = path.join(__dirname, '/views');

app.use(session({ secret: 'test', resave: false, saveUninitialized: true }));
app.set('view engine', 'ejs');
app.use(express.static(imagesPath)); // Используем express.static для обслуживания статических файлов из папки с изображениями
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use('/api', eventRoutes);

app.get('/', async (req, res) => {
    const userId = req.session?.userId;

    const user = await User.findById(userId);
    if (userId) {
        return res.render('index', { user: await User.findById(userId) });
    }

    res.render('index', { user });
}
);

app.get('/menu', async (req, res) => {
    res.render('pages/menu');
}
);

app.get('/first_meeting', async (req, res) => {
    res.render('pages/f_meeting');
});

app.get('/calendar', async (req, res) => {
    res.render('pages/calendar');
});

app.get('/login', (req, res) => {
    res.render('pages/login', { user: null, error: null });
});

app.post('/login', async (req, res) => {
    return loginPost(req, res);
});

app.get('/signup', (req, res) => {
    res.render('pages/signup', { user: null, error: null, success: null });
});

app.post('/signup', async (req, res) => {
    return registerPost(req, res);
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Listening at :${port}`);
});
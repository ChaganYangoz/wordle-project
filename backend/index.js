const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const turkce = require("turkce");
const createError = require('http-errors');

const app = express();

mongoose.set('strictQuery', false);
const key =
        'mongodb+srv://theozkan1905:twofun1905@cluster0.iie94iy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


let usersRouter = require('./routes/UserRouter');
app.use('/user', usersRouter);


app.use(function (req, res, next) {
    next(createError(404, 'Not Found'));
});

// Error handling
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.send('error');
});

async function startServer() {
    try {
        await mongoose.connect(key);
        console.log('MongoDB bağlantısı başarıyla kuruldu.');

        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Sunucu ${port} portunda çalışıyor.`);
        });
    } catch (error) {
        console.error('MongoDB bağlantısı sırasında bir hata oluştu:', error);
    }
}

(async () => {
  try {
    const sonuc = await turkce("maljk");
    console.log(sonuc);
  } catch (e) {
    console.error(e);
  }
})();

startServer();

module.exports = app;

const express = require('express');
const mongoose = require('mongoose');
const app = express();


mongoose.set('strictQuery', false);
const key =
	'mongodb+srv://theozkan1905:twofun1905@cluster0.np0ed2c.mongodb.net/yazlab2?retryWrites=true&w=majority';
main().catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

let usersRouter = require('./routes/UsersRouter');
app.use('/users', usersRouter);

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

async function main() {
	await mongoose.connect(key);
}

module.exports = app;
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const turkce = require("turkce");
const createError = require("http-errors");
const GameManager = require("./gameManager");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

mongoose.set("strictQuery", false);
const key =
  "mongodb+srv://theozkan1905:twofun1905@cluster0.iie94iy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
  console.log("Bir kullanıcı bağlandı");

  socket.on("disconnect", () => {
    console.log("Bir kullanıcı ayrıldı");
  });
});

server.listen(8000, () => {
  console.log("Sunucu çalışıyor. Port: 8000");
});
let usersRouter = require("./routes/UserRouter");
app.use("/user", usersRouter);

const gameManager = new GameManager(); // GameManager sınıfından bir örnek oluşturun
// 4 adet oda oluşturma
for (let i = 1; i <= 4; i++) {
  const roomId = `room${i + 3}`;
  gameManager.createRoom(roomId);
}
// Örnek olarak, bir oyuncuyu bir odaya eklemek için bir endpoint
app.post("/add-player-to-room", (req, res) => {
  const { roomId, playerId } = req.body;
  try {
    gameManager.addPlayerToRoom(roomId, playerId);
    res.status(200).json({ message: "Oyuncu odaya eklendi." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.use(function (req, res, next) {
  next(createError(404, "Not Found"));
});
// Error handling
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.send("error");
});

async function startServer() {
  try {
    await mongoose.connect(key);
    console.log("MongoDB bağlantısı başarıyla kuruldu.");

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Sunucu ${port} portunda çalışıyor.`);
    });
  } catch (error) {
    console.error("MongoDB bağlantısı sırasında bir hata oluştu:", error);
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

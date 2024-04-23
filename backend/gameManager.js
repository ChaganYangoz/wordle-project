class GameManager {
  constructor() {
    this.rooms = new Map(); // Oyun odalarını tutacak bir Map
    this.maxPlayersPerRoom = 2; // Her odada maksimum oyuncu sayısı
  }

  // Yeni bir oda oluşturma
  createRoom(roomId) {
    if (this.rooms.has(roomId)) {
      throw new Error("Bu oda zaten var.");
    }
    this.rooms.set(roomId, { players: new Set(), guesses: new Map() });
  }

  // Odaya oyuncu ekleme
  addPlayerToRoom(roomId, playerId) {
    const room = this.rooms.get(roomId);
    if (!room) {
      throw new Error("Oda bulunamadı.");
    }
    if (room.players.size >= this.maxPlayersPerRoom) {
      throw new Error("Oda dolu.");
    }
    room.players.add(playerId);
    console.log("Oyuncu eklendi");
  }

  // Tahmin kontrolü ve diğer metotlar...
}

module.exports = GameManager;

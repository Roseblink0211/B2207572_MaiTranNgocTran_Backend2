// BACKEND_2/app/utils/mongodb.util.js
const { MongoClient } = require("mongodb");

class MongoDB {
  static client;

  static async connect(uri) {
    if (this.client) return this.client; // dùng lại connection cũ
    this.client = await MongoClient.connect(uri);
    return this.client;
  }
}

module.exports = MongoDB; // ⬅️ export class (KHÔNG dùng exports = ...)

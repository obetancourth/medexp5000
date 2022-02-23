const ObjectId = require('mongodb').ObjectId;
const getDb = require('../mongodb');

let db = null;
class Usuarios {
  collection = null;
  constructor() {
    getDb()
      .then((database) => {
        db = database;
        this.collection = db.collection('Usuarios');
        if (process.env.MIGRATE === 'true') {
          // Por Si se ocupa algo
        }
      })
      .catch((err) => { console.error(err) });
  }

  async new(email, password, roles = []) {
    const newUsuario = {
      email,
      password,
      roles:[...roles, 'public'],
    };
    const rslt = await this.collection.insertOne(newPaciente);
    return rslt;
  }

  async getAll() {
    const cursor = this.collection.find({});
    const documents = await cursor.toArray();
    return documents;
  }
  async getFaceted(page, items, filter = {}) {
    const cursor = this.collection.find(filter);
    const totalItems = await cursor.count();
    cursor.skip((page - 1) * items);
    cursor.limit(items);
    const resultados = await cursor.toArray();
    return {
      totalItems,
      page,
      items,
      totalPages: (Math.ceil(totalItems / items)),
      resultados
    };
  }
  async getById(id) {
    const _id = new ObjectId(id);
    const filter = { _id };
    console.log(filter);
    const myDocument = await this.collection.findOne(filter);
    return myDocument;
  }
}

module.exports = Usuarios;

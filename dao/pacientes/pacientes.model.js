const getDb = require('../mongodb');
let db = null;
class Pacientes {
  collection = null;
  constructor() {
    getDb()
      .then((database) => {
        db = database;
        this.collection = db.collection('Pacientes');
        if (process.env.MIGRATE === 'true') {
          // Por Si se ocupa algo
        }
      })
      .catch((err) => { console.error(err) });
  }

  async new(nombres, apellidos, identidad, telefono, correo) {
    const newPaciente = {
      nombres,
      apellidos,
      identidad,
      telefono,
      correo
    };
    const rslt = await this.collection.insertOne(newPaciente);
    return rslt;
  }

  async getAll() {
    
  }

  async getById(id) {
    
  }

  async updateOne(id, nombres, apellidos, identidad, telefono, correo) {
    
  }

  async deleteOne(id) {
    
  }
}

module.exports = Pacientes;

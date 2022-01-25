const getDb = require('../db');
let db = null;
class Pacientes {

  constructor() {
    getDb()
    .then( (database) => {
      db = database;
      if (process.env.MIGRATE === 'true') {
        const createStatement = 'CREATE TABLE IF NOT EXISTS pacientes (id INTEGER PRIMARY KEY AUTOINCREMENT, identidad TEXT, nombre TEXT, apellidos TEXT, email TEXT, telefono TEXT);';
        db.run(createStatement);
      }
    })
    .catch((err) => { console.error(err)});
  }

  new ( nombres, apellidos, identidad, telefono, correo) {
    return new Promise( (accept, reject)=> {
      db.run(
        'INSERT INTO pacientes (identidad, nombre, apellidos, email, telefono) VALUES (?, ?, ?, ?, ?);',
        [identidad, nombres, apellidos, correo, telefono],
        (err, rslt)=>{
          if(err) {
            console.error(err);
            reject(err);
          }
          accept(rslt);
        }
      );
    });
  }
}

module.exports = Pacientes;

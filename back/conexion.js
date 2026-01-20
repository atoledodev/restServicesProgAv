var mysql = require("mysql2");

var pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "localadmin123",
  database: "apirest",
});

var getConnection = function (cb) {
  pool.getConnection(function (err, connection) {
    if (err) {
      console.error("Error de conexión con la DB:", err.message);
      console.error("Código:", err.code);
      return cb(err);
    }
    cb(null, connection);
  });
};

module.exports = getConnection;

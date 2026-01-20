const express = require("express");
const router = express.Router();
const getConnection = require("../conexion");

// Obtener usuario por su cédula
router.get("/userByCI/:cedula", (req, res) => {
  getConnection((err, conn) => {
    const { cedula } = req.params;
    if (err) {
      return res.status(500).send("No se puede conectar a la base de datos");
    }
    conn.query(
      "SELECT * FROM usuario WHERE cedula = ?",
      [cedula],
      function (err, rows) {
        if (err) {
          conn.release();
          return res.status(400).send("No se encontró el usuario");
        }
        res.send(rows);
        conn.release();
      },
    );
  });
});

// Consultar todos los usuarios
router.get("/getAllUsers", (req, res) => {
  getConnection(function (err, conn) {
    if (err) {
      return res.status(500).send("No se puede conectar a la base de datos");
    }
    conn.query("SELECT * FROM usuario", function (err, rows) {
      if (err) {
        conn.release();
        return res
          .status(500)
          .send("No se puede realizar la consulta de los usuarios");
      }
      res.send(rows);
      conn.release();
    });
  });
});

// Insertar usuario
router.post("/createUser", (req, res, next) => {
  const data = {
    nombre: req.body.nombre,
    cedula: req.body.cedula,
    telefono: req.body.telefono,
    direccion: req.body.direccion,
    email: req.body.email,
  };
  const query =
    "INSERT INTO usuario (nombre, cedula, telefono, direccion, email) VALUES (?, ?, ?, ?, ?)";
  const params = [
    data.nombre,
    data.cedula,
    data.telefono,
    data.direccion,
    data.email,
  ];

  getConnection((err, conn) => {
    if (err) {
      console.log("No se puede conectar a la base de datos, error:" + err);
    }
    conn.query(query, params, function (err, result) {
      if (!err) {
        res.json({ status: "Registro exitoso" });
      } else {
        console.log(err);
      }
      conn.release();
    });
  });
});

// Obtener usuario por su cedula
router.get("/getUserById/:id", (req, res) => {
  getConnection((err, conn) => {
    const { id } = req.params;
    if (err) {
      return res.status(500).send("No se puede conectar a la base de datos");
    }
    conn.query(
      "SELECT * FROM usuario WHERE id = ?",
      [id],
      function (err, rows) {
        if (err) {
          conn.release();
          return res.status(400).send("No se encontró el usuario");
        }
        res.send(rows);
        conn.release();
      },
    );
  });
});

// Actualizar datos de un usuario
router.put("/updateUser/:id", (req, res) => {
  getConnection((err, conn) => {
    const { id } = req.params;
    if (err) {
      return res.status(500).send("No se puede conectar a la base de datos");
    }
    conn.query(
      "UPDATE usuario SET ? WHERE id = ?",
      [req.body, id],
      function (err, result) {
        if (err) {
          conn.release();
          return res.status(400).send("Error al actualizar usuario");
        }
        res.send({ message: "Usuario actualizado" });
        conn.release();
      },
    );
  });
});

module.exports = router;

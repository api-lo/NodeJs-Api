const express = require('express');
const router = express.Router();
const mysqlConnection  = require('../database.js');


// GET all Employees
router.get('/Ngeneros', (req, res) => {
  mysqlConnection.query('SELECT *from Ngeneros ', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});
router.get('/gDiagnostico', (req, res) => {
  mysqlConnection.query('SELECT Diagnosticos from examenes', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});
router.get('/Ndiagnosticos', (req, res) => {
  mysqlConnection.query('SELECT *from Ndiagnostico ', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});
router.get('/Canios', (req, res) => {
  mysqlConnection.query('SELECT*From Canios2', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});
router.get('/promedios', (req, res) => {
  mysqlConnection.query('SELECT *FROM promedios; ', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});
// GET An Employee
router.get('/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM examenes WHERE ID = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});
router.post('/insert', (req, res) => {
  //const { FechaCompra, codigo,categoria,unidades,cantidad,precio} = req.body; 
  //console.log(Nombre, FechaCompra, codigo); 
  const query = "INSERT INTO "+
  "`insumo`( `Nombre`, `codigo`, `categoria`, `unidades`, `cantidad`, `precio`)"+
  " VALUES ('"+req.body.Nombre+"','"+req.body.Nombre+"','"+req.body.Nombre+"','"+req.body.Nombre+"','"+req.body.Nombre+"','"+req.body.Nombre+"')";
  mysqlConnection.query(query,
     (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Guardado Saved'});
    } else {
      console.log(err);
    }
  });

});
// INSERT An Employee
/*router.post('/', (req, res) => {
  const {id, name, salary} = req.body;
  console.log(id, name, salary);
  const query = `
    SET @id = ?;
    SET @name = ?;
    SET @salary = ?;
    CALL employeeAddOrEdit(@id, @name, @salary);
  `;
  mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Employeed Saved'});
    } else {
      console.log(err);
    }
  });

});
router.put('/:id', (req, res) => {
  const { name, salary } = req.body;
  const { id } = req.params;
  const query = `
    SET @id = ?;
    SET @name = ?;
    SET @salary = ?;
    CALL employeeAddOrEdit(@id, @name, @salary);
  `;
  mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Employee Updated'});
    } else {
      console.log(err);
    }
  });
});
*/
module.exports = router;

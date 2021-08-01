const express = require('express');
const router = express.Router();
const mysqlConnection  = require('../database.js');

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
  mysqlConnection.query('SELECT`Leucocitos`,`Hemoglobina`,`Hematocrito`,`Hematies`,`VCM`,`HCM`,`CHCM`,`RDWCV`,`Linfocitos`,`Monocitos`,`Eosinofilos`,`Basofilos`,`VPM`,`Plaquetas` FROM `examenes` WHERE `DNI`=? LIMIT 1', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});
router.post('/insert', (req, res) => {
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

module.exports = router;

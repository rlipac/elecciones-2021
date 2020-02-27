const express = require('express');
const router = express.Router();

const votantesControllers = require('../controller/votosController');


router.get('/', votantesControllers.list);
//router.get('/res', votantesControllers.save);

//router.get('/delete/:id', usuariosControllers.delete);
router.get('/resultados', votantesControllers.result);

router.get('/votar2/:id', votantesControllers.edit);
 router.post('/votar2/', votantesControllers.save);

/*
router.get('/zapatillas', usuariosControllers.listZapatillas);

 router.post('/add', usuariosControllers.save);

router.get('/delete/:id', usuariosControllers.delete);

 router.get('/update/:id', usuariosControllers.edit);
 router.post('/update/:id', usuariosControllers.update);

 router.get('/prueba/', usuariosControllers.prueba);
 */

module.exports = router;
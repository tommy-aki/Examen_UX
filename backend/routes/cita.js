var router = require("express").Router()

const citaCtrl = require("../controllers/cita")

router.get('/list', citaCtrl.getAllCita);
router.post('/new', citaCtrl.createNewCita);

module.exports = router;
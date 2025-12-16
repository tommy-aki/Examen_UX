var router = require("express").Router()

const doctorCtrl = require("../controllers/doctor")

router.get('/list', doctorCtrl.getAllDoctors);

module.exports = router;

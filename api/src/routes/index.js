const { Router } = require("express");
//aca estoy importando las rutas en si:

const cors = require("cors");

const router = Router();

router.use(cors());

module.exports = router;

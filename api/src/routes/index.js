const { Router } = require("express");

const ContactRouter = require("./contact");
const UserRouter = require("./user");
//aca estoy importando las rutas en si:

const cors = require("cors");

const router = Router();

router.use(cors());
router.use("/contact", ContactRouter);
router.use("/user", UserRouter);

module.exports = router;

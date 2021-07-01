const { Router } = require("express");
const ProductRouter = require("./product");
const ContactRouter = require("./contact");
//aca estoy importando las rutas en si:

const cors = require("cors");

const router = Router();

router.use(cors());
router.use("/contact", ContactRouter);
router.use("/product", ProductRouter);

module.exports = router;

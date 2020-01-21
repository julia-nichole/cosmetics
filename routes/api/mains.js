var express = require("express");
var router = express.Router();
var mainsCtrl = require("../../controllers/api/main");

/* GET /api/mains */
router.get("/", mainsCtrl.index);
router.get("/:id", mainsCtrl.show);
router.post("/", mainsCtrl.create);
router.delete("/:id", mainsCtrl.delete);
router.put("/:id", mainsCtrl.update);

module.exports = router;
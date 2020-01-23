const express = require('express');
const router = express.Router();
const catCtrl = require('../controllers/cats');


router.get('/', catCtrl.index);
router.get('/:id', catCtrl.show);
router.post('/', catCtrl.create);
router.delete('/:id', catCtrl.delete);
router.put('/:id', catCtrl.update);

module.exports = router;
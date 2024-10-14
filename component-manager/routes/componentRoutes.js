const express = require('express');
const router = express.Router();
const componentController = require('../controllers/componentController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, componentController.createComponent);
router.get('/', componentController.getComponents);
router.get('/:id', componentController.getComponentById);
router.put('/:id', authMiddleware, componentController.updateComponent);
router.delete('/:id', authMiddleware, componentController.deleteComponent);

module.exports = router;
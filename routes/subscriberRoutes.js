const express = require('express');
const router = express.Router();

// MIDDLEWARE
const getSubscriber = require('../middleware/getSubscriber');

// GET all
router.get('/', require('../controllers/subscriber/getAll'));

// GET one
router.get('/:id', getSubscriber, require('../controllers/subscriber/getOne'));

// CREATE one
router.post('/', require('../controllers/subscriber/createOne'));

// UPDATE one
router.patch('/:id', getSubscriber, require('../controllers/subscriber/updateOne'));

// DELETE one
router.delete('/:id', getSubscriber, require('../controllers/subscriber/deleteOne'));

module.exports = router;
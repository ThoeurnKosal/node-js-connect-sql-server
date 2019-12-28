const { Router } = require('express');
const router = Router();

const {getUsers} = require('../controllers/loan.controller');

router.get('/loans', getUsers);


module.exports = router;
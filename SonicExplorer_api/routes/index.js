var express = require('express');
var router = express.Router();
const userController = require('../controller/user.controller');
const auth  = new userController();
const authenticateToken = require("../middlewares/authentucateToken");

router.post('/login', auth.loginAuth.bind(auth));
router.post('/registro', auth.registroAuth.bind(auth));

router.get('/ruta-protegida', authenticateToken,function(req, res, next) {
  const userData = req.userId;
  res.json({ message: 'Ruta protegida', user: userData });
});


module.exports = router;

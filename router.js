// router.js

// import router
const router = require('express').Router();

// import authController
const auth = require('./controllers/authController');


// Nampilin semua data
router.get('/home/users', auth.findAll);
// Create
router.get('/home/users/new', auth.new);
router.post('/home/users', auth.create);
// Read
router.get('/home/users/:id', auth.show);
// Update
router.get('/home/users/update/:id', auth.update);
router.post('/home/users/update/:id', auth.change);
// Delete
router.get('/home/users/delete/:id', auth.delete);





// export module router
module.exports = router;
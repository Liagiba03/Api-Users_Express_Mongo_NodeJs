const { createUserController, getUsersController, getUserIdController, getUserNameController, setUpdateUserController, deleteUserController } = require('../Controller/usersController');

const router = require('express').Router();;

router.post('/create-user', createUserController);
router.get('/show-all-users',getUsersController);


module.exports = router;


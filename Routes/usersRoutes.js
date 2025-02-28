const { createUserController, getUsersController, getUserIdController, getUserNameController, setUpdateUserController, deleteUserController } = require('../Controller/usersController');

const router = require('express').Router();;

router.post('/create-user', createUserController);
router.get('/show-all-users',getUsersController);
router.get('/show-user/:id',getUserIdController);
router.get('/show-user-name/:name',getUserNameController);
router.post('/update-user/:id', setUpdateUserController);
router.delete('/delete-user/:name',deleteUserController);

module.exports = router;
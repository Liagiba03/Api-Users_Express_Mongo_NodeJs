const { json } = require('express');
const {createUser, getUsers, getUserId, getUserName, 
    setUpdateUser, deleteUser} = require('../Service/usersService.js');
const { use } = require('../Routes/usersRoutes.js');

//CREATE USER
const createUserController= async (req,res)=>{
    const {name, password} = req.body;
    const newUser = await createUser(name, password);
    if(newUser){
        return res.status(201).json(newUser);
    }else{
        return res.status(500)-json({message: 'DB no connected'});
    }
}



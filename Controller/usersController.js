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

//SHOW ALL USERS
const getUsersController = async (req, res)=>{
    const users = await getUsers();
    if(users){
        return res.status(200).json(users);
    }else{
        return res.status(500).json({message: 'DB no connected'});
    }
}

// SHOW USER BY ID
const getUserIdController = async (req, res)=>{
    const {id} = req.params;
    const userId = await getUserId(id);
    if(userId){
        return res.status(200).json(userId);
    }else{
        return res.status(500).json({message: 'DB no connected'});
    }
}


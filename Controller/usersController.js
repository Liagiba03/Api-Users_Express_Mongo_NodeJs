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

// SHOW USER BY NAME
const getUserNameController = async (req, res)=>{
    const {name} = req.params;
    const userName = await getUserName(name);
    console.log(userName);
    if(userName){
        return res.status(200).json(userName);
    }else if (userName === null){
        return res.status(404).json({message: 'User not found'});
    }else{
        return res.status(500).json({message: 'DB no connected'});
    }
}

// UPDATE USER
const setUpdateUserController = async (req, res)=>{
    const {id} = req.params;
    const data = req.body;
    const updateUser = await setUpdateUser(id, data);
    if(updateUser){
        return res.status(200).json(updateUser);
    }else{
        return res.status(500).json({message:`DB no connected`});
    }
}

// DELETE USER
const deleteUserController = async (req, res)=>{
    const {name} = req.params;
    const deletedUser = await deleteUser(name);
    if(deletedUser){
        return res.status(200).json(deletedUser);
    }else{
        return res.status(500).json({message:`DB no connected`});
    }
}

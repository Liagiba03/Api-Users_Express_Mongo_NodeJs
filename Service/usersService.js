const { User } = require("../models/userModel")

// CREATE USERS
const createUser = async (name, password)=>{
    try {
        const newUser = new User({username:name, password:password});
        const savedUser = await newUser.save();
        return savedUser;
    } catch (error) {
        console.log(error);
        return null;
        
    }
}
// SHOW ALL USERS
const getUsers = async ()=>{
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        console.log(error);
        return null;
    }
}
//SHOW USER BY ID
const getUserId = async(id)=>{
    try {
        const userFind = await User.findById(id);
        return userFind;
    } catch (error) {
        console.log(error);
        return null;
    }
}
//SHOW USER BY NAME
const getUserName = async(name)=>{
    try {
        const userFind = await User.findOne({username:name});
        return userFind;
    } catch (error) {
        console.log(error);
        return null;
    }
}
// UPDATE USER
const setUpdateUser = async (id, data) => {
    try {
        const userUpdated = await User.findByIdAndUpdate(id, data, { new: true });
        if (!userUpdated) {
            console.log(`User with ID ${id} not found`);
            return null;
        }
        return userUpdated;
    } catch (error) {
        console.log(`Error updating user with ID ${id}:`, error);
        return null;
    }
}

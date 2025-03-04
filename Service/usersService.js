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

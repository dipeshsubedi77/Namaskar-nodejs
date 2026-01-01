const jwt = require("jsonwebtoken");    
const bcrypt = require("bcrypt");
const { users } = require("../model");
require("../model");

// home controller


exports.handleHome = (req, res) => {
    res.render("home");
}

exports.renderRegister = (req, res) => {
    res.render("auth/register");
}

exports.renderLogin = (req, res) => {
    res.render("auth/login");
}


exports.handleRegister =  async(req, res) => {
    const { username, email, password } =  req.body;

    await users.create({
        username,
        email: email,
        password: bcrypt.hashSync(password, 10)
    });
    
    // Here, you would typically handle user registration logic,
    // such as saving the user to a database.
    console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
    res.send("Registration successful!");
    
}



exports.handleLogin = async(req, res) => {
    const { email, password } = req.body;

    if(!email || !password){
        return res.status(400).send("All fields are required");
    }


const [data]  = await users.findAll({
    where:{
        email: email
    }
})
if(data){
    const isPasswordValid = bcrypt.compareSync(password, data.password);
    const token = jwt.sign({id: data.id}, "your_jwt_secret_key", {expiresIn: "1h"});
    console.log("Generated JWT Token:", token);



    if(isPasswordValid){
        return res.send("Login Successful");
    }
    else{
        return res.status(400).send("Invalid Password");
    }
}
else{
    return res.status(400).send("User not found");
}
}
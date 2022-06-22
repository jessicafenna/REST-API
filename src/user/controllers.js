const User = require("./model");

// after async() - parameters passed are empty variable names,you can call them ANYTHING - but try to be clear and consistent
exports.createUser = async (req, res) =>{ 
    try{ 
        const userObj = {username:req.body.username, 
            email: req.body.email, 
            password: req.body.password}
        const newUser = await User.create(userObj);
        res.send({newUser});
    } catch (error){ 
        console.log(error);
        res.send(error);
    }
}
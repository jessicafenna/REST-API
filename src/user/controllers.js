const User = require("./model");

// after async() - parameters passed are empty variable names,you can call them ANYTHING - but try to be clear and consistent
exports.createUser = async (res, req) =>{ 
    try{ 
        console.log (req, res);
        res.send({message:"End of controller"})
    } catch (error){ 
        console.log(error);
        res.send(error);
    }
}
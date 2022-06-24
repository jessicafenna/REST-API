const bcrypt = require("bcryptjs")
const User = require("../user/model");

exports.hashPassword = async (req, res, next) =>{ 
    try { 
        //if you use dot notation - probably an object - object property accessing (or dot notation allows us to use methods on a data type e.g. req.length())
        req.body.password = await bcrypt.hash(req.body.password, 8);
        next();
        // this moves onto the next function, otherwise this function would never finish running (because of how express works) 
    } catch (error){ 
        console.log(error);
        res.send({error:error.code})
    }
}
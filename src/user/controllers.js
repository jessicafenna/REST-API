const User = require("./model");

// after async() - parameters passed are empty variable names,you can call them ANYTHING - but try to be clear and consistent
exports.createUser = async (req, res) =>{ 
    try{ 
        const userObj = {
            username:req.body.username, 
            email: req.body.email, 
            password: req.body.password}
        //mongoose method to create entry in database = create() - we pass an object through the parameters 
        const newUser = await User.create(userObj);
        res.send({newUser});
    } catch (error){ 
        console.log(error);
        res.send({error});
    }
}


//in thunderclient remember you need to change type of request (following is a delete not post etc)
exports.deleteUser = async (req, res) => { 
    try{
        await User.deleteOne(req.params.username)
        console.log("user deleted")
        res.send();
    } catch (error){ 
        console.log(error)
        res.send({error});
    }} 

//note to self - the update function wasn't working for ages, killed server and it worked again 
exports.updateUser = async (req, res) => { 
    try{ 
        const userObj = { 
            username: req.body.username,
            updatedUsername: req.body.updatedUsername
        }; 
        console.log(userObj);
        let response = await User.findOneAndUpdate({
            username:userObj.username
            
        }, {
            $set: {
                username: userObj.updatedUsername
            }
            
        }, { 
            new: true 
        })
        await User.findOne({username:userObj.updatedUsername})
        //send the data back 
        res.json(response);
        
    } catch (error){ 
        console.log(error);
        res.send({error});
    }
}
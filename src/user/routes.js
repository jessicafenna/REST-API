const { Router } = require ("express"); 
const userRouter = Router(); 
const { createUser, deleteUser, updateUser } = require ("./controllers");
const {hashPassword} = require("../middleware");

// createUser don't use () - it will try to auto run it - but without () - it is waiting until the it hits user and then runs it 
userRouter.post("/user", hashPassword, createUser);


userRouter.delete("/user", deleteUser)

userRouter.put("/user", updateUser);

module.exports = userRouter;
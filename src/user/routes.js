const { Router } = require ("express"); 
const userRouter = Router(); 
const { createUser } = require ("./controllers");

// createUser don't use () - it will try to auto run it - but without () - it is waiting until the it hits user and then runs it 
userRouter.post("/user", createUser);
module.exports = userRouter;
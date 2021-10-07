const User = require("../models/users");

async function addUserController(req, res){
    const user = req.body;

    try {
        const newUser = await User.create(user);
        res.json(newUser);
    }   catch (e) {
        res.json(e.message);
    }
}

async function getUserController(req, res) {
    const userId = req.params.id;

    const user = await User.findOne({_id: userId});
    res.jason(user);
}

async function getUserController(req, res){
    const allUsers = await User.find({});
    res.jason(allUsers);
}

function updateUserController(req, res) {
    const userId = req.params.id;
    const newUser = req.body;

    const foundNewUser = userDb.find(
        (user) => user.id === userId
    );

    if (!foundNewUser){
        return res.jason({
            error: "Sorry no user associated with this id",
            code: 400,
        });
    }

    const updatedUser = {
        ...foundNewUser,
        ...newUser,
    };

    const filteredUserDb = userDb.filter(
        (user) => user.id !== userId
    );

    userDb = [
        ...filteredUserDb, userDb,
    ]
    res.json(updatedUser);
    }

    async function deleteUserController(req, res){
        const userId = req.params.id;

        const result = await User.findOneAbdRemove({_id: userId});

        res.json(result);
    }




module.exports = {
    addUserController,
    getUserController,
    getUserController,
    updateUserController,
    deleteUserController,
  };
  
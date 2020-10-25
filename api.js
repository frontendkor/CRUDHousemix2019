const express = require("express");
const router = express.Router();
const User = require("./user")

// =======================================================
// Secondary functions
// =======================================================
const sendDataUser = (userData, res) => {
    delete userData.user.password;
    delete userData.user.cart;
    // console.log(userData);
    res.send(userData);
}

const recordJWT = (userData, req, res) => {
    const JWT = `${userData.user.login}#${userData._id}`
    if(userData.user.password === req.body.password){
        User.findByIdAndUpdate({_id: userData._id}, {jwt: JWT})
        .then(() => {
            User.findOne({_id: userData._id})
                .then((data) => {
                    let userDataNew = {...data._doc};
                    // console.log(userDataNew);
                    sendDataUser(userDataNew, res)
                })
        })
    }
}



// Registration ==========================================
router.post('/users', (req,res) => {
    // console.log(req.body);
    User.find( {"user.login": req.body.login } )
   .then((data) => {
        if(data.length){
            // console.log("Error login");
           res.send({err: "Логин занят"})
        } else {
            User.create({user: req.body})
                .then((data) => {
                    let userData = {...data._doc};
                    // console.log(userData);
                    sendDataUser(userData, res);
                })
        }
    })
});

// Auth ====================================================
router.post('/users/user/:login', (req,res) => {
    // console.log(req.body);
   User.find( {"user.login": req.body.login, "user.password": req.body.password } )
   .then((data) => {
        if(data.length){
            let userData = {...data[0]._doc};
            // console.log(userData);
            recordJWT(userData, req, res);
        } else {
           res.send(404)
        }
    })
});



// Rewrite ===================================================
router.put('/users/user/:id', (req,res) => {
    console.log(req.body);
    if(req.body.password){
        User.findByIdAndUpdate({_id: req.params.id}, {"user": req.body })
        .then(() => {
            User.findOne({_id: req.params.id})
            .then(data => res.send(data))
        })
    } else {
        User.findOne( {_id: req.params.id} )
        .then((data) => {
                if(data){
                req.body.password = data.user.password;
                delete req.body.userId;
                // console.log(req.body);
                User.findByIdAndUpdate({_id: req.params.id}, {"user": req.body })
                .then(() => {
                    User.findOne({_id: req.params.id})
                    .then(data => sendDataUser(data, res))
                })
                } else {
                    res.send(500)
                }
            })
    }
});


// Delete =====================================================
router.delete('/users/:id', (req,res) => {
    User.deleteOne({_id: req.params.id})
    .then(data => res.send(data))
});

// Get JWT =====================================================
router.get('/users/', (req,res) => {
    // console.log(req.headers.token);
    User.findOne({jwt: req.headers.token})
    .then((data)=>{
        console.log(data);
        if(data){
            const userData = data._doc
            sendDataUser(userData, res)
        } else {
            res.send(404)
        }
    })
});

module.exports = router;
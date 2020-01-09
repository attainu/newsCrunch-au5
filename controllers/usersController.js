const connection = require('../dbInstance')

module.exports.postSignup =  function(req,res){
    const db = connection.get();
    db.collection("users").findOne({ email: req.body.email }, function (err, userexist) {
        if (err) console.log("error in /signup", err)
        console.log("user exist in databse", userexist)
        if (userexist) {
            res.redirect("/signup?userExist=true")
        }
        else {
            var users = {
                name: req.body.name,
                email: req.body.email,
                mobile: req.body.mobile,
                password: req.body.password,
                city: req.body.city,
                state: req.body.state,
                country: req.body.country
            }
            console.log("users object created", users)
            db.collection("users").insertOne(users, function (error, users) {
                if (error) {
                    console.log("err in insertOne signup", err)
                }
                else {
                    res.redirect("/signup?signupSuccess=true")
                }
            })

        }
    })

}

module.exports.getSignup = function(req,res){
    res.render("signup.hbs", {
        signupSuccess: req.query.signupSuccess,
        userExist: req.query.userExist

    })
}


module.exports.getLogin = function(req,res){
    res.render("login.hbs", {
        loginError: req.query.loginError,
    })
}



module.exports.postLogin = function(req,res){
    const db = connection.get();
    db.collection("users").find({ $and: [{ email: req.body.email }, { password: req.body.password }] }).toArray(function (error, users) {
        //  console.log("users",users)
        if (users.length != 0) {
            req.session.user = {
                id: users[0]._id,
            }
            //console.log("session id",req.session.user.id)
            res.redirect("/homepage")
        }
        else {
            res.redirect("/login?loginError=true")

        }
    })
}

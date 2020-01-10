const UserModel = require('../models/user.model')

//<----------------------------------Signup get route---------------------------->

module.exports.getSignup = function (req, res) {
    res.render("signup.hbs", {
        signupSuccess: req.query.signupSuccess,
        userExist: req.query.userExist

    })
}
//<----------------------------------Signup post route---------------------------->

module.exports.postSignup = function (req, res) {
    console.log('city', req.body.city)
    UserModel.findOne({ email: req.body.email }).exec()
        .then(function (userexist) {
            if (userexist) {
                res.redirect("/signup?userExist=true")
            } else {
                const model = new UserModel({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    city: req.body.city,
                    state: req.body.state,
                    country: req.body.country
                })
                model
                    .save()
                    .then((user) => {
                        res.redirect("/signup?signupSuccess=true")
                    })
                    .catch(err => {
                        console.log('error in save post signup.', err)
                    })
            }
        })
        .catch(function (err) {
            console.log('error in findOne Post route.')
        })


}


//<----------------------------------Login get route---------------------------->

module.exports.getLogin = function (req, res) {
    res.render("login.hbs", {
        loginError: req.query.loginError,
    })
}

//<----------------------------------Login post route---------------------------->

module.exports.postLogin = function (req, res) {
    UserModel.findOne({ $and: [{ email: req.body.email }, { password: req.body.password }] })
        .then((user) => {
            if (user) {
                req.session.user = {
                    id: user._id,
                    userCity: user.city
                }
                console.log("session id", req.session.user.id)
                res.redirect("/")
            } else {
                res.redirect("/login?loginError=true")

            }
        })
}

//<----------------------------------Logout post route---------------------------->

module.exports.getlogout = function (req, res) {
    req.session.destroy()
    res.redirect("/")
}
const UserModel = require('../models/user.model')
const multiparty = require('multiparty')
const cloudinary = require('cloudinary').v2

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
                    id: user._id
                }
                console.log("session id", req.session.user.id)
                res.redirect("/")
            } else {
                res.redirect("/login?loginError=true")

            }
        })
}

//<----------------------------------Profile get route---------------------------->

module.exports.getProfile = function (req, res) {
    UserModel.findOne({ _id: req.session.user.id }, function (error, result) {
        if (error)
            console.log(error)
        else {
            console.log(result)
            res.render('profile', {
                user: result,
                userCity: result.city
            })
        }
    })
}



//<----------------------------------User update route---------------------------->
module.exports.postUserUpdate = function (req, res) {
    UserModel.findOne({ _id: req.session.user.id }, function (error, result) {
        if (error) {
            console.log(error)
        }
        else {
            var form = new multiparty.Form({})
            form.parse(req, function (err, fields, files) {
                var data = {}
                if (files.photo[0].size != 0) {
                    cloudinary.uploader.upload(files.photo[0].path, function (error, result) {
                        console.log('THIS IS RESULT URL', result.url)
                        data.photo = result.url
                        if (fields.name[0].length != 0) {
                            data.name = fields.name[0]
                        }

                        if (fields.country[0].length != 0) {
                            data.country = fields.country[0]
                        }

                        if (fields.state[0].length != 0) {
                            data.state = fields.state[0]
                        }

                        if (fields.city[0].length != 0) {
                            data.city = fields.city[0]
                        }
                        UserModel.updateOne({ _id: req.session.user.id }, { $set: data }, function (err, result) {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                res.redirect('/profile')
                            }
                        })
                    });
                }
                else {
                    if (fields.name[0].length != 0) {
                        data.name = fields.name[0]
                    }

                    if (fields.country[0].length != 0) {
                        data.country = fields.country[0]
                    }

                    if (fields.state[0].length != 0) {
                        data.state = fields.state[0]
                    }

                    if (fields.city[0].length != 0) {
                        data.city = fields.city[0]
                    }
                    UserModel.updateOne({ _id: req.session.user.id }, { $set: data }, function (err, result) {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            res.redirect('/profile')
                        }
                    })
                }


            })
        }
    })
}




//<----------------------------------Logout post route---------------------------->

module.exports.getlogout = function (req, res) {
    req.session.destroy()
    res.redirect("/")
}
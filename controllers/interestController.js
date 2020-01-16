var newsAPI = require('newsapi')
var newsapi = new newsAPI('6da45a39dd794e0e89c6511a18cb477a')
const mongoose = require("mongoose")
const UserModel = require('../models/user.model')


//.........................................Add interest...........................................//
module.exports.postInterest = function (req, res) {
    interestsArr = []
    if (req.body.interest.length != 0) {
        UserModel.findById({ _id: req.session.user.id }).exec().then(function (user) {
            if (user.interests) {
                interestsArr = user.interests
                interestsArr.push(req.body.interest)
            }
            else {
                interestsArr.push(req.body.interest)
            }
            UserModel.updateOne({ _id: user.id }, { $set: { 'interests': interestsArr } }, function (err, result) {
                if (err) {
                    console.log(err)
                }
                else {
                    res.redirect('back')
                }

            })
        })
    }
    else{
        res.redirect('back')
    }

}

//................................search interest.................................//

module.exports.getInterest = function (req, res){
    var query = req.query.q
    if (req.query.page) {
        var page = req.query.page
    }
    else {
        var page = 1
    }
    newsapi.v2.everything({
        page: page,
        language: 'en',
        qInTitle: req.query.q
    }).then(function (response) {
        if(req.session.user){
            UserModel.findOne({_id: req.session.user.id}, function(err,result){
                var user = result
                res.render('homepage', {
                    user: user,
                    query: query,
                    news: response.articles
                })
            })
        }
        else{
            res.render('homepage', {
                query: query,
                news: response.articles
            })
        }
        
    })
}
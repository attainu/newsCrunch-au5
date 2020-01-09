var newsAPI = require('newsapi')
var newsapi = new newsAPI('6da45a39dd794e0e89c6511a18cb477a')

module.exports.index =  function(req,res){
    newsapi.v2.topHeadlines({
        language: 'en',
        country: 'in'
    }).then(function (response) {
        //console.log("in home page",req.session.user.id)
        res.render('homepage', {
            news: response.articles,
            id: req.session.user.id
        })
    }).catch((e)=>{
        console.log(e)
    })
}

module.exports.getWorld = function(req,res){
    newsapi.v2.everything({
        language: 'en',
        sources: 'cnn, wired, bbc-news, vice-news, usa-today, time, the-washington-times, the-washington-post, the-wall-street-journal, the-verge, the-sport-bible, the-next-web, the-new-york-times'
    }).then(function (response) {
        res.render('homepage', {
            news: response.articles
        })
    })
}


module.exports.getBusiness = function(req,res){

    newsapi.v2.sources({
        category: 'business',
        language: 'en'
    }).then(function (response) {
        var sources = response.sources.map(function (a){
            return a.id
        })
        newsapi.v2.everything({
            language: 'en',
            sources: sources.join() 
        }).then(function (response) {
            res.render('homepage', {
                news: response.articles
            })
        })
    })
}



module.exports.getEntertainment = function(req,res){
    newsapi.v2.sources({
        category: 'entertainment',
        language: 'en'
    }).then(function (response) {
        var sources = response.sources.map(function (a){
            return a.id
        })
        newsapi.v2.everything({
            language: 'en',
            sources: sources.join() 
        }).then(function (response) {
            res.render('homepage', {
                news: response.articles
            })
        })
    })
}



module.exports.getGeneral = function(req,res){
    newsapi.v2.sources({
        category: 'general',
        language: 'en'
    }).then(function (response) {
        var sources = response.sources.map(function (a){
            return a.id
        })
        newsapi.v2.everything({
            language: 'en',
            sources: sources.join() 
        }).then(function (response) {
            res.render('homepage', {
                news: response.articles
            })
        })
    })
}


module.exports.getHealth = function(req,res){
    newsapi.v2.sources({
        category: 'health',
        language: 'en'
    }).then(function (response) {
        var sources = response.sources.map(function (a){
            return a.id
        })
        newsapi.v2.everything({
            language: 'en',
            sources: sources.join() 
        }).then(function (response) {
            res.render('homepage', {
                news: response.articles
            })
        })
    })
}


module.exports.getScience = function(req,res){
    newsapi.v2.sources({
        category: 'science',
        language: 'en'
    }).then(function (response) {
        var sources = response.sources.map(function (a){
            return a.id
        })
        newsapi.v2.everything({
            language: 'en',
            sources: sources.join() 
        }).then(function (response) {
            res.render('homepage', {
                news: response.articles
            })
        })
    })
}



module.exports.getSports = function(req,res){
    newsapi.v2.sources({
        category: 'sports',
        language: 'en'
    }).then(function (response) {
        var sources = response.sources.map(function (a){
            return a.id
        })
        newsapi.v2.everything({
            language: 'en',
            sources: sources.join() 
        }).then(function (response) {
            res.render('homepage', {
                news: response.articles
            })
        })
    })
}


module.exports.getTechnology = function(req,res){
    newsapi.v2.sources({
        category: 'technology',
        language: 'en'
    }).then(function (response) {
        var sources = response.sources.map(function (a){
            return a.id
        })
        newsapi.v2.everything({
            language: 'en',
            sources: sources.join() 
        }).then(function (response) {
            res.render('homepage', {
                news: response.articles
            })
        })
    })
}
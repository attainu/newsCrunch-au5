var newsAPI = require('newsapi')
var newsapi = new newsAPI('6da45a39dd794e0e89c6511a18cb477a')
const UserModel = require('../models/user.model')

module.exports.homepage = function (req, res) {
    if (req.query.page) {
        var page = req.query.page
    }
    else {
        var page = 1
    }
    newsapi.v2.topHeadlines({
        language: 'en',
        country: 'in',
        page: page
    }).then(function (response) {
        var topHeadlines = true;
        if (req.session.user) {
            UserModel.findOne({ _id: req.session.user.id }, function (err, result) {
                var user = result
                res.render('homepage', {
                    user: user,
                    topHeadlines: topHeadlines,
                    news: response.articles,
                })
            })

        } else {
            res.render('homepage', {
                topHeadlines: topHeadlines,
                news: response.articles
            })
        }
    }).catch((e) => {
        console.log(e)
    })
}

module.exports.getWorld = function (req, res) {
    if (req.query.page) {
        var page = req.query.page
    }
    else {
        var page = 1
    }
    newsapi.v2.everything({
        language: 'en',
        sources: 'cnn, wired, bbc-news, vice-news, usa-today, time, the-washington-times, the-washington-post, the-wall-street-journal, the-verge, the-sport-bible, the-next-web, the-new-york-times',
        page: page
    }).then(function (response) {
        var world = true;
        if (req.session.user) {
            UserModel.findOne({ _id: req.session.user.id }, function (err, result) {
                var user = result
                res.render('homepage', {
                    user: user,
                    world: world,
                    news: response.articles
                })
            })
        } else {
            res.render('homepage', {
                world: world,
                news: response.articles
            })
        }

    })
}


module.exports.getBusiness = function (req, res) {
    if (req.query.page) {
        var page = req.query.page
    }
    else {
        var page = 1
    }
    newsapi.v2.sources({
        category: 'business',
        language: 'en'
    }).then(function (response) {
        var business = true;
        if (req.session.user) {
            UserModel.findOne({ _id: req.session.user.id }, function (err, result) {
                var user = result
                var sources = response.sources.map(function (a) {
                    return a.id
                })
                newsapi.v2.everything({
                    language: 'en',
                    sources: sources.join(),
                    page: page
                }).then(function (response) {
                    res.render('homepage', {
                        user: user,
                        business: business,
                        news: response.articles
                    })
                })
            })
        }
        else {
            var sources = response.sources.map(function (a) {
                return a.id
            })
            newsapi.v2.everything({
                language: 'en',
                sources: sources.join(),
                page: page
            }).then(function (response) {
                res.render('homepage', {
                    business: business,
                    news: response.articles
                })
            })
        }

    })
}

module.exports.getEntertainment = function (req, res) {
    if (req.query.page) {
        var page = req.query.page
    }
    else {
        var page = 1
    }
    newsapi.v2.sources({
        category: 'entertainment',
        language: 'en',
    }).then(function (response) {
        var entertainment = true
        if (req.session.user) {
            UserModel.findOne({ _id: req.session.user.id }, function (err, result) {
                var user = result
                var sources = response.sources.map(function (a) {
                    return a.id
                })
                newsapi.v2.everything({
                    language: 'en',
                    sources: sources.join(),
                    page: page
                }).then(function (response) {
                    res.render('homepage', {
                        user: user,
                        entertainment: entertainment,
                        news: response.articles
                    })
                })
            })
        }
        else {
            var sources = response.sources.map(function (a) {
                return a.id
            })
            newsapi.v2.everything({
                language: 'en',
                sources: sources.join(),
                page: page
            }).then(function (response) {
                res.render('homepage', {
                    entertainment: entertainment,
                    news: response.articles
                })
            })
        }
    })
}




module.exports.getGeneral = function (req, res) {
    if (req.query.page) {
        var page = req.query.page
    }
    else {
        var page = 1
    }
    newsapi.v2.sources({
        category: 'general',
        language: 'en',
    }).then(function (response) {
        var general = true
        if (req.session.user) {
            UserModel.findOne({ _id: req.session.user.id }, function (err, result) {
                var user = result
                var sources = response.sources.map(function (a) {
                    return a.id
                })
                newsapi.v2.everything({
                    language: 'en',
                    sources: sources.join(),
                    page: page
                }).then(function (response) {
                    res.render('homepage', {
                        user: user,
                        general: general,
                        news: response.articles
                    })
                })
            })
        }
        else{
            var sources = response.sources.map(function (a) {
                return a.id
            })
            newsapi.v2.everything({
                language: 'en',
                sources: sources.join(),
                page: page
            }).then(function (response) {
                res.render('homepage', {
                    general: general,
                    news: response.articles
                })
            })
        }
    })
}


module.exports.getHealth = function (req, res) {
    if (req.query.page) {
        var page = req.query.page
    }
    else {
        var page = 1
    }
    newsapi.v2.sources({
        category: 'health',
        language: 'en',
    }).then(function (response) {
        var health = true;
        if (req.session.user) {
            UserModel.findOne({ _id: req.session.user.id }, function (err, result) {
                var user = result
                var sources = response.sources.map(function (a) {
                    return a.id
                })
                newsapi.v2.everything({
                    language: 'en',
                    sources: sources.join(),
                    page: page
                }).then(function (response) {
                    res.render('homepage', {
                        user: user,
                        health: health,
                        news: response.articles
                    })
                })
            })
        }
        else{
            var sources = response.sources.map(function (a) {
                return a.id
            })
            newsapi.v2.everything({
                language: 'en',
                sources: sources.join(),
                page: page
            }).then(function (response) {
                res.render('homepage', {
                    health: health,
                    news: response.articles
                })
            })
        }
    })
}


module.exports.getScience = function (req, res) {
    if (req.query.page) {
        var page = req.query.page
    }
    else {
        var page = 1
    }
    newsapi.v2.sources({
        category: 'science',
        language: 'en'
    }).then(function (response) {
        var science = true
        if (req.session.user) {
            UserModel.findOne({ _id: req.session.user.id }, function (err, result) {
                var user = result
                var sources = response.sources.map(function (a) {
                    return a.id
                })
                newsapi.v2.everything({
                    language: 'en',
                    sources: sources.join(),
                    page: page
                }).then(function (response) {
                    res.render('homepage', {
                        user: user,
                        science: science,
                        news: response.articles
                    })
                })
            })
        }
        else{
            var sources = response.sources.map(function (a) {
                return a.id
            })
            newsapi.v2.everything({
                language: 'en',
                sources: sources.join(),
                page: page
            }).then(function (response) {
                res.render('homepage', {
                    science: science,
                    news: response.articles
                })
            })
        }
    })
}



module.exports.getSports = function (req, res) {
    if (req.query.page) {
        var page = req.query.page
    }
    else {
        var page = 1
    }
    newsapi.v2.sources({
        category: 'sports',
        language: 'en'
    }).then(function (response) {
        var sports = true
        if (req.session.user) {
            UserModel.findOne({ _id: req.session.user.id }, function (err, result) {
                var user = result
                var sources = response.sources.map(function (a) {
                    return a.id
                })
                newsapi.v2.everything({
                    language: 'en',
                    sources: sources.join(),
                    page: page
                }).then(function (response) {
                    res.render('homepage', {
                        user: user,
                        sports: sports,
                        news: response.articles
                    })
                })
            })
        }
        else{
            var sources = response.sources.map(function (a) {
                return a.id
            })
            newsapi.v2.everything({
                language: 'en',
                sources: sources.join(),
                page: page
            }).then(function (response) {
                res.render('homepage', {
                    sports: sports,
                    news: response.articles
                })
            })
        }
    })
}


module.exports.getTechnology = function (req, res) {
    if (req.query.page) {
        var page = req.query.page
    }
    else {
        var page = 1
    }
    newsapi.v2.sources({
        category: 'technology',
        language: 'en'
    }).then(function (response) {
        var technology = true
        if (req.session.user) {
            UserModel.findOne({ _id: req.session.user.id }, function (err, result) {
                var user = result
                var sources = response.sources.map(function (a) {
                    return a.id
                })
                newsapi.v2.everything({
                    language: 'en',
                    sources: sources.join(),
                    page: page
                }).then(function (response) {
                    res.render('homepage', {
                        user: user,
                        technology: technology,
                        news: response.articles
                    })
                })
            })
        }
        else{
            var sources = response.sources.map(function (a) {
                return a.id
            })
            newsapi.v2.everything({
                language: 'en',
                sources: sources.join(),
                page: page
            }).then(function (response) {
                res.render('homepage', {
                    technology: technology,
                    news: response.articles
                })
            })
        }
    })
}


module.exports.postSearch = function (req, res) {
    if (req.query.page) {
        var page = req.query.page
    }
    else {
        var page = 1
    }
    newsapi.v2.everything({
        page: page,
        language: 'en',
        qInTitle: req.body.search
    }).then(function (response) {
        res.send(response)
    })
}
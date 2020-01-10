var newsAPI = require('newsapi')
var newsapi = new newsAPI('6da45a39dd794e0e89c6511a18cb477a')

module.exports.homepage = function (req, res) {

    newsapi.v2.topHeadlines({
        language: 'en',
        country: 'in'
    }).then(function (response) {
        let sessionId, userCity;
        if (req.session.user && req.session.user.userCity) {
            sessionId = req.session.user.id,
                userCity = req.session.user.userCity
        } else {
            sessionId = null;
            userCity = null;
        }
        //console.log("in home page",req.session.user.id)
        res.render('homepage', {
            news: response.articles,
            userId: sessionId,
            userCity: userCity
        })
    }).catch((e) => {
        console.log(e)
    })
}

module.exports.getWorld = function (req, res) {
    newsapi.v2.everything({
        language: 'en',
        sources: 'cnn, wired, bbc-news, vice-news, usa-today, time, the-washington-times, the-washington-post, the-wall-street-journal, the-verge, the-sport-bible, the-next-web, the-new-york-times'
    }).then(function (response) {
        let sessionId, userCity;
        if (req.session.user && req.session.user.userCity) {
            sessionId = req.session.user.id,
                userCity = req.session.user.userCity
        } else {
            sessionId = null;
            userCity = null;
        }
        res.render('homepage', {
            news: response.articles,
            userCity: userCity,
            userId: sessionId
        })
    })
}


module.exports.getBusiness = function (req, res) {

    newsapi.v2.sources({
        category: 'business',
        language: 'en'
    }).then(function (response) {
        let sessionId, userCity;
        if (req.session.user && req.session.user.userCity) {
            sessionId = req.session.user.id,
                userCity = req.session.user.userCity
        } else {
            sessionId = null;
            userCity = null;
        }
        var sources = response.sources.map(function (a) {
            return a.id
        })
        newsapi.v2.everything({
            language: 'en',
            sources: sources.join()
        }).then(function (response) {
            res.render('homepage', {
                news: response.articles,
                userCity: userCity,
                userId: sessionId
            })
        })
    })
}



module.exports.getEntertainment = function (req, res) {
    newsapi.v2.sources({
        category: 'entertainment',
        language: 'en'
    }).then(function (response) {
        let sessionId, userCity;
        if (req.session.user && req.session.user.userCity) {
            sessionId = req.session.user.id,
                userCity = req.session.user.userCity
        } else {
            sessionId = null;
            userCity = null;
        }
        var sources = response.sources.map(function (a) {
            return a.id
        })
        newsapi.v2.everything({
            language: 'en',
            sources: sources.join()
        }).then(function (response) {
            res.render('homepage', {
                news: response.articles,
                userCity: userCity,
                userId: sessionId
            })
        })
    })
}


module.exports.getBusiness = function (req, res) {

    newsapi.v2.sources({
        category: 'business',
        language: 'en'
    }).then(function (response) {
        let sessionId, userCity;
        if (req.session.user && req.session.user.userCity) {
            sessionId = req.session.user.id,
                userCity = req.session.user.userCity
        } else {
            sessionId = null;
            userCity = null;
        }
        var sources = response.sources.map(function (a) {
            return a.id
        })
        newsapi.v2.everything({
            language: 'en',
            sources: sources.join()
        }).then(function (response) {
            res.render('homepage', {
                news: response.articles,
                userCity: userCity,
                userId: sessionId
            })
        })
    })
}



module.exports.getGeneral = function (req, res) {
    newsapi.v2.sources({
        category: 'general',
        language: 'en'
    }).then(function (response) {
        let sessionId, userCity;
        if (req.session.user && req.session.user.userCity) {
            sessionId = req.session.user.id,
                userCity = req.session.user.userCity
        } else {
            sessionId = null;
            userCity = null;
        }
        var sources = response.sources.map(function (a) {
            return a.id
        })
        newsapi.v2.everything({
            language: 'en',
            sources: sources.join()
        }).then(function (response) {
            res.render('homepage', {
                news: response.articles,
                userCity: userCity,
                userId: sessionId
            })
        })
    })
}


module.exports.getHealth = function (req, res) {
    newsapi.v2.sources({
        category: 'health',
        language: 'en'
    }).then(function (response) {
        let sessionId, userCity;
        if (req.session.user && req.session.user.userCity) {
            sessionId = req.session.user.id,
                userCity = req.session.user.userCity
        } else {
            sessionId = null;
            userCity = null;
        }
        var sources = response.sources.map(function (a) {
            return a.id
        })
        newsapi.v2.everything({
            language: 'en',
            sources: sources.join()
        }).then(function (response) {
            res.render('homepage', {
                news: response.articles,
                userCity: userCity,
                userId: sessionId
            })
        })
    })
}


module.exports.getScience = function (req, res) {
    newsapi.v2.sources({
        category: 'science',
        language: 'en'
    }).then(function (response) {
        let sessionId, userCity;
        if (req.session.user && req.session.user.userCity) {
            sessionId = req.session.user.id,
                userCity = req.session.user.userCity
        } else {
            sessionId = null;
            userCity = null;
        }
        var sources = response.sources.map(function (a) {
            return a.id
        })
        newsapi.v2.everything({
            language: 'en',
            sources: sources.join()
        }).then(function (response) {
            res.render('homepage', {
                news: response.articles,
                userCity: userCity,
                userId: sessionId
            })
        })
    })
}



module.exports.getSports = function (req, res) {
    newsapi.v2.sources({
        category: 'sports',
        language: 'en'
    }).then(function (response) {
        let sessionId, userCity;
        if (req.session.user && req.session.user.userCity) {
            sessionId = req.session.user.id,
                userCity = req.session.user.userCity
        } else {
            sessionId = null;
            userCity = null;
        }
        var sources = response.sources.map(function (a) {
            return a.id
        })
        newsapi.v2.everything({
            language: 'en',
            sources: sources.join()
        }).then(function (response) {
            res.render('homepage', {
                news: response.articles,
                userCity: userCity,
                userId: sessionId
            })
        })
    })
}


module.exports.getTechnology = function (req, res) {
    newsapi.v2.sources({
        category: 'technology',
        language: 'en'
    }).then(function (response) {
        let sessionId, userCity;
        if (req.session.user && req.session.user.userCity) {
            sessionId = req.session.user.id,
                userCity = req.session.user.userCity
        } else {
            sessionId = null;
            userCity = null;
        }
        var sources = response.sources.map(function (a) {
            return a.id
        })
        newsapi.v2.everything({
            language: 'en',
            sources: sources.join()
        }).then(function (response) {
            res.render('homepage', {
                news: response.articles,
                userCity: userCity,
                userId: sessionId
            })
        })
    })
}
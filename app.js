//............................Imported all npm packages............................//


var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('hbs')
var multiparty = require('multiparty')
var session = require('express-session')
var mongodb = require('mongodb')
var newsAPI = require('newsapi')

var app = express()


//............................Middlewares and Setup............................//



app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: false
}))

app.set('view engine', 'hbs')
app.use(session({
    secret: 'newsCrunch',
    cookie: {
        maxAge: 1000 * 60,
        path: '/',
        httpOnly: true
    }
}))

var DB = ''
mongodb.MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, function (err, client) {
    if (err) {
        console.log('Could not connect to the database:', err)
    }
    else {
        DB = client.db('newsCrunch')
    }
})

var newsapi = new newsAPI('ab4e1148bc40421aba6693b460759430')
//keys
//ab4e1148bc40421aba6693b460759430
//6ab2812da3da4bb7881e92a69bddfed2






// newsapi.v2.everything({
//     language: 'en',
//     sources: 'cnn, wired, bbc-news, vice-news, usa-today, time, the-washington-times, the-washington-post, the-wall-street-journal, the-verge, the-sport-bible, the-next-web, the-new-york-times',
//     pageSize: 100
// }).then(function (response) {
//     DB.collection('everything').insertMany(response.articles, function (err, result) {
//         if (err) {
//             console.log(err)
//         }
//         else {
//             console.log('everything done')
//         }

//     })

// })



// newsapi.v2.topHeadlines({
//     language: 'en',
//     country: 'in',
//     pageSize: 100
// }).then(function (response) {
//     DB.collection('topHeadlines').insertMany(response.articles, function (err, result) {
//         if (err) {
//             console.log(err)
//         }
//         else {
//             console.log('topHeadlines done')
//         }

//     })
// })

// newsapi.v2.sources({
//     category: 'business',
//     language: 'en'
// }).then(function (response) {
//     var sources = response.sources.map(function (a) {
//         return a.id
//     })
//     newsapi.v2.everything({
//         language: 'en',
//         sources: sources.join(),
//         pageSize: 100
//     }).then(function (response) {
//         DB.collection('business').insertMany(response.articles, function (err, result) {
//             if (err) {
//                 console.log(err)
//             }
//             else {
//                 console.log('business done')
//             }

//         })
//     })
// })


// newsapi.v2.sources({
//     category: 'general',
//     language: 'en'
// }).then(function (response) {
//     var sources = response.sources.map(function (a) {
//         return a.id
//     })
//     newsapi.v2.everything({
//         language: 'en',
//         sources: sources.join(),
//         pageSize: 100
//     }).then(function (response) {
//         DB.collection('general').insertMany(response.articles, function (err, result) {
//             if (err) {
//                 console.log(err)
//             }
//             else {
//                 console.log('general done')
//             }

//         })
//     })
// })



// newsapi.v2.sources({
//     category: 'entertainment',
//     language: 'en'
// }).then(function (response) {
//     var sources = response.sources.map(function (a) {
//         return a.id
//     })
//     newsapi.v2.everything({
//         language: 'en',
//         sources: sources.join(),
//         pageSize: 100
//     }).then(function (response) {
//         DB.collection('entertainment').insertMany(response.articles, function (err, result) {
//             if (err) {
//                 console.log(err)
//             }
//             else {
//                 console.log('entertainment done')
//             }

//         })
//     })
// })



// newsapi.v2.sources({
//     category: 'health',
//     language: 'en'
// }).then(function (response) {
//     var sources = response.sources.map(function (a) {
//         return a.id
//     })
//     newsapi.v2.everything({
//         language: 'en',
//         sources: sources.join(),
//         pageSize: 100
//     }).then(function (response) {
//         DB.collection('health').insertMany(response.articles, function (err, result) {
//             if (err) {
//                 console.log(err)
//             }
//             else {
//                 console.log('health done')
//             }

//         })
//     })
// })


// newsapi.v2.sources({
//     category: 'science',
//     language: 'en'
// }).then(function (response) {
//     var sources = response.sources.map(function (a) {
//         return a.id
//     })
//     newsapi.v2.everything({
//         language: 'en',
//         sources: sources.join(),
//         pageSize: 100
//     }).then(function (response) {
//         DB.collection('science').insertMany(response.articles, function (err, result) {
//             if (err) {
//                 console.log(err)
//             }
//             else {
//                 console.log('science done')
//             }

//         })
//     })
// })


// newsapi.v2.sources({
//     category: 'sports',
//     language: 'en'
// }).then(function (response) {
//     var sources = response.sources.map(function (a) {
//         return a.id
//     })
//     newsapi.v2.everything({
//         language: 'en',
//         sources: sources.join(),
//         pageSize: 100
//     }).then(function (response) {
//         DB.collection('sports').insertMany(response.articles, function (err, result) {
//             if (err) {
//                 console.log(err)
//             }
//             else {
//                 console.log('sports done')
//             }

//         })
//     })
// })


// newsapi.v2.sources({
//     category: 'technology',
//     language: 'en'
// }).then(function (response) {
//     var sources = response.sources.map(function (a) {
//         return a.id
//     })
//     newsapi.v2.everything({
//         language: 'en',
//         sources: sources.join(),
//         pageSize: 100
//     }).then(function (response) {
//         DB.collection('technology').insertMany(response.articles, function (err, result) {
//             if (err) {
//                 console.log(err)
//             }
//             else {
//                 console.log('technology done')
//             }

//         })
//     })
// })





//............................CATEGORIES ROUTES............................//

app.get('/signup', function (req, res) {
    res.render('signup')
})

app.get('/login', function (req, res) {
    res.render('login')

})

app.post('/signup', function (req, res) {
    var data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        country: req.body.country,
        state: req.body.state,
        city: req.body.city
    }
    DB.collection('users').findOne({ email: req.body.email }, function (err, result) {
        if (result == null) {
            DB.collection('users').insertOne(data, function (err, result) {
                if (err) {
                    console.log(err)
                }
                else {
                    res.redirect('/login?registered=true')
                }
            })
        }
        else {
            res.redirect('/signup?alreadyexists=true')
        }
    })
})


app.post('/login', function (req, res) {
   DB.collection('users').findOne({email: req.body.email}, function(err, result){
       if(result==null){
           res.redirect('/login?nouser=true')
       }
       else{
           if(result.password == req.body.password){
               req.session.user = {
                   email : result.email
               }
               res.redirect('/?login=true')
           }
           else{
               res.redirect('/login?incorrectpwd=true')
           }
       }
   })
})



app.get('/', function (req, res) {
    newsapi.v2.topHeadlines({
        language: 'en',
        country: 'in'
    }).then(function (response) {
        var topHeadlines = true
        res.render('homepage', {
            news: response.articles,
            topHeadlines: topHeadlines
        })
    })
})


app.get('/world', function (req, res) {
    newsapi.v2.everything({
        language: 'en',
        sources: 'cnn, wired, bbc-news, vice-news, usa-today, time, the-washington-times, the-washington-post, the-wall-street-journal, the-verge, the-sport-bible, the-next-web, the-new-york-times',
        pageSize: 100
    }).then(function (response) {
        var world = true
        res.render('homepage', {
            news: response.articles,
            world: world
        })
    })
})

app.get('/business', function (req, res) {
    newsapi.v2.sources({
        category: 'business',
        language: 'en'
    }).then(function (response) {
        var sources = response.sources.map(function (a) {
            return a.id
        })
        newsapi.v2.everything({
            language: 'en',
            sources: sources.join()
        }).then(function (response) {
            var business = true
            res.render('homepage', {
                news: response.articles,
                business: business
            })
        })
    })
})

app.get('/entertainment', function (req, res) {
    newsapi.v2.sources({
        category: 'entertainment',
        language: 'en'
    }).then(function (response) {
        var sources = response.sources.map(function (a) {
            return a.id
        })
        newsapi.v2.everything({
            language: 'en',
            sources: sources.join()
        }).then(function (response) {
            var entertainment = true
            res.render('homepage', {
                news: response.articles,
                entertainment: entertainment
            })
        })
    })
})

app.get('/general', function (req, res) {
    newsapi.v2.sources({
        category: 'general',
        language: 'en'
    }).then(function (response) {
        var sources = response.sources.map(function (a) {
            return a.id
        })
        newsapi.v2.everything({
            language: 'en',
            sources: sources.join()
        }).then(function (response) {
            var general = true
            res.render('homepage', {
                news: response.articles,
                general: general
            })
        })
    })
})

app.get('/health', function (req, res) {
    newsapi.v2.sources({
        category: 'health',
        language: 'en'
    }).then(function (response) {
        var sources = response.sources.map(function (a) {
            return a.id
        })
        newsapi.v2.everything({
            language: 'en',
            sources: sources.join()
        }).then(function (response) {
            var health = true
            res.render('homepage', {
                news: response.articles,
                health: health
            })
        })
    })
})

app.get('/science', function (req, res) {
    newsapi.v2.sources({
        category: 'science',
        language: 'en'
    }).then(function (response) {
        var sources = response.sources.map(function (a) {
            return a.id
        })
        newsapi.v2.everything({
            language: 'en',
            sources: sources.join()
        }).then(function (response) {
            var science = true
            res.render('homepage', {
                news: response.articles,
                science: science
            })
        })
    })
})

app.get('/sports', function (req, res) {
    newsapi.v2.sources({
        category: 'sports',
        language: 'en'
    }).then(function (response) {
        var sources = response.sources.map(function (a) {
            return a.id
        })
        newsapi.v2.everything({
            language: 'en',
            sources: sources.join()
        }).then(function (response) {
            var sports = true
            res.render('homepage', {
                news: response.articles,
                sports: sports
            })
        })
    })
})

app.get('/technology', function (req, res) {
    newsapi.v2.sources({
        category: 'technology',
        language: 'en'
    }).then(function (response) {
        var sources = response.sources.map(function (a) {
            return a.id
        })
        newsapi.v2.everything({
            language: 'en',
            sources: sources.join()
        }).then(function (response) {
            var technology = true
            res.render('homepage', {
                news: response.articles,
                technology: technology
            })
        })
    })
})


app.post('/search', function (req, res) {
    newsapi.v2.everything({
        language: 'en',
        qInTitle: req.body.search
    }).then(function (response) {
        res.send(response)
    })
})



//............................SESSION ROUTES............................//




app.listen(3500)


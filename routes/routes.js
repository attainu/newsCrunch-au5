const express = require('express');
const router = express.Router();
const userController = require('../controller/usersController')
const categoryController = require('../controller/categoryController')
const bookmarkController = require('../controller/bookmarkController')



//<-------------home route------->
router.get('/',userController.getLogin)
router.get('/homepage',categoryController.index)

//<-------------login-signup route----------------->
router.get('/signup',userController.getSignup)
router.post('/signup', userController.postSignup)


router.get('/login',userController.getLogin)
router.post('/login', userController.postLogin)

//<--------------------------------------------------------------------Session MW after login-------------------------------------------->
router.use(function (req, res, next) {
    console.log('session middleware')
     if (req.session.user) {
         next();
     }
     else {
         res.redirect("/")
     }
 })

//<-------------categories route----------------->
router.get('/world',categoryController.getWorld)
router.get('/business', categoryController.getBusiness)

router.get('/entertainment',categoryController.getEntertainment)
router.get('/general', categoryController.getGeneral)

router.get('/health',categoryController.getHealth)
router.get('/science', categoryController.getScience)


router.get('/sports', categoryController.getSports)
router.get('/technology', categoryController.getTechnology)



//<-------------bookmark route----------------->
router.get('/bookmark', bookmarkController.getBookmark)
router.post('/bookmark', bookmarkController.postBookmark)


module.exports = router;
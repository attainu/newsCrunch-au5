const connection = require('../dbInstance')
const mongodb = require("Mongodb")

module.exports.getBookmark = function(req,res){
    const db = connection.get();
    db.collection("users").findOne({_id:mongodb.ObjectId(req.session.user.id)},function (error, user) {
        console.log("in user",user)
            if(user){
                res.render("bookmark",{
                    id: req.session.user.id,
                    bookmark : user.bookmark
                })

            }
        })
}
    


module.exports.postBookmark = function(req,res){
        var id = mongodb.ObjectId(req.body.id)
        //console.log(req.body.id)
        var bookmark = {
            index:req.body.index,
            boomarkname:req.body.name,
            img:req.body.img,
            author:req.body.author,
            title:req.body.title,
            description:req.body.description,
            url:req.body.url,
            publishedAt:req.body.publishedAt,
            content:req.body.content,
            id:req.body.id
        }
        var bookmarkArr = []
        const db = connection.get();
        db.collection("users").findOne({_id:id},function (error, user) {
            console.log("in user",user)
                if(user.bookmark){
                    bookmarkArr = user.bookmark
                    bookmarkArr.push(bookmark)
                }
                else{
                    bookmarkArr.push(bookmark)
                }
       
            db.collection("users").updateOne({_id:id},{$set:{"bookmark": bookmarkArr}},function (error, users) {
                if (error) {
                    console.log("err in insert bookmark", err)
                }
        })
    }
)

res.send('ok'); 
}
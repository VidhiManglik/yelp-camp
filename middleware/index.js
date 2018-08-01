var Campground = require('../models/campground'),
    Comment = require('../models/comment');
var middlewareObj = {};

middlewareObj.checkCampgroundUser = function(req,res,next){
    if(req.isAuthenticated()){
        Campground.findById(req.params.id,function(err,foundCampground){
            if(err){
                console.log(err);
                req.flash('error','Campground not found!');
                res.redirect("back");
            }else{
                if(foundCampground.author.id.equals(req.user._id)){
                    next();
                }else{
                    req.flash('error',"You don't have permission todo that.");
                    res.redirect('back');
                }
            }
        });
    }else{
        req.flash('error','You should be LoggedIn to do that!');
        res.redirect('back');
    }
};

middlewareObj.checkCommentUser = function(req,res,next){
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id,function(err,found){
            if(err){
                console.log(err);
                res.redirect("back");
            }else{
                if(found.author.id.equals(req.user._id)){
                    next();
                }else{
                    req.flash('error',"You don't have permission todo that.");
                    res.redirect('back');
                }
            }
        });
    }else{
        req.flash('error','You should be LoggedIn to do that!');
        res.redirect('back');
    }
};

middlewareObj.isLoggedIn = function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash('error','You should be LoggedIn to do that!');
    res.redirect('/login');
};


module.exports = middlewareObj;
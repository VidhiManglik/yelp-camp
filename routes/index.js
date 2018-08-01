var express = require('express');
var router = express.Router();
var User = require('../models/user'),
    passport = require('passport'),
    Campground = require('../models/campground'),
    Comment = require('../models/comment');
router.get("/",function(req,res){
    res.render("landing");
});

//======================
//Auth Route
//======================
router.get('/register',function(req,res){
    res.render('register');
});

router.post('/register',function(req,res){
    User.register(new User({username : req.body.username}),req.body.password,function(err,user){
        if(err){
            req.flash('error',err.message);
            console.log(err);
            return res.render('register');
        }
        passport.authenticate("local")(req,res,function(){
            req.flash('success',"Successfully Registered!"+user.username);
            res.redirect('/campgrounds');
        });
    });
});
router.get('/login',function(req,res){
    res.render('login');
});
router.post('/login',passport.authenticate("local",{
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }),function(req,res){
    
});
router.get("/logout",function(req,res){
    req.logout();
    req.flash('success','logged out');
    res.redirect('/campgrounds');
});



module.exports = router;
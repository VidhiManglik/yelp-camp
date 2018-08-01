var express = require('express');
var router = express.Router();
var Campground = require('../models/campground'),
    Comment = require('../models/comment'),
    middleware = require('../middleware');
//Here "/" denotes campgrounds

//============================
//Campground
//============================

//index route
router.get("/",function(req,res){
    console.log(req.user);
    Campground.find({}, function(err,allCampgrounds){
        if(err){
            console.log(err);
        }else{
            res.render("campground/index",{campgrounds:allCampgrounds});
        }
    });
    //res.render("index",{campgrounds:campgrounds});
});

//create route
router.post("/",middleware.isLoggedIn,function(req,res){
    var name = req.body.name,
        price = req.body.price,
        img = req.body.img,
        desc=req.body.desc;
    var author={
        id : req.user._id,
        username: req.user.username
    }
    var newCampground = {name: name, price: price, img: img, desc: desc, author:author};
    //Create a new vampground in db
    Campground.create(newCampground,function(err,newlyCreated){
        if(err){
            console.log(err);
        }else{
            res.redirect("/campgrounds");
        }
    });
    
    //res.redirect("/campgrounds");
});

//new route
router.get("/new",middleware.isLoggedIn,function(req,res){
    res.render("campground/new");
});

//show route
router.get("/:id",function(req,res){
    Campground.findById(req.params.id).populate("comments").exec(function(err,foundCampground){
        if(err){
            console.log(err);
        }else{
            res.render("campground/show",{campground:foundCampground});
        }
    });
});
//edit
router.get('/:id/edit', middleware.checkCampgroundUser , function(req,res){
    Campground.findById(req.params.id,function(err,foundCampground){
        res.render("campground/edit",{campground:foundCampground});
    });
});

//update
router.put("/:id",middleware.checkCampgroundUser,function(req,res){
    Campground.findByIdAndUpdate(req.params.id,req.body.campground,function(err,updateCampground){
        if(err){
            res.redirect('/campgrounds');
        }else{
            res.redirect('/campgrounds/'+req.params.id);
        }
    });
});
//delete
router.delete("/:id",middleware.checkCampgroundUser,function(req,res){
   Campground.findByIdAndRemove(req.params.id,function(err){
       if(err){
           res.redirect('/campgrounds');
       }
       res.redirect('/campgrounds');
   });
});

module.exports = router;
var mongoose = require('mongoose');
var Campground = require('./models/campground');
var Comment = require("./models/comment");
var data = [
    {
        name: "Clouds",
        img:"https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=45fc8a446ad11a120c543c426382119f&auto=format&fit=crop&w=500&q=60",
        desc:"Hit the ground running this vendor is incompetent nor take five, punch the tree, and come back in here with a clear head touch base translating our vision of having a market leading platfrom face time. No scraps hit the floor parallel path your work on this project has been really impactful, yet locked and loaded root-and-branch review, nor cross sabers. Pushback what's the status on the deliverables for eow? or obviously nor screw the pooch. Quarterly sales are at an all-time low we need to socialize the comms with the wider stakeholder community this is a no-brainer pig in a python, or hammer out design thinking. But what's the real problem we're trying to solve here? game-plan, for pro-sumer software or rock Star/Ninja onward and upward, productize the deliverables and focus on the bottom line but strategic fit. "
    },
    {
        name: "Planes",
        img:"https://images.unsplash.com/photo-1520095972714-909e91b038e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1110ecf3ce9e4184d4676c54dec0032d&auto=format&fit=crop&w=500&q=60",
        desc:"Hit the ground running this vendor is incompetent nor take five, punch the tree, and come back in here with a clear head touch base translating our vision of having a market leading platfrom face time. No scraps hit the floor parallel path your work on this project has been really impactful, yet locked and loaded root-and-branch review, nor cross sabers. Pushback what's the status on the deliverables for eow? or obviously nor screw the pooch. Quarterly sales are at an all-time low we need to socialize the comms with the wider stakeholder community this is a no-brainer pig in a python, or hammer out design thinking. But what's the real problem we're trying to solve here? game-plan, for pro-sumer software or rock Star/Ninja onward and upward, productize the deliverables and focus on the bottom line but strategic fit. "
    },
    {
        name: "Mountains",
        img:"https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5cedc6b95f731395da7269d2341f9a5e&auto=format&fit=crop&w=500&q=60",
        desc:"Hit the ground running this vendor is incompetent nor take five, punch the tree, and come back in here with a clear head touch base translating our vision of having a market leading platfrom face time. No scraps hit the floor parallel path your work on this project has been really impactful, yet locked and loaded root-and-branch review, nor cross sabers. Pushback what's the status on the deliverables for eow? or obviously nor screw the pooch. Quarterly sales are at an all-time low we need to socialize the comms with the wider stakeholder community this is a no-brainer pig in a python, or hammer out design thinking. But what's the real problem we're trying to solve here? game-plan, for pro-sumer software or rock Star/Ninja onward and upward, productize the deliverables and focus on the bottom line but strategic fit. "
    }
];
function seedDB(){
    Campground.remove({},function(err){
        if(err){
            console.log(err);
        }
        console.log("remove campgrounds");
        // data.forEach(function(seed){
        //   Campground.create(seed,function(err,campground){
        //       if(err){
        //           console.log(err);
        //       }else{
        //           console.log("added");
        //           //creating comments
        //           Comment.create(
        //             {
        //               text:"Great place",
        //               author:"V"
        //             },function(err,comment){
        //                 if(err){
        //                   console.log(err);
        //                 }else{
        //                   campground.comments.push(comment);
        //                   campground.save();
        //               }
        //           });
        //       }
        //   }); 
        // });
    });
    
}

module.exports = seedDB; 
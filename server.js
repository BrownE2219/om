var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var User = require("./models/User");
var Story = require("./models/Story");
var db = require("./mysetup/myurl").myurl;
var app = express();

var port = process.env.PORT || 5000;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

mongoose
  .connect(db)
  .then(() => {
    console.log("Database is connected");
  })
  .catch(err => {
    console.log("Error is ", err.message);
  });

app.post("/signup", async (req, res) => {
  var newUser = new User({
    name: req.body.name,
    email:req.body.email,
    mobileNumber:req.body.mobileNumber,
    password: req.body.password,
    bloodGroup:req.body.bloodGroup,
    age:req.body.age,
    gender:req.body.gender,
    city:req.body.city,
    pinCode:req.body.pinCode,
    haveReport:req.body.haveReport,
    reportData:req.body.reportData,
    isDonor:req.body.isDonor
  });

  await User.findOne({ email: newUser.email })
    .then(async profile => {
      if (!profile) {
        await newUser
          .save()
          .then(() => {
            res.status(200).send(newUser);
          })
          .catch(err => {
            console.log("Error is ", err.message);
          });
      } else {
        res.status(401).send("User already exists...");
      }
    })
    .catch(err => {
      console.log("Error is", err.message);
    });
});
app.post("/login", async (req, res) => {
  var newUser = {};
  newUser.email = req.body.email;
  newUser.password = req.body.password;

  await User.findOne({ email: newUser.email })
    .then(profile => {
      if (!profile) {
        res.status(401).send("User not exist");
      } else {
        if (profile.password == newUser.password) {
          res.status(200).send(profile);
        } else {
          res.status(401).send("User Unauthorized Access");
        }
      }
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
});
app.post("/loginwithgoogle", async (req, res) => {
  var newUser = {};
  newUser.email = req.body.email;
  console.log(newUser.email);
  await User.findOne({ email:newUser.email })
    .then(profile => {
      if (!profile) {
        res.status(401).send("User not exist");
      } else {
          res.status(200).send(profile);
      }
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
});
app.post("/story", async (req,res) => {
  var newStory =new Story({
    user_id:req.body.user_id,
    message:req.body.message
  });
  await Story.findOne({ user_id: newStory.user_id })
    .then(async profile => {
      if (!profile) {
        await newStory
          .save()
          .then(() => {
            res.status(200).send(newStory);
          })
          .catch(err => {
            console.log("Error is ", err.message);
          });
      } else {
        res.status(401).send("User already exists...");
      }
    })
    .catch(err => {
      console.log("Error is", err.message);
    });
  });

  app.post("/getpost", async (req,res) => {
    await User.find()
      .then(async profiles =>{
        if(!profiles) {
          res.status(401).send("not found");
        }
        else {
          console.log(profiles)
          res.status(200).send(profiles);
        }
      })
      .catch(err => {
        console.log("Erroe fsd is ",err.message);
      });
   });


   app.post("/findAllStory", async (req,res) => {
     var newStory ={user_id:req.body.user_id,
        message:null,
        bloodGroup:null,
        name:null
      };
     await Story.findOne({user_id:newStory.user_id})
       .then(async profiles =>{
         if(!profiles) {
           res.status(401).send(`not found ${newStory.user_id}`);
         }
         else {
           console.log(profiles)
           newStory.message = profiles.message
         }
       })
       .catch(err => {
         console.log("Erroe fsd is ",err.message);
       });
       await User.findOne({ _id: newStory.user_id })
         .then(async profile => {
           if (!profile) {
             res.status(401).send(`User not found ${newStory.user_id}`);
           } else {
             newStory.bloodGroup = profile.bloodGroup;
             newStory.name = profile.name;
             res.status(200).send(newStory);
           }
         })
         .catch(err => {
           console.log("Error is", err.message);
         });
    });
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

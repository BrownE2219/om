var mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
   name:{
     type:String,
     require:true
   },
   password:{
     type:String,
     require:true
   },
   email:{
     type:String,
     require:true
   },
   mobileNumber:{
     type:Number,
     require:true
   },
   bloodGroup:{
     type:String,
     require:true
   },
   age:{
     type:String,
     require:true
   },
   gender:{
     type:String,
     require:true
   },
   city:{
     type:String,
     require:true
   },
   pinCode:{
     type:String,
     require:true
   },
   haveReport:{
     type:String,
     require:true
   },
   reportData:{
     type:String,
     require:true
   },
   isDonor:{
     type:Boolean,
     require:true
   }
});
module.exports = User = mongoose.model('UserSchema',UserSchema);

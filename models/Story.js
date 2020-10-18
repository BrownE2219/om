var mongoose = require('mongoose');
const StorySchema = mongoose.Schema({
   user_id:{
     type:String,
     require:true
   },
   message:{
     type:String,
     require:true
   }
});
module.exports = Story = mongoose.model('storySchema',StorySchema);

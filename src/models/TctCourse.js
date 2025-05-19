import {model, models, Schema} from "mongoose";

const TctCourseSchema = new Schema({
    name: String,
    courseLink: String,
    exerciseLink: String,
    
  }, {timestamps: true});
  
  const Tct_Course = models?.first_lycee_courses || model('first_lycee_courses', TctCourseSchema);
  
  export default Tct_Course; 
import {model, models, Schema} from "mongoose";

const SecondCollegueCourseSchema = new Schema({
    name: String,
    courseLink: String,
    exerciseLink: String,
    
  }, {timestamps: true});
  
  const Tct_Course = models?.first_lycee_courses || model('first_lycee_courses', SecondCollegueCourseSchema);
  
  export default Tct_Course;
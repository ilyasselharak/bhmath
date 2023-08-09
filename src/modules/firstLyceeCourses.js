
import {model, models, Schema} from "mongoose";

const FirstLyceeCourseSchema = new Schema({
  name: String,
  courseLink: String,
  exerciseLink: String,
  
}, {timestamps: true});

const First_Lycee_Course = models?.First_Lycee_Course || model('First_Lycee_Course', FirstLyceeCourseSchema);

export default First_Lycee_Course;

import {model, models, Schema} from "mongoose";

const Secondary2BacLyceeLettreCourses = new Schema({
  name: String,
  courseLink: String,
  exerciseLink: String,
  
}, {timestamps: true});

const Secondary_2Bac_Lycee_Lettre_Courses = models?.Secondary_2Bac_Lycee_Lettre_Courses || model('Secondary_2Bac_Lycee_Lettre_Courses', Secondary2BacLyceeEcoCourses);

export default Secondary_2Bac_Lycee_Lettre_Courses;
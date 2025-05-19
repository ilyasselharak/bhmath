import { model, models, Schema } from "mongoose";

const SecondBacMathCourseSchema = new Schema({
  name: String,
  courseLink: String,
  exerciseLink: String,
}, { timestamps: true });

const Second_Bac_Math_Course = models?.Second_Bac_Math_Course || model('Second_Bac_Math_Course',  SecondBacMathCourseSchema);

export default Second_Bac_Math_Course; 
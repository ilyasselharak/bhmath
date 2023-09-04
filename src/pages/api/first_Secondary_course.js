import Secondary_Science_Lycee_Courses from "@/modules/firstLyceeCourses";
import Secondary_Math_Lycee_Courses from "@/modules/secondaryMathLyceeCourse";
import Tct_Course from "@/modules/tct_courses";

export async function find_First_Secondary_TCT_Course() {
    return Tct_Course.find().exec();
  }

export async function find_Second_Secondary_Math_Course() {
  return Secondary_Math_Lycee_Courses.find().exec();
}
export async function find_Second_Secondary_Course() {
  return Secondary_Science_Lycee_Courses.find().exec();
}

  
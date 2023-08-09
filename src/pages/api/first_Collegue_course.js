import Second_Collegue_Course from "@/modules/SecondCollegueCourses";
import Third_Collegue_Course from "@/modules/ThirdCollegueCourses";
import First_Collegue_Course from "@/modules/firstCollegueCourses";
import First_Lycee_Course from "@/modules/firstLyceeCourses";


export async function find_First_Collegue_Course() {
  return First_Collegue_Course.find().exec();
}
export async function find_Second_Collegue_Course() {
  return Second_Collegue_Course.find().exec();
}
export async function find_Third_Collegue_Course() {
  return Third_Collegue_Course.find().exec();
}
export async function find_First_Lycee_Course() {
  return First_Lycee_Course.find().exec();
}
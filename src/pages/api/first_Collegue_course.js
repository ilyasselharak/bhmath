import Second_Collegue_Course from "@/modules/SecondCollegueCourses";
import First_Collegue_Course from "@/modules/firstCollegueCourses";


export async function find_First_Collegue_Course() {
  return First_Collegue_Course.find().exec();
}
export async function find_Second_Collegue_Course() {
  return Second_Collegue_Course.find().exec();
}
export async function find_Third_Collegue_Course() {
  return Second_Collegue_Course.find().exec();
}
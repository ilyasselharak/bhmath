import Second_Collegue_Course from "@/modules/SecondCollegueCourses";
import Third_Collegue_Course from "@/modules/ThirdCollegueCourses";
import Second_Collegue_Devoire from "@/modules/devoiresSecondCollegue";
import First_Collegue_Devoire from "@/modules/devoiresfirstcollegue";
import Third_Collegue_Devoire from "@/modules/devoiresthirdCollegue";
import First_Collegue_Course from "@/modules/firstCollegueCourses";
import First_Lycee_Course from "@/modules/firstLyceeCourses";
import Secondary_2Bac_Lycee_Math_Courses from "@/modules/secondary2bacMath";
import Secondary_2Bac_Lycee_Pc_Courses from "@/modules/secondary2bacPc";


export async function find_First_Collegue_Course() {
  return First_Collegue_Course.find().exec();
}
export async function find_Second_Collegue_Course() {
  return Second_Collegue_Course.find().exec();
}
export async function find_Third_Collegue_Course() {
  return Third_Collegue_Course.find().exec();
}
export async function find_First_Collegue_Devoire(){
  return First_Collegue_Devoire.find().exec()
}
export async function find_Second_Collegue_Devoire(){
  return Second_Collegue_Devoire.find().exec()
}
export async function find_Third_Collegue_Devoire(){
  return Third_Collegue_Devoire.find().exec()
}
export async function find_Third_Secondary_Courses(){
  return Secondary_2Bac_Lycee_Pc_Courses.find().exec()
}
export async function find_Third_Secondary_Math_Courses(){
  return Secondary_2Bac_Lycee_Math_Courses.find().exec()
}
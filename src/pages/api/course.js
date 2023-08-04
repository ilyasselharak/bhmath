import First_Collegue_Course from "@/modules/firstCollegueCourses";


export async function findAllCourse() {
  return First_Collegue_Course.find().exec();
}

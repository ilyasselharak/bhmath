import { initMongoose } from "@/lib/mongoose";
import Secondary_2Bac_Lycee_Pc_Courses from "@/modules/secondary2bacPc";
import Secondary_Math_Lycee_Courses from "@/modules/secondaryMathLyceeCourse";


export default async function handle(req,res){
    await initMongoose();
    if(req.method !== 'POST'){
        res.json('should a post but its not');
        return;
    }
    const {name,courseLink,exersiceLink} = req.body;
    const addCourse = await Secondary_2Bac_Lycee_Pc_Courses.create({
        name:name,
        courseLink:courseLink,
        exerciseLink:exersiceLink,
        
      });
    addCourse.save()
    return res.redirect(307, '/addCourse')
}
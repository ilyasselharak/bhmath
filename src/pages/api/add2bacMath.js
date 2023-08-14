import { initMongoose } from "@/lib/mongoose";
import Secondary_2Bac_Lycee_Math_Courses from "@/modules/secondary2bacMath";


export default async function handle(req,res){
    await initMongoose();
    if(req.method !== 'POST'){
        res.json('should a post but its not');
        return;
    }
    const {name,courseLink,exersiceLink} = req.body;
    const addCourse = await Secondary_2Bac_Lycee_Math_Courses.create({
        name:name,
        courseLink:courseLink,
        exerciseLink:exersiceLink,
        
      });
    addCourse.save()
    return res.redirect(301, '/addCourse')
}
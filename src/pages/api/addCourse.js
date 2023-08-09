import { initMongoose } from "@/lib/mongoose";
import First_Lycee_Course from "@/modules/firstLyceeCourses";

export default async function handle(req,res){
    await initMongoose();
    if(req.method !== 'POST'){
        res.json('should a post but its not');
        return;
    }
    const {name,courseLink,exersiceLink} = req.body;
    const addCourse = await First_Lycee_Course.create({
        name:name,
        courseLink:courseLink,
        exerciseLink:exersiceLink,
        
      });
    addCourse.save()
    return res.redirect(307, '/')
}
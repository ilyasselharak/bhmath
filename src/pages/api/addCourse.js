import { initMongoose } from "@/lib/mongoose";
import Third_Collegue_Course from "@/modules/ThirdCollegueCourses";

export default async function handle(req,res){
    await initMongoose();
    if(req.method !== 'POST'){
        res.json('should a post but its not');
        return;
    }
    const {name,courseLink,exersiceLink} = req.body;
    const addCourse = await Third_Collegue_Course.create({
        name:name,
        courseLink:courseLink,
        exerciseLink:exersiceLink,
        
      });
    addCourse.save()
    return res.redirect(307, '/')
}
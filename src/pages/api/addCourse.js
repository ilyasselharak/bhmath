import { initMongoose } from "@/lib/mongoose";
import Second_Collegue_Course from "@/modules/SecondCollegueCourses";

export default async function handle(req,res){
    await initMongoose();
    if(req.method !== 'POST'){
        res.json('should a post but its not');
        return;
    }
    const {name,courseLink,exersiceLink} = req.body;
    const addCourse = await Second_Collegue_Course.create({
        name:name,
        courseLink:courseLink,
        exerciseLink:exersiceLink,
        
      });
    addCourse.save()
    return res.redirect(307, '/')
}
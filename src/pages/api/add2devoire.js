import { initMongoose } from "@/lib/mongoose";
import Second_Collegue_Devoire from "@/modules/devoiresSecondCollegue";
import First_Collegue_Devoire from "@/modules/devoiresfirstcollegue";



export default async function handle(req,res){
    await initMongoose();
    if(req.method !== 'POST'){
        res.json('should a post but its not');
        return;
    }
    const {devoireLinkfirst,devoireLinkSecound,devoireLinkthird,devoireLinkforth,devoireLinkFifth,devoireLinkSex} = req.body;
    const addCourse = await Second_Collegue_Devoire.create({
        
        devoireLinkfirst:devoireLinkfirst,
        devoireLinkSecound:devoireLinkSecound,
        devoireLinkthird:devoireLinkthird,
        devoireLinkforth:devoireLinkforth,
        devoireLinkFifth:devoireLinkFifth,
        devoireLinkSex:devoireLinkSex,

        
      });
    addCourse.save()
    return res.redirect(301, '/addCourse')
}
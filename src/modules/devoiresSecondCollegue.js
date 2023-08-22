
import {model, models, Schema} from "mongoose";

const SecondCollegueDevoireSchema = new Schema({
  
  devoireLinkSecond: String,
  devoireLinkSecound: String,
  devoireLinkthird: String,
  devoireLinkforth: String,
  devoireLinkFifth: String,
  devoireLinkSex: String,
  
}, {timestamps: true});

const Second_Collegue_Devoire = models?.Second_Collegue_Devoire || model('Second_Collegue_Devoire', SecondCollegueDevoireSchema);

export default Second_Collegue_Devoire;
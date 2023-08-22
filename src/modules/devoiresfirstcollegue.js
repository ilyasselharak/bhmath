
import {model, models, Schema} from "mongoose";

const FirstCollegueDevoireSchema = new Schema({
  
  devoireLinkfirst: String,
  devoireLinkSecound: String,
  devoireLinkthird: String,
  devoireLinkforth: String,
  devoireLinkFifth: String,
  devoireLinkSex: String,
  
}, {timestamps: true});

const First_Collegue_Devoire = models?.First_Collegue_Devoire || model('First_Collegue_Devoire', FirstCollegueDevoireSchema);

export default First_Collegue_Devoire;
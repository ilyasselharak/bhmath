
import {model, models, Schema} from "mongoose";

const ThirdCollegueDevoireSchema = new Schema({
  
  devoireLinkThird: String,
  devoireLinkSecound: String,
  devoireLinkthird: String,
  devoireLinkforth: String,
  devoireLinkFifth: String,
  devoireLinkSex: String,
  
}, {timestamps: true});

const Third_Collegue_Devoire = models?.Third_Collegue_Devoire || model('Third_Collegue_Devoire', ThirdCollegueDevoireSchema);

export default Third_Collegue_Devoire;
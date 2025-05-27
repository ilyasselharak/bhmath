import mongoose from 'mongoose';

const FirstBacLettersDevoirSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.FirstBacLettersDevoir || mongoose.model('FirstBacLettersDevoir', FirstBacLettersDevoirSchema); 
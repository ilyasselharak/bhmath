import mongoose from 'mongoose';

const FirstCollegeDevoirSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  semester: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.FirstCollegeDevoir || mongoose.model('FirstCollegeDevoir', FirstCollegeDevoirSchema); 
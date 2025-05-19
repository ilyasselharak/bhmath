import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
    enum: [
      'firstCollege',
      'secondCollege',
      'thirdCollege',
      'TroncCommum',
      'firstBacMath',
      'firstBac',
      '2BacMath',
      '2BacPCSVT'
    ]
  },
  courseLink: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    default: 0,
  }
}, {
  timestamps: true,
});

export const Course = mongoose.models?.Course || mongoose.model('Course', CourseSchema); 
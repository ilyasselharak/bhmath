import { Course } from './models/Course';

export async function find_First_Collegue_Course() {
  try {
    return await Course.find({ level: 'firstCollege' }).sort({ order: 1 });
  } catch (error) {
    console.error('Error fetching first college courses:', error);
    return [];
  }
}

export async function find_Second_Collegue_Course() {
  try {
    return await Course.find({ level: 'secondCollege' }).sort({ order: 1 });
  } catch (error) {
    console.error('Error fetching second college courses:', error);
    return [];
  }
}

export async function find_Third_Collegue_Course() {
  try {
    return await Course.find({ level: 'thirdCollege' }).sort({ order: 1 });
  } catch (error) {
    console.error('Error fetching third college courses:', error);
    return [];
  }
}

export async function find_First_Secondary_TCT_Course() {
  try {
    return await Course.find({ level: 'TroncCommum' }).sort({ order: 1 });
  } catch (error) {
    console.error('Error fetching TCT courses:', error);
    return [];
  }
}

export async function find_Second_Secondary_Course() {
  try {
    return await Course.find({ level: 'firstBac' }).sort({ order: 1 });
  } catch (error) {
    console.error('Error fetching first bac courses:', error);
    return [];
  }
}

export async function find_Second_Secondary_Math_Course() {
  try {
    return await Course.find({ level: 'firstBacMath' }).sort({ order: 1 });
  } catch (error) {
    console.error('Error fetching first bac math courses:', error);
    return [];
  }
}

export async function find_Third_Secondary_Courses() {
  try {
    return await Course.find({ level: '2BacPCSVT' }).sort({ order: 1 });
  } catch (error) {
    console.error('Error fetching 2Bac PCSVT courses:', error);
    return [];
  }
} 
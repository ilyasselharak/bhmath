import { NextResponse } from 'next/server';
import Second_Bac_Math_Course from '@/models/SecondBacMathCourse';
import connectDB from '@/lib/mongoose';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const level = searchParams.get('level');

    await connectDB();
    
    let courses;
    if (level === '2BacMath') {
       
      courses = await Second_Bac_Math_Course.find({}).sort({ createdAt: -1 });
      console.log(courses)
    } else {
      courses = [];
    }

    return NextResponse.json(courses);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch courses' },
      { status: 500 }
    );
  }
} 
import { initMongoose } from '@/lib/mongoose';
import { useRouter } from 'next/router'
import React from 'react'
import {  find_First_Collegue_Course, find_First_Lycee_Course, find_Second_Collegue_Course, find_Third_Collegue_Course } from '../api/first_Collegue_course';
import Link from 'next/link';


export async function getServerSideProps({params}) {

  await initMongoose();
  
  let courses;
  switch (params.id[0]){
    case 'firstCollege':
      courses = await find_First_Collegue_Course()
      break;
    case 'secondCollege':
       courses = await find_Second_Collegue_Course()
       break;
    case 'thirdCollege':
      courses = await find_Third_Collegue_Course()
      break
  }
 const filtred = params.id[1] ? courses.filter(item=>item.name.trim()==params.id[1]):{}

  return {
    props: {
      course: JSON.parse(JSON.stringify(courses)),
      filtred: JSON.parse(JSON.stringify(filtred)),
    },
  };
}
export default function index({course,filtred}) {
    
    
   const router= useRouter()
  return (
    <div>
        {/* <div>{course.map((item)=>{return (<div>{item.name}<div>)})}</div>
         */}
        
         {filtred.length ? 
       <div className='flex flex-col items-center gap-y-12'>{filtred[0].exerciseLink.split(",,").map((item,index)=>{return <iframe key={index} src={item.trim()} style={{width:"80%"}} height="780" allow="autoplay" ></iframe>})} </div>
        :
        <div className='flex flex-col gap-y-5 '>{course.map((item,index)=><Link key={index} href={`${router.asPath}/${item.name}`}><div  className=' bg-yellow-200 p-4 rounded-md '>{item.name}</div></Link>)}</div>}
    </div>
  )
}

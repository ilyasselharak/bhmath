import { initMongoose } from '@/lib/mongoose';
import { useRouter } from 'next/router'
import React from 'react'
import { find_First_Collegue_Course, find_First_Collegue_Devoire, find_First_Lycee_Course, find_Second_Collegue_Course, find_Second_Collegue_Devoire, find_Third_Collegue_Course, find_Third_Collegue_Devoire } from '../api/first_Collegue_course';
import Link from 'next/link';



export async function getServerSideProps({params}) {
 
 
  await initMongoose();
  // console.log(params.id)
  let courses;
  switch (params.id[0]){
    case 'firstCollege':
      courses = await find_First_Collegue_Devoire()
      break;
    case 'secondCollege':
       courses = await find_Second_Collegue_Devoire()
       break;
    case 'thirdCollege':
      courses = await find_Third_Collegue_Devoire()
      break
  }
 
  return {
    props: {
      course: JSON.parse(JSON.stringify(courses)),
      
    },
  };
}
export default function index({course}) {

  console.log(course)
   const router= useRouter()
  return (
    <div >
       
        
       {/* {filtred.length ? 
       <div className='flex flex-col items-center gap-y-12'>{filtred[0].courseLink.split(",,").map((item,index)=>{return <iframe key={index} src={item.trim()} style={{width:"80%"}} height="780" allow="autoplay" ></iframe>})} </div>
        :
        <div className='flex flex-col gap-y-5 '>{course.map((item,index)=><Link key={index} href={`${router.asPath}/${item.name}`}><div  className=' bg-yellow-200 p-4 rounded-md '>{item.name}</div></Link>)}</div>} */}
    </div>
  )
}

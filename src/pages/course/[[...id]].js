import { initMongoose } from '@/lib/mongoose';
import { useRouter } from 'next/router'
import React from 'react'
import { find_First_Collegue_Course, find_First_Lycee_Course } from '../api/first_Collegue_course';
import Link from 'next/link';


export async function getServerSideProps({params}) {
 
 
  await initMongoose();
  const courses = await find_First_Collegue_Course();
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
        {!filtred.length ? <div className='flex flex-col gap-y-5'>
            {course.map((item,index)=>{return <div key={index} ><Link href={`${router.asPath}/${item.name}`}><div className=' bg-yellow-200 p-4 rounded-md '>{item.name}</div></Link></div>})}
         </div>:<div>{filtred[0].courseLink.split(",,").map(item=>{return <><iframe src={item.trim()} width="640" height="580" allow="autoplay" ></iframe><br/></>})} </div>}
    </div>
  )
}

import { initMongoose } from '@/lib/mongoose';
import { useRouter } from 'next/router'
import React from 'react'
import {  find_First_Collegue_Course,find_Second_Collegue_Course, find_Third_Collegue_Course } from '../api/first_Collegue_course';
import Link from 'next/link';
import { find_First_Secondary_TCT_Course, find_Second_Secondary_Course, find_Second_Secondary_Math_Course } from '../api/first_Secondary_course';
import TopHeader from '@/components/TopHeader';
import MainHeader from '@/components/MainHeader';
import NavHeader from '@/components/NavHeader';
import Image from 'next/image';


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
    case "TroncCommum":
      courses = await find_First_Secondary_TCT_Course()
      break
    case "firstBacMath":
        courses = await find_Second_Secondary_Math_Course()
        break
    case "firstBac":
        courses = await find_Second_Secondary_Course()
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
    <>
    <TopHeader/>
    <MainHeader />
    <NavHeader />
    <div>
       
        
         {filtred.length ? 
       <div className='flex flex-col items-center gap-y-12'>{filtred[0].exerciseLink.split(",,").map((item,index)=>{return <iframe key={index} src={item.trim()} style={{width:"80%"}} height="780" allow="autoplay" ></iframe>})} </div>
        :
        <div className=' flex justify-between mt-16'>
  <Image src={'/ads600.jpg'} width={160} height={600} alt={"addsenceAds"}/>
        <div className='flex flex-col gap-y-5 uppercase'>{course.map((item,index)=><Link key={index} href={`${router.asPath}/${item.name}`}><div  className=' bg-yellow-200 p-4 rounded-md '>{item.name}</div></Link>)}</div>
        <Image src={'/ads600.jpg'} width={160} height={600} alt={"addsenceAds"}/>
        </div>}
    </div>
    </>
  )
}

import React from 'react'

export default function () {
  return (
    <div>
        n oublier pas lordre des courses
<div>1 bac pc-svt</div>
      <form  action="/api/addCourse" method="POST" className="flex md:flex-row gap-x-4 flex-col  mt-8">
      <div className="flex gap-x-4 items-center">nom course :<input id="name"
              name="name" className="border border-gray-400" placeholder="اسم الدرس"/></div>
      <div className="flex gap-x-4 items-center">lien de courses :<input id="courseLink"
              name="courseLink"  className="border border-gray-400" placeholder="رابط الدرس"/></div>
      <div className="flex gap-x-4 items-center">lien d'exercice :<input id="exersiceLink"
              name="exersiceLink" className="border border-gray-400" placeholder="رابط التمرين"/></div>
      <input className="border border-gray-400 bg-green-600 p-3" type={"submit"} value={"اضافة"} />
      </form>  
      <div className="mt-16">2 bac lettre</div>
      <form  action="/api/addCourse1" method="POST" className="flex md:flex-row gap-x-4 flex-col  mt-8">
      <div className="flex gap-x-4 items-center">nom course :<input id="name"
              name="name" className="border border-gray-400" placeholder="اسم الدرس"/></div>
      <div className="flex gap-x-4 items-center">lien de courses :<input id="courseLink"
              name="courseLink"  className="border border-gray-400" placeholder="رابط الدرس"/></div>
      <div className="flex gap-x-4 items-center">lien d'exercice :<input id="exersiceLink"
              name="exersiceLink" className="border border-gray-400" placeholder="رابط التمرين"/></div>
      <input className="border border-gray-400 bg-green-600 p-3" type={"submit"} value={"اضافة"} />
      </form>
      <div className="mt-16">2 bac eco</div>

      <form  action="/api/add2bacPc" method="POST" className="flex md:flex-row gap-x-4 flex-col  mt-8">
      <div className="flex gap-x-4 items-center">nom course :<input id="name"
              name="name" className="border border-gray-400" placeholder="اسم الدرس"/></div>
      <div className="flex gap-x-4 items-center">lien de courses :<input id="courseLink"
              name="courseLink"  className="border border-gray-400" placeholder="رابط الدرس"/></div>
      <div className="flex gap-x-4 items-center">lien d'exercice :<input id="exersiceLink"
              name="exersiceLink" className="border border-gray-400" placeholder="رابط التمرين"/></div>
      <input className="border border-gray-400 bg-green-600 p-3" type={"submit"} value={"اضافة"} />
      </form>  
      <div className="mt-16">2 bac tct</div>

      <form  action="/api/add2bacMath" method="POST" className="flex md:flex-row gap-x-4 flex-col  mt-8">
      <div className="flex gap-x-4 items-center">nom course :<input id="name"
              name="name" className="border border-gray-400" placeholder="اسم الدرس"/></div>
      <div className="flex gap-x-4 items-center">lien de courses :<input id="courseLink"
              name="courseLink"  className="border border-gray-400" placeholder="رابط الدرس"/></div>
      <div className="flex gap-x-4 items-center">lien d'exercice :<input id="exersiceLink"
              name="exersiceLink" className="border border-gray-400" placeholder="رابط التمرين"/></div>
      <input className="border border-gray-400 bg-green-600 p-3" type={"submit"} value={"اضافة"} />
      </form>  
    </div>
  )
}

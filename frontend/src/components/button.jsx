import React from 'react'
import { Link } from 'react-router-dom'
export default function button({children,linkto,bgcolour,textcl}) {
  return (
    <div>
      <Link to={linkto}>
      <div className={`text-center text-[13px] px-6 py-3 rounded-md font-bold
${bgcolour} ${textcl} hover:scale-95 transition-all duration-200 border-2 border-slate-500`}>
{children}
      </div>
      
      </Link>
    </div>
  )
}

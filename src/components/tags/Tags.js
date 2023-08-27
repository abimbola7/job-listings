import React from "react"

const Tags = props => {
  const { jobs } = props
  return (
    <div className="flex-1 flex w-full xs:justify-end items-center text-desatDarkCyan font-semibold flex-wrap">
      {
        [jobs.role, jobs.level, ...jobs.languages, ...jobs.tools].map((elem)=>(
          <button
          key={elem}
          onClick={
            ()=>{
              props.onAdd(elem);
            }}
          className="bg-grayishCyan px-3 py-1 rounded-md hover:bg-desatDarkCyan cursor-pointer hover:text-white outline-none focus:outline-none mt-2 mr-2"
          >{elem}</button>
        ))
      }
    </div>
  )
}

export default Tags
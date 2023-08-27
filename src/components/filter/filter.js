import React from "react";
import Card from "../ui/card";
import "./filter.css"
import { ReactComponent as Remove } from "../../images/icon-remove.svg"

const Filter = (props) => {
  return (
    <header
    className="w-full h-28 bg-desatDarkCyan relative px-3"
    >
      {
        props.tags.length > 0 && (
          <Card
          className="w-[95%] flex px-4 xs:px-12 h-20 py-10 justify-between font-bold space-x-4 relative top-[80%] overflow-y-auto"
          >
            <div className="flex flex-wrap h-max overflow-auto">
            {
              props.tags.map((elem, i)=>(
                <div 
                key={elem}
                className="flex bg-[#effafa] text-desatDarkCyan rounded-md overflow-hidden mt-2 mr-3">
                  <div
                  className="px-2 py-2 "
                  >{elem}</div>
                  <button
                  onClick={()=>props.rmTag(elem)}
                  className="py-2 text-center bg-desatDarkCyan px-3 outline-none focus:outline-none hover:bg-veryDarkCyan"
                  >
                    <Remove/>
                  </button>
                </div>
              ))
            }
            </div>
            <button 
            onClick={()=>props.clrTag()}
            className="focus:outline-none outline-none text-veryDarkCyan tracking-wider hover:text-desatDarkCyan hover:underline">Clear</button>
          </Card>
        )
      }
    </header>
  )
}

export default Filter
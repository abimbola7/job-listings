import { Fragment } from "react";
const Features = props => {
  const { jobs } = props
  return (
    <div className="flex font-semibold items-center text-white text-sm flex-wrap gap-x-3 mt-1">
      {
        jobs.new && 
        <div className="px-2 bg-desatDarkCyan rounded-xl">
          NEW!
        </div>
      }
      {
        jobs.featured && 
        <div className="px-2 bg-veryDarkCyan rounded-xl">
          FEATURED
        </div>
      }
    </div>
  )
}

export default Features;
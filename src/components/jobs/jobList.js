import React from "react"
import JobItem from "./job-item"

const JobList = (props) => {
  const { jobs } = props
  const addHandler = (it) => {
    props.onAdding(it)
  }
  return (
    <div className="mt-24 space-y-12 xs:space-y-5 px-3 pb-2">
      {
        jobs.map(job=>(
          <JobItem
          key={job.id}
          jobs={job}
          onAddHandler = {addHandler}
          />
        ))
      }
    </div>
  )
}

export default JobList
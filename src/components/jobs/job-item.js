import Card from "../ui/card"
import Features from "../ui/features"
import Footer from "./job-footer"
import photosnap from "../../images/photosnap.svg"
import Tags from "../tags/Tags"

const JobItem = props => {
  const { jobs } = props
  const addHandler = (item) => {
    props.onAddHandler(item)
  }
  return (
    <Card
      className={`flex flex-col xs:flex-row xs:justify-between xs:items-center relative ${ jobs.featured && 'border-l-8  border-desatDarkCyan before:-left-1 before:top-0' } px-4 xs:px-5 py-7 xs:space-x-5`}
      >
        <div className="h-14 xs:h-20 absolute -top-8 z-[100000 ] xs:relative xs:top-0 xs:left-0">
          <div className="cursor-pointer rounded-full">
            <div className="overflow-hidden rounded-full h-full w-14 xs:w-20">
              <img src={jobs.logo} alt="" className=""/>          
            </div>
          </div>
        </div>
        <div className="content flex flex-col space-y-2 text-desatDarkCyan border-b xs:border-none pb-5 xs:pb-0">
          <div className="flex gap-x-2 flex-wrap">
            <p className="font-semibold text-lg cursor-pointer ">{ jobs.company }</p>
            <Features
            jobs={jobs}
            />
          </div>
          <p className="font-semibold text-xl text-veryDarkCyan">{ jobs.position }</p>
          <Footer
          jobs={jobs}
          />
        </div>
        <Tags
        jobs={jobs}
        onAdd={addHandler}
        />
    </Card>
  )
}

export default JobItem
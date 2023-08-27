import { Fragment, useEffect, useState, useCallback } from 'react';
import Filter from './components/filter/filter';
import JobList from './components/jobs/jobList';
import { jobs } from './components/data/jobs';
import './App.css';

function App() {
  const [filteredJob, setFilteredJob] = useState(jobs)
  const [selectedTags, setSelectedTags] = useState([])

  const filter = useCallback(
    () =>{
      setFilteredJob([])
      jobs.forEach((elem)=>{
        const { languages, level, role, tools } = elem
        let tags = [role, level, ...languages, ...tools];
        const isFilterPassed = selectedTags.every((ele)=>tags.includes(ele))
        if (isFilterPassed) {
          setFilteredJob(prevItem=>[...prevItem, elem])
        }
      }) 
    }, [selectedTags]) 

  const isAdding = (item) => {
    if (!selectedTags.includes(item)) {
      setSelectedTags(prevItem => [...prevItem, item]) 
    }
  }

  const removeTag = (i) => {
    let filteredTag = selectedTags.filter((elem)=>elem !== i)
    setSelectedTags(filteredTag)
  }

  const clearTag = () => {
    setSelectedTags([])
  }

  useEffect(() => {
    filter()
  }, [selectedTags])
  

  return (
    <Fragment>
      <Filter
      rmTag={removeTag}
      clrTag={clearTag}
      tags={selectedTags}
      />
      <JobList
      onAdding={isAdding}
      jobs={filteredJob}
      />
    </Fragment>
  );
}
export default App;

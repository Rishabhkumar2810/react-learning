import {Bookmark} from 'lucide-react'

const Card = (job) => {
  return (
    
      
      <div className="card">
      <div className="top">
        <img src={job.companyLogo} alt="name"/>
        <button>Save <Bookmark /></button>
      
      </div>
      <div className="center">
          <h3>{job.company} <span>{job.postTime}</span></h3>
          <h2>{job.role}</h2>
          <div>
            <h4>{job.jobType}</h4>
            <h4>{job.location}</h4>
          </div>
      </div>
      <div className="bottom">
    <div>
      <div>
        <h3>{job.salary}</h3>
        <p>{job.location}</p>
      </div>
      
    </div>
    <div>
      <button>Apply Now</button>
      </div>
      </div>
      </div>
   
  )
}

export default Card
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getstoredJobApplication } from "../../Utility/Localstorage";
import AppliedJobsDetails from "../AppliedJobsDetails/AppliedJobsDetails";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])


    const handleJobsFIlter = filter =>{
        if (filter === 'all') {
            setDisplayJobs(appliedJobs)
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs)
        }else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs)
        }

    }
    useEffect(() => {
        const storedJobIds = getstoredJobApplication();
        if (jobs.length > 0) {
            // const JobsApplied  = jobs.filter(job => storedJobIds.includes(job.id))
            // console.log(JobsApplied);
            const JobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id)
                if (job) {
                    JobsApplied.push(job)
                }
            }
            setAppliedJobs(JobsApplied)
            setDisplayJobs(JobsApplied)
            console.log(jobs, storedJobIds, JobsApplied);

        }
    }, [jobs])
    return (
        <div className="mt-8">
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={()=> handleJobsFIlter('all')}><a>All</a></li>
                    <li onClick={()=> handleJobsFIlter('remote')}><a>Remote</a></li>
                    <li onClick={()=> handleJobsFIlter('onsite')}><a>OnSite</a></li>

                </ul>
            </details>
            {
                displayJobs.map(appliedJob => <AppliedJobsDetails
                    appliedJob={appliedJob}
                    key={appliedJob.id}
                ></AppliedJobsDetails>)
            }
        </div>
    );
};

export default AppliedJobs;
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getstoredJobApplication } from "../../Utility/Localstorage";
import AppliedJobsDetails from "../AppliedJobsDetails/AppliedJobsDetails";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([])
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
            console.log(jobs, storedJobIds, JobsApplied);

        }
    }, [])
    return (
        <div className="mt-8">
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a>All</a></li>
                    <li><a>Remote</a></li>
                    <li><a>OnSite</a></li>

                </ul>
            </details>
            {
                appliedJobs.map(appliedJob => <AppliedJobsDetails
                    appliedJob={appliedJob}
                    key={appliedJob.id}
                ></AppliedJobsDetails>)
            }
        </div>
    );
};

export default AppliedJobs;
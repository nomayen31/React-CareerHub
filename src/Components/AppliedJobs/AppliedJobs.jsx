import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getstoredJobApplication } from "../../Utility/Localstorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    useEffect(()=>{
            const storedJobIds = getstoredJobApplication();
            if (jobs.length > 0) {
                // const JobsApplied  = jobs.filter(job => storedJobIds.includes(job.id))
                // console.log(JobsApplied);
                const JobsApplied = [];
                for(const id of storedJobIds){
                    const job = jobs.finf
                }

            }
    },[])
    return (
        <div>
          
        </div>
    );
};

export default AppliedJobs;
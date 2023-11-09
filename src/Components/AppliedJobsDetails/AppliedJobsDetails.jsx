import React from 'react';
import { FaLocationDot, FaSackDollar } from 'react-icons/fa6';

const AppliedJobsDetails = ({appliedJob}) => {

    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements, experiences
    } = appliedJob;
    return (
        <div >
         <div className='border rounded-lg mb-10 p-8  flex gap-6
         
         
         '>
            <div className='bg-gray-500 w-[200px] h-[200px] flex justify-center items-center '>
                <img src={logo} alt="" />
            </div>
            <div>
                <p>{job_title}</p>
                <p>{company_name}</p>
                <div className='mt-5'>
                    <button className=" mr-4 px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className=" mr-4 px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="mt-4 mb-4 flex">
                    <h2 className="gap-2 flex mr-10"><FaLocationDot className="text-2xl"></FaLocationDot>{location}</h2>
                    <h2 className="flex"><FaSackDollar className="text-2xl"></FaSackDollar>{salary}</h2>
                </div>

            </div>
            <div className='flex ml-96 '>
            <button className='btn bg-[#7E90FE] text-white mt-14 '>View Details</button>
            </div>
            
         </div>
         
        </div>
    );
};

export default AppliedJobsDetails;
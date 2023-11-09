import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaSackDollar, FaPhone } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../Utility/Localstorage';

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)

    const job = jobs.find(job => job.id === idInt);
    console.log(id, job);
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements, experiences
    } = job;
    const notify = () => {
        saveJobApplication(idInt)
        toast("Your job apply is successfully")
    };
    return (
        <div className=' mt-10 mb-10'>

            <div>
                <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
                    <div className='m-10'>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-10">
                            <div>
                                <blockquote>
                                    <p className="mt-6 text-base font-semibold text-black">Job Description: <span className='text-base text-gray-600'>{job_description}</span></p>
                                </blockquote>
                                <p className="mt-6 text-base font-semibold text-black">Job Responsibility: <span className='text-base text-gray-600'>{job_responsibility
                                }</span></p>
                                <p className="mt-6 text-base font-semibold text-black">Education Requirements:</p>
                                <p className="mt-1 text-base text-gray-600">{educational_requirements}</p>
                                <p className="mt-6 text-base font-semibold text-black">Experiences:</p>
                                <p className="mt-1 text-base text-gray-600">{experiences}</p>

                            </div>

                            <div>
                                <div className="overflow-hidden bg-purple-200 m-6 rounded-xl">
                                    <div className="p-8 lg:px-12 lg:py-10">
                                        <h3 className="text-xl  mb-2  text-black">Job Details:</h3>
                                        <hr className='h-1 bg-gray-400' />
                                        <div className='mt-4 '>
                                            <h2 className="flex gap-4 text-black"><FaSackDollar className="text-2xl"></FaSackDollar>Salary: {salary}(Per Month)</h2>
                                            <h2 className="flex gap-4 text-black mt-4"><FaSackDollar className="text-2xl"></FaSackDollar>Job Title: {job_title}</h2>
                                        </div>

                                        <h3 className="text-2xl mt-6 mb-4  text-black">Contact Information</h3>
                                        <hr className='h-1 bg-gray-400' />
                                        <div className='mt-4 '>
                                            <h2 className="flex gap-4 text-black"><FaPhone className="text-2xl"></FaPhone>Salary: {salary}(Per Month)</h2>
                                            <h2 className="flex gap-4 text-black mt-4"><FaSackDollar className="text-2xl"></FaSackDollar>Job Title: {job_title}</h2>
                                        </div>




                                    </div>
                                </div>
                                <div className='flex items-center justify-center '>
                                    <a title="" onClick={notify} className="flex items-center  justify-center w-[300px] px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border-2 border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700" role="button">
                                        Apply Now
                                    </a></div>

                            </div>

                        </div>
                        <ToastContainer />

                    </div>

                </section>

            </div>
        </div>
    );
};

export default JobDetails;
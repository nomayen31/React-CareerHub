import { FaLocationDot, FaSackDollar } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
    const {id, logo , job_title, company_name, remote_or_onsite, location, job_type, salary, job_description } = job;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl border p-8">
            <img src={logo} className="w-[160px] h-[50px] " alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title text-[#474747]">{job_title}</h2>
                <p className="mb-2 text-[#757575]">{company_name}</p>
                <div>
                    <button className=" mr-4 px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className=" mr-4 px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="mt-4 mb-4 flex">
                    <h2 className="gap-2 flex mr-10"><FaLocationDot className="text-2xl"></FaLocationDot>{location}</h2>
                    <h2 className="flex"><FaSackDollar className="text-2xl"></FaSackDollar>{salary}</h2>
                </div>
                <div className="card-actions justify-start">
                   <Link to={`/job/${id}`}> <button className="btn btn-primary bg-[#9676ff]">View Details</button></Link>
                   
                </div>
            </div>
        </div>
    );
};

export default Job;

// 3.33
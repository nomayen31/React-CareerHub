
const Job = ({ job }) => {
    const { logo , job_title, company_name, remote_or_onsite, location, job_type, salary, job_description } = job;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={logo} className="w-[160px] h-[50[px]]" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className=" mr-4 px-5 py-2 font-extrabold border rounded border-[#5616C5] text-[#82ECA5]">{remote_or_onsite}</button>
                    <button className=" mr-4 px-5 py-2 font-extrabold border rounded border-[#5616C5] text-[#82ECA5]">{job_type}</button>
                </div>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;
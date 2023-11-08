
const Job = ({job}) => {
    const {logo} = job;
    return (
        <div>
          <img className="w-[100px] h-[80px]" src={logo} alt="" />
        </div>
    );
};

export default Job;
import "./card-report.css"

const CardReport = ({ title,value,icon }) => {
  return (
    <>
     
        <div className="card-report__container">
          <div className="card-report__inner">
            <p>{title}</p>
            <i className={icon}></i>
          </div>
          <span className=" font-weight-bold">{value}</span>
        </div>
     
    </>
  );
};

export default CardReport;

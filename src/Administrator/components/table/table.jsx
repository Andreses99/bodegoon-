import "./table.css"
const Table = ({ children }) => {
  return (
    <>
      <div className="container_table-products">
        <table className="table-products table table-responsive">
            {children.map(value=>{
                return(
                    value
                )
            }

            )}
        </table>
      </div>
    </>
  );
};

export default Table;

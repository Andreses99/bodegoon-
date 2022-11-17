

const TableHader = ({ header }) => {
    return (
      
        <thead className="table__thead">
          <tr>
            {header.map((value) => {
              return <th key={value} scope="col">{value}</th>;
            })}
          </tr>
        </thead>
      
    );
  };
  
  export default TableHader;
  
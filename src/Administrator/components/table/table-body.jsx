import {Children} from "react"

const TableBody = ({ index,body, children }) => {
  return (
    <>
      <tr>
        <td>{index}</td>
        {body.map((value, index) => {
          return <td>{value}</td>;
        })}
        {Children.map(children, (node, index) =>{
            return <td>{node}</td>
            })}
      </tr>
    </>
  );
};

export default TableBody;

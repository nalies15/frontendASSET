import React from 'react'
import styles from './Table.module.css'
import data from '../../data.json'
import {ThreeDots} from 'react-bootstrap-icons';

const Table = ({ column }) => {
  console.log(data);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {column.map((item, index) => (
            <td key={index}>{item}</td>
          ))}
          <td></td> {/* Add Action column header */}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex}>
            {Object.values(item).map((value, colIndex) => (
              <td key={colIndex}>{value}</td>
            ))}
            <td>
              <button className="btn btn-sm border" style={{backgroundColor:'white', color: 'black'}}>
                <ThreeDots />
              </button> {/* Add Action button */} 
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;


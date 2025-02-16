import React from 'react'
import styles from './Table.module.css'
import data from '../../data.json'

const Table = ({column}) => {
  console.log(data)
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {column.map(item=>(
           <td>{item}</td> 
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(item=>(<tr>
          {Object.values(item).map(item=>(
              <td>{item}</td>
          ))}</tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table

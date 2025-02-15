import React from 'react'
import './Table.css'

const Table = ({column}) => {
  return (
    <table>
      <thead>
        <tr>
          {column.map(item=>(
           <td>{item}</td> 
          ))}
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>

          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table

import React, { useEffect, useState } from 'react'
import Table from '../components/Table/Table'
import "./HomePage.css"
import '../assets/css/global.css'
import Pagination from '../components/Pagination/Pagination';


const HomePage = () => {
    const tableHeader = ['Validation', 'Department', 'Designation','Device type','Model','Computer Name',''];
  return (
    <div className='w-75 m-auto d-flex flex-column gap-3'>
      {/* h1>Welcome!</h1> */}

      {/* search button, add new button, export button */}
      <div className="d-flex align-items-center justify-content-between">

        {/* search */}
        <div className='search-container'>
          <input 
            type="text" 
            className='search-input'
            placeholder='Search'
            />
            <button className='search-btn'>
              <i className='fa-solid fa-magnifying-glass'></i>
            </button>
        </div>


        <div className="buttons d-flex gap-2">
          {/* add button, export button */}
          <button className='add-btn btn'>
            <i class="fa-solid fa-plus"></i>
            Add New
          </button>
          <button className='export-btn btn'>
            <i class="fa-solid fa-file"></i>
            Export
          </button>
        </div>
      </div>

      {/* table */}
      <Table column={tableHeader}/>

      {/* turnover btn and pagination */}
      <div className='d-flex justify-content-between align-items-center'>
        {/* turnover */}
        <button className='turnover-btn btn'>
          <i class="fa-solid fa-plus"></i>
          Turnover
        </button>

        {/* pagination */}
        <Pagination/>
      </div>

    </div>
  )
}

export default HomePage

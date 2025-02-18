import React, {useEffect, useState} from "react";
import Table from "../components/Table/Table";
import "./HomePage.css"
import Pagination from "../components/Pagination/Pagination";
import '../assets/css/global.css'

const HomePage = () => {
       const tableHeader = ['Validation', 'Department', 'Designation', 'Device type', 'Model', 'Computer Name', ''];
    return (
        <div className="w-75 m-auto d-flex flex-column gap-3">
            <div className="d-flex align-items-center justify-content-between">
                <div className="search-container">
                    <input 
                        type="text"
                        className="search-input"
                        placeholder="..."
                    />
                    <button className="search-btn">
                        <i className="fa-solid fa- magnifyung-glass"></i>
                    </button>
                </div>

                <div className="buttons d-flex gap-2">
                    <button className="add-btn btn">
                        <i class="fa-solid fa-plus"></i>
                        Add New
                    </button>
                    <button className="export-btn btn">
                        <i className="fa-solid fa-file"></i>
                        Export
                    </button>
                </div>
            </div>

            <Table column={tableHeader}/>
            <div className="d-flex justify-content-between align-items-center">
                <button className="turnover-btn btn">
                    <i className="fa-solid fa-plus"></i>
                    Turnover
                </button>

                <Pagination/>
            </div>
        </div>
    )
}
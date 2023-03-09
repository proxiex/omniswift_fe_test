import React from 'react'
import Filter from "./Filter"
import DataTable from "./DataTable"

import './styles.less'

const dataTable = () => {
  return (
    <div className="container">
        <div className="title-text">
            <p> Student Data Table </p>
        </div>
        <Filter />
        <DataTable />
    </div>
  )
}

export default dataTable

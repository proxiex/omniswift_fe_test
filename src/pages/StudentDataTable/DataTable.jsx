import React from 'react'
import Table from "../../components/Table"
import {  Button } from 'antd'

import "./styles.less"

const TableContainer = ({ data }) => {

    const columns = [
        {
          title: 'S/N',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Surname',
          dataIndex: 'surname',
          key: 'surname',
          render: (data) => <p style={{ textTransform: 'capitalize'}}>{data}</p>
        },
        {
          title: 'First Name',
          dataIndex: 'firstname',
          key: 'firstname',
          render: (data) => <p style={{ textTransform: 'capitalize'}}>{data}</p>
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Gender',
          dataIndex: 'gender',
          key: 'gender',
          render: (data) => <p style={{ textTransform: 'capitalize'}}>{data}</p>
        },
        {
          title: 'Level',
          dataIndex: 'level',
          key: 'level',
        },
        {
          title: 'State',
          dataIndex: 'state',
          key: 'state',
        },
        {
          title: 'Action',
          dataIndex: 'action',
          key: 'action',
          render: (text) => <Button>Download Result</Button>,
        },
      ];

      console.log(data, '<<<<')
  return (
    <div className="table">
        <Table data={data?.students} columns={columns} />
    </div>
  )
}

export default TableContainer
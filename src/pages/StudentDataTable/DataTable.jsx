import React from 'react'
import Table from "../../components/Table"
import {  Button } from 'antd'

import "./styles.less"

const TableContainer = () => {

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
        },
        {
          title: 'First Name',
          dataIndex: 'firstName',
          key: 'firstName',
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

      const data = [
        {
          id: '1',
          surname: "Longshak",
          firstName: 'Sonia',
          age: 17,
          gender: 'Female',
          level: '200',
          state: 'Plateau',
          action: 'Download'
        },
        {
          id: '2',
          surname: "Longshak",
          firstName: 'Sonia',
          age: 17,
          gender: 'Female',
          level: '200',
          state: 'Plateau',
          action: 'Download'
        },
        {
          id: '3',
          surname: "Longshak",
          firstName: 'Sonia',
          age: 17,
          gender: 'Female',
          level: '200',
          state: 'Plateau',
          action: 'Download'
        },
        {
          id: '4',
          surname: "Longshak",
          firstName: 'Sonia',
          age: 17,
          gender: 'Female',
          level: '200',
          state: 'Plateau',
          action: 'Download'
        },
        {
          id: '5',
          surname: "Longshak",
          firstName: 'Sonia',
          age: 17,
          gender: 'Female',
          level: '200',
          state: 'Plateau',
          action: 'Download'
        },
        {
          id: '6',
          surname: "Longshak",
          firstName: 'Sonia',
          age: 17,
          gender: 'Female',
          level: '200',
          state: 'Plateau',
          action: 'Download'
        },
        {
          id: '7',
          surname: "Longshak",
          firstName: 'Sonia',
          age: 17,
          gender: 'Female',
          level: '200',
          state: 'Plateau',
          action: 'Download'
        },
        {
          id: '8',
          surname: "Longshak",
          firstName: 'Sonia',
          age: 17,
          gender: 'Female',
          level: '200',
          state: 'Plateau',
          action: 'Download'
        },
        {
          id: '9',
          surname: "Longshak",
          firstName: 'Sonia',
          age: 17,
          gender: 'Female',
          level: '200',
          state: 'Plateau',
          action: 'Download'
        },
        {
          id: '10',
          surname: "Longshak",
          firstName: 'Sonia',
          age: 17,
          gender: 'Female',
          level: '200',
          state: 'Plateau',
          action: 'Download'
        },
      ];
      
  return (
    <div className="table">
        <Table data={data} columns={columns} />
    </div>
  )
}

export default TableContainer
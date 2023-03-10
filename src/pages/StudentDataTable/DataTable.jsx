import React from 'react'
import Table from "../../components/Table"
import {  Button } from 'antd'
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from '../../hooks/redux-hooks'
import { viewResultActon } from '../../redux/allData/action'

import "./styles.less"

const TableContainer = ({ data, loading }) => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const loadResults = (id) => {
      dispatch(viewResultActon({ id }))
      return navigate("/result")
    }

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
          render: (data) => <Button onClick={() => loadResults(data?.id)}>Download Result</Button>,
        },
    ];

  return (
    <div className="table">
        <Table data={data?.students} loading={loading} columns={columns} />
    </div>
  )
}

export default TableContainer
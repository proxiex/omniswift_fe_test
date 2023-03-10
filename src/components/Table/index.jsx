import React from 'react'
import { Table } from 'antd';
import { loadingType } from '../../constants/loading'

const TableComponent = ({ data, columns, loading }) => {
  return (
    <Table columns={columns} loading={loading === loadingType.loading } pagination={false} dataSource={data} />
  )
}

export default TableComponent

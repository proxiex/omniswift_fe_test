import React from 'react'
import { Table } from 'antd';

const TableComponent = ({ data, columns }) => {
  return (
    <Table columns={columns} pagination={false} dataSource={data} />
  )
}

export default TableComponent
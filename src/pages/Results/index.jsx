import React from 'react'
import { Skeleton } from 'antd';

import ResultPDF from './ResultPDF'

import {  useAppSelector } from '../../hooks/redux-hooks'
import { loadingType } from '../../constants/loading';

const ResultPage = () => {

  const { loading, singleData } = useAppSelector(state => state.allData)
  return (
    <div className="container">
        { loadingType.loading === loading? <Skeleton /> : <ResultPDF data={singleData} />}
    </div>
  )
}

export default ResultPage

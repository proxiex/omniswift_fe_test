import React, { useEffect } from 'react'
import Filter from "./Filter"
import DataTable from "./DataTable"

import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { getAllLevelsAction } from '../../redux/levels/action'
import { getAllAgesAction } from '../../redux/ages/action'
import { getAllStatesAction } from '../../redux/states/action'
import { getAllGenderAction } from '../../redux/gender/action'
import { getAllDataAction } from '../../redux/allData/action'

import './styles.less'

const StudentDataTable = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllLevelsAction())
    dispatch(getAllAgesAction())
    dispatch(getAllStatesAction())
    dispatch(getAllGenderAction())
    dispatch(getAllDataAction())
  }, [dispatch])

  const {
    levels: { levels },
    ages: { ages },
    states: { states },
    gender: { gender },
    allData: { allData }
  } = useAppSelector(state => state)

  return (
    <div className="container">
        <div className="title-text">
            <p> Student Data Table </p>
        </div>
        <Filter
          levels={levels}
          ages={ages}
          states={states}
          gender={gender}
        />
        <DataTable data={allData} />
    </div>
  )
}

export default StudentDataTable

import React, {  useState } from 'react'
import {
    Button,
    Form,
    Select,
    Row,
    Col
} from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { filterAllDataAction } from '../../redux/allData/action'
import { loadingType } from '../../constants/loading'


const { Option } = Select;

const Filter = ({
    levels,
    ages,
    states,
    gender
}) => {

    const [filterData, setFilterDAta] = useState({})

    const dispatch = useAppDispatch()
    const { loading } = useAppSelector(state => state.allData)

    const onSelect = (data, name) => {
        setFilterDAta({...filterData, [name]: data})
    }

    const filter = () => {
        if (Object.keys(filterData)){
            dispatch(filterAllDataAction(filterData))
        }
    }

  return (
    <div className="filter">
        <p>Filter Student Table By: </p>
        <Form style={{ width: "100%"}} >
            <Row gutter={18} justify="space-between">
                <Col span={8}>
                    <Form.Item
                        name='age'
                    >
                        <Select
                        style={{ width: "100%" }}
                        size='large'
                        onChange={(data) => onSelect(data, 'age')}
                        placeholder='Select age'>
                        {ages.map((item) => (
                            <Option key={item.id} value={item.age} className='option'>
                            {item.age}
                            </Option>
                        ))}
                        </Select>
                    </Form.Item>
                </Col>

                <Col span={8}>
                    <Form.Item
                        name='state'
                    >
                        <Select
                            style={{ width: "100%" }}
                            size='large'
                            showSearch={true}
                            onChange={(data) => onSelect(data, 'state')}
                            placeholder='Select state'
                        >
                        {states.map((item) => (
                            <Option key={item.id} value={item.name} className='option'>
                            {item.name}
                            </Option>
                        ))}
                        </Select>
                    </Form.Item>
                </Col>

                <Col span={8}>
                    <Form.Item
                        name='level'
                    >
                        <Select
                        style={{ width: "100%" }}
                        size='large'
                        onChange={(data) => onSelect(data, 'level')}
                        placeholder='Select level'>
                            <Option></Option>
                        {levels.map((item) => (
                            <Option key={item.id} value={item.level} className='option'>
                            {item.level}
                            </Option>
                        ))}
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16} style={{ marginTop: "2%"}} >
                <Col span={8}>
                    <Form.Item
                        name='gender'
                    >
                        <Select
                        style={{ width: "100%" }}
                        size='large'
                        showSearch
                        onChange={(data) => onSelect(data, 'gender')}
                        placeholder='Select gender'>
                        {gender.map((item) => (
                            <Option key={item.id} value={item.gender} className='option'>
                            {item.gender}
                            </Option>
                        ))}
                        </Select>
                    </Form.Item>
                </Col>

                <Col lg={8}>
                    <Button
                        style={{ width: "100%" }}
                        size='large'
                        showSearch
                        onClick={filter}
                        placeholder='Select'
                    >
                        { loading === loadingType.loading ? "Searching..." : "Search"}
                    </Button>
                </Col>
            </Row>
        </Form>
    </div>
  )
}

export default Filter
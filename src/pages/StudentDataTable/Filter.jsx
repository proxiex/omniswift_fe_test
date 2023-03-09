import React from 'react'
import {
    Button,
    Form,
    Select,
    Row,
    Col
} from 'antd';

const { Option } = Select;

const Filter = ({
    levels,
    ages,
    states,
    gender
}) => {
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
                        onChange={() => {}}
                        placeholder='Select age'>
                        {ages.map((item) => (
                            <Option key={item.id} className='option'>
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
                            onChange={() => {}}
                            placeholder='Select state'
                        >
                        {states.map((item) => (
                            <Option key={item.id} className='option'>
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
                        onChange={() => {}}
                        placeholder='Select level'>
                            <Option></Option>
                        {levels.map((item) => (
                            <Option key={item.id} className='option'>
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
                        onChange={() => {}}
                        placeholder='Select gender'>
                        {gender.map((item) => (
                            <Option key={item.id} className='option'>
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
                        onChange={() => {}}
                        placeholder='Select'
                    >
                        Search
                    </Button>
                </Col>
            </Row>
        </Form>
    </div>
  )
}

export default Filter
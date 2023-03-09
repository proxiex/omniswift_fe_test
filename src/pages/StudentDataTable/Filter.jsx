import React from 'react'
import {
    Button,
    Form,
    Select,
    Row,
    Col
} from 'antd';

const { Option } = Select;

const Filter = () => {
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
                        showSearch
                        onChange={() => {}}
                        placeholder='Select'>
                        {[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            { value: 'disabled', label: 'Disabled' },
                        ].map((item) => (
                            <Option key={item.value} className='option'>
                            {item.label}
                            </Option>
                        ))}
                        </Select>
                    </Form.Item>
                </Col>

                <Col span={8}>
                    <Form.Item
                        name='age'
                    >
                        <Select
                        style={{ width: "100%" }}
                        size='large'
                        showSearch
                        onChange={() => {}}
                        placeholder='Select'>
                        {[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            { value: 'disabled', label: 'Disabled' },
                        ].map((item) => (
                            <Option key={item.value} className='option'>
                            {item.label}
                            </Option>
                        ))}
                        </Select>
                    </Form.Item>
                </Col>

                <Col span={8}>
                    <Form.Item
                        name='age'
                    >
                        <Select
                        style={{ width: "100%" }}
                        size='large'
                        showSearch
                        onChange={() => {}}
                        placeholder='Select'>
                        {[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            { value: 'disabled', label: 'Disabled' },
                        ].map((item) => (
                            <Option key={item.value} className='option'>
                            {item.label}
                            </Option>
                        ))}
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16} style={{ marginTop: "2%"}} >
                <Col span={8}>
                    <Form.Item
                        name='age'
                    >
                        <Select
                        style={{ width: "100%" }}
                        size='large'
                        showSearch
                        onChange={() => {}}
                        placeholder='Select'>
                        {[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            { value: 'disabled', label: 'Disabled' },
                        ].map((item) => (
                            <Option key={item.value} className='option'>
                            {item.label}
                            </Option>
                        ))}
                        </Select>
                    </Form.Item>
                </Col>

                <Col lg={8}>
                    <Button
                        style={{ width: "100%", background: 'red' }}
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
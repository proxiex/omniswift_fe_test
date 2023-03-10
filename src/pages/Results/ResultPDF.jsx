import React from 'react'
import { Row, Col, Button } from 'antd';
import { useNavigate } from "react-router-dom";

import TableComponent from '../../components/Table';

import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

import './style.less'

const PDF = ({ data }) => {
  const printRef = React.useRef();
  const navigate = useNavigate()

  const resultCols = [
    {
        title: 'S/N',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Course Code',
        dataIndex: 'coursecode',
        key: 'coursecode',
    },
    {
        title: 'Course Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'unit',
        dataIndex: 'credit_unit',
        key: 'credit_unit',
    },
    {
        title: 'Grade',
        dataIndex: 'grade',
        key: 'grade',
    },
    {
        title: 'Total Points',
        dataIndex: 'total_point',
        key: 'total_point',
    },
]

const cummulative = [
    {
        title: 'UNTS',
        dataIndex: 'unts',
        key: 'unts'
    },
    {
        title: 'UNTD',
        dataIndex: 'untd',
        key: 'untd'
    },
    {
        title: 'GPTS',
        dataIndex: 'gpts',
        key: 'gpts'
    },
    {
        title: 'GPTD',
        dataIndex: 'gptd',
        key: 'gptd'
    },
    {
        title: 'GPATS',
        dataIndex: 'gpats',
        key: 'gpats'
    },
    {
        title: 'GPATD',
        dataIndex: 'gpatd',
        key: 'gpatd'
    },
]

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const pdfData = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(pdfData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =
      (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(pdfData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${data?.data?.reg_no}.pdf`);
  };

  return (
    <div style={{ width: '100%'}}>
        <div style={{ textAlign: 'center', marginBottom: '20px'}}>
            <Button type="button" onClick={() => navigate('/')}>
                {'<< Back'} 
            </Button>
            &nbsp;
            <Button type="button" onClick={handleDownloadPdf}>
                Download as PDF
            </Button>
        </div>
       <div className='result' ref={printRef}>
      <Row justify="space-between">
        <Col span={2}>
            <img src={data?.logo} alt="logo"/>
        </Col>
        <Col span={10}>
            <div className="text">
                <p className="title">Fremont Collage of Education</p>
                <p className="address">
                No.5 Raymond Osuman Street, PMB 2191 Maitama, Abuja, Nigeria.
                </p>
                <p className="degree">
                    Post Graduate Diploma in Education
                </p>
                <p className="result-type">
                    Student First Semester Statement Of Result
                </p>
            </div>
        </Col>
        <Col span={4}>
        <img style={{ width: "100%"}} src={data?.profile_picture} alt="profile pic"/>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col>
            <div className="bio-info">
                <p>
                    <span>Name:</span>{data?.data?.firstname} {data?.data?.surname}
                </p>
                <p>
                    <span>Level:</span> {data?.data?.level}
                </p>
            </div>
        </Col>
        <Col>
            <div className='bio-info'>
                <p>
                   <span>Reg No.:</span> {data?.data?.reg_no}
                </p>
                <p>
                    <span>Session:</span> {data?.data?.session}
                </p>
            </div>
        </Col>
      </Row>
      <Row gutter={[16, 32]}>
        <Col span={24}>
            <TableComponent data={data?.data?.result} columns={resultCols} />
        </Col>
      </Row>
      <Row gutter={[16, 32]}>
        <Col span={18}>
            <div style={{ marginTop: "50px"}}>
                <TableComponent data={[data?.data?.cummulative]} columns={cummulative} />
            </div>
        </Col>
      </Row>
      
      <div style={{ marginTop: '10px'}}>
        <p>Remarks: {data?.data?.cummulative?.remarks} </p>
      </div>
      <div style={{ marginTop: '100px'}}> 
        <p>_________________________</p>
        Registrar
      </div>
       </div>
    </div>
  );
};

export default PDF

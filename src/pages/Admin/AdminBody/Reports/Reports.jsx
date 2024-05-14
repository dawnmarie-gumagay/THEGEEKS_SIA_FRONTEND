import './reports.css';

import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

const Reports = () => {
    const pdfRef = useRef();
    const [modules, setModules] = useState(10);
    const [moduleCopies, setModuleCopies] = useState(100);
    const [officeForms, setOfficeForms] = useState(9);
    const [officeCopies, setOfficeCopies] = useState(0);
    const [exams, setExams] = useState(5);
    const [examCopies, setExamCopies] = useState(0);
    const [manuals, setManuals] = useState(17);
    const [manualCopies, setManualCopies] = useState(0);
    const [dates, setDates] = useState('week');
    
    const [values, setValues] = useState([
        {
            'fileType' : 'Module',
            'number': modules,
            'copies' : moduleCopies}
        ,{
            'fileType' : 'Office Form',
            'number' : officeForms,
            'copies' : officeCopies}
        ,{
            'fileType' : 'Exam',
            'number' : exams,
            'copies' : examCopies}
        ,{
            'fileType' : 'Manual',
            'number' : manuals,
            'copies' : manualCopies
        }
    ]);

    const handleDays = (event) => {
        console.log(event.target.value);
        setDates(event.target.value);
    }

    const downloadReport = () => {
        const input = pdfRef.current;
        html2canvas(input).then((canvas) =>{
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('l', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth/imgWidth, pdfHeight/imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio)/ 2;
            const imgY = 30;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight*ratio);
            pdf.save('Report.pdf');
        })
    }
      
    const renderHeader = () => {
          return (
              <div id="historyHeader" className="flex">
                  <h1>System Report</h1>
                  <select id = 'days' onChange={(e) => handleDays(e)}>
                            <option value='week' >Last 7 Days</option>
                            <option value='2week' >Last 14 Days</option>
                            <option value='3week' >Last 21 Days</option>
                            <option value='month' >Last 30 Days</option>
                            <option value='2month' >Last 60 Days</option>
                  </select>
              </div>
          );
      };
  
    const header = renderHeader();
  
    useEffect(() => {
        const date = new Date();
        console.log(dates);
        if(dates === 'week'){
            date.setDate(date.getDate() - 7);
        }else if (dates === '2week'){
            date.setDate(date.getDate() - 14);
        }else if (dates === '3week'){
            date.setDate(date.getDate() - 21);
        }else if (dates === 'month'){
            date.setDate(date.getDate() - 30);
        }else if (dates === '2month'){
            date.setDate(date.getDate() - 60);
        }

        console.log(date.toISOString().substring(0,10));
        const requestOptions = {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
          },
          };
        
        fetch("http://localhost:8080/records/getModules?dates=" + date.toISOString().substring(0,10), requestOptions).then((response)=> response.json()
        ).then((data) => { setModules(data); console.log(data);
        })
        .catch(error =>
            {
                console.log(error);
            }
        );

        fetch("http://localhost:8080/requests/getModuleCopies?dates=" + date.toISOString().substring(0,10), requestOptions).then((response)=> response.json()
        ).then((data) => { setModuleCopies(data); console.log(data);
        })
        .catch(error =>
            {
                console.log(error);
            }
        );

        fetch("http://localhost:8080/records/getOfficeForms?dates=" + date.toISOString().substring(0,10), requestOptions).then((response)=> response.json()
        ).then((data) => { setOfficeForms(data); console.log(data);})
        .catch(error =>
            {
                console.log(error);
            }
        );

        fetch("http://localhost:8080/requests/getOfficeFormCopies?dates=" + date.toISOString().substring(0,10), requestOptions).then((response)=> response.json()
        ).then((data) => { setOfficeCopies(data); console.log(data);
        })
        .catch(error =>
            {
                console.log(error);
            }
        );

        fetch("http://localhost:8080/records/getExams?dates=" + date.toISOString().substring(0,10), requestOptions).then((response)=> response.json()
        ).then((data) => { setExams(data); console.log(data);})
        .catch(error =>
            {
                console.log(error);
            }
        );

        fetch("http://localhost:8080/requests/getExamCopies?dates=" + date.toISOString().substring(0,10), requestOptions).then((response)=> response.json()
        ).then((data) => { setExamCopies(data); console.log(data);
        })
        .catch(error =>
            {
                console.log(error);
            }
        );

        fetch("http://localhost:8080/records/getManuals?dates=" + date.toISOString().substring(0,10), requestOptions).then((response)=> response.json()
        ).then((data) => { setManuals(data); console.log(data);})
        .catch(error =>
            {
                console.log(error);
            }
        );

        fetch("http://localhost:8080/requests/getManualCopies?dates=" + date.toISOString().substring(0,10), requestOptions).then((response)=> response.json()
        ).then((data) => { setManualCopies(data); console.log(data);
        })
        .catch(error =>
            {
                console.log(error);
            }
        );

        setValues([
            {
                'fileType' : 'Module',
                'number': modules,
                'copies' : moduleCopies}
            ,{
                'fileType' : 'Office Form',
                'number' : officeForms,
                'copies' : officeCopies}
            ,{
                'fileType' : 'Exam',
                'number' : exams,
                'copies' : examCopies}
            ,{
                'fileType' : 'Manual',
                'number' : manuals,
                'copies' : manualCopies
            }
        ]);
    }, [dates, modules, officeForms, manuals, exams, moduleCopies, officeCopies, examCopies, manualCopies]);
    
      return(
          <div >
              <div id="reportsTable" ref={pdfRef} >
              <DataTable value={values} scrollable scrollHeight="28vw" header={header} emptyMessage="No data found."
                  tableStyle={{ minWidth: '20vw' }} selectionMode="single">
                  <Column field="fileType" header="Printed Document Type"></Column>
                  <Column field="number" header="Total Number of Requests"></Column>
                  <Column field="copies" header="Total Number of Copies"></Column>
              </DataTable>
              </div>
              <button id="dlButton" onClick={downloadReport}>Download Report</button>
          </div>
      );
  };

  export default Reports;

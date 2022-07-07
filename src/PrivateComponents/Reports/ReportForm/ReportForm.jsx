import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import './ReportForm.css'

function ReportForm() {
    const [name, setName] = useState('')
    const [pronouns, setPronouns] = useState('')
    const [anonymous, setAnonymous] = useState(true)
    const [incidentDate, setIncidentDate] = useState('')
    const [incidentLocation, setIncidentLocation] = useState('')
    const [reportBody, setReportBody] = useState('')
    const submitReport = ()=>{
        const report = {
            name: name,
            pronouns: pronouns,
            anoymous: anonymous,
            incidentDate: incidentDate,
            incidentLocation: incidentLocation,
            reportBody: reportBody
        }
    }
    
    return (
    <div className="ReportForm">
        <h1>This is the Report Form component</h1>
        <Form className="report-form">
            <Form.Group>
                <Form.Label className="form-label">Name/Nickname (Optional)</Form.Label>
                <Form.Control className="user-input" type="text" placeholder="Optional" name="name" onChange={(e)=>{setName(e.target.value); console.log(name)}}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label className="form-label">Preferred Pronouns</Form.Label>
                <Form.Control className="user-input" type="text" placeholder="Optional" name="pronouns" onChange={(e)=>{setPronouns(e.target.value); console.log(pronouns)}}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label className="form-label">Anonymous</Form.Label>
                <Form.Select className="user-input" name="anonymous" onChange={(e)=>setAnonymous(e.target.value)}>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label className="form-label">Incident Date</Form.Label>
                <Form.Control className="user-input" type="date" name="incident-date" onChange={(e)=>{setIncidentDate(e.target.value)}}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label className="form-label">Incident Location</Form.Label>
                <Form.Control className="user-input" type="text" placeholder="City, State, Country" name="incident-location" onChange={(e)=>{setIncidentLocation(e.target.value); console.log(incidentLocation)}}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label className="form-label">Write your report here</Form.Label>
                <Form.Control className="report-input" type="text" placeholder="What happened?" name="incident-report-body" onChange={(e)=>{setReportBody(e.target.value); console.log(reportBody)}}></Form.Control>
            </Form.Group>
        </Form>
    </div>
)}

export default ReportForm;
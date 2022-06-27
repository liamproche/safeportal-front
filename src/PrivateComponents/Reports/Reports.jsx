import ReportForm from './ReportForm/ReportForm'
import ReportInstructions from './ReportInstructions/ReportInstructions'
import Nav from "../Nav/Nav"
import "./Reports.css"

function Reports() {
    return <div className="Reports">
        <Nav/>
        <section className="reports-container">
            <ReportInstructions/>
            <ReportForm/>
        </section>
    </div>
}

export default Reports;
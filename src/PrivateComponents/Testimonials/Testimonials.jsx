import Nav from '../Nav/Nav'
import Resources from '../Resources/Resources'
import './Testimonials.css'

function Testimonials() {
    return <div className="testimonials">
        <Nav/>
        <div className="testimonials-container">
            <Resources/>
            <h1>This is the Testimonials component</h1>
        </div>
    </div>
}

export default Testimonials
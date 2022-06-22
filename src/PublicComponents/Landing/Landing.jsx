import About from './About/About'
import Login from './Login/Login';
import './Landing.css'

function Landing() {
    return (
        <main className="Landing">
                <section className="about-container">
                    <About/>
                </section>
                <section className="login-container">
                    <div className="login-elements">
                        <h3 className="form-header" id="login-header" key="login-header">Log In here:</h3>
                        <Login/>
                    </div>
                </section>
        </main>
    );
}

export default Landing;
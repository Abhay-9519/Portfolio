import "./About.css";
function About(){
    return(
        <section className="section about" id="about">
            <div className="section about" id="about">
                <div className="about-main">
                <h2 className="section-title">About me</h2>
                <p className="about-text">
                    I'm a B.tech 3rd year student at SHEAT College of Engineering,Varanasi.
                    I enjoy turning ideas into working website, and I've spent the last year 
                    building projects with the MERN stack.  
                </p>
                <a href="#" className="btn btn-primary" target="_blank" rel="noreferrer">Download resume</a>
                </div>
                <ul className="about-facts">
                <li>
                    <span className="fact-label">Location</span>
                    <span>Varanasi, India</span>
                </li>
                 <li>
                    <span className="fact-label">GitHub</span>
                    <a href="mailto:mrabhay9519@gmail.com">mrabhay9519@gmail.com</a>
                </li>
                <li>
                    <span className="fact-label">GitHub</span>
                    <a href="https://github.com" target="_blank" rel="noreferrer">github.com/Abhay-9519</a>
                </li>
                <li>
                    <span className="fact-label">linkedIn</span>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">linkedin.com/in/</a>
                </li>
                </ul>
            </div>
        </section>
    );
}
export default About;
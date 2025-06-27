import Footer1 from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            {/* Inline CSS */}
            <style>{`
                .custom-footer {
                    margin-top: -40px; /* Move the footer upward */
                }

                .hero-banner-image {
                    width: 100%;
                    height: auto;
                }

                .hero-overlay-text {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: white;
                    text-align: center;
                }

                .hero-section {
                    position: relative;
                    text-align: center;
                }

                .hero-btn, .primary-btn {
                    padding: 10px 20px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    text-decoration: none;
                    font-weight: bold;
                }

                .page-container {
                    padding: 20px;
                }

                #p {
                    font-size: 16px;
                    line-height: 1.6;
                }

                #h1 {
                    margin-top: 30px;
                    font-size: 24px;
                    color: #333;
                }

                #i {
                    width: 45%;
                    margin: 10px;
                    border-radius: 8px;
                }

                .call-to-action {
                    margin-top: 30px;
                    text-align: center;
                }
            `}</style>

            <Header />

            <div className="content">
                <div style={{ marginTop: '50px' }} className="page-container">
                    <div className="main-content-scrollable">
                        <div className="hero-section">
                            <img alt="vivekanand college campus" className="hero-banner-image" src="images/vck.jpg" />
                            <div className="hero-overlay-text">
                                <h1>Welcome to Vivekanand College!</h1>
                                <p id="z">Your journey to excellence starts here</p><br />
                                <Link to="/admission" className="hero-btn">Apply Now</Link>
                            </div>
                        </div>

                        <p id="p">
                            Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.
                        </p><br />

                        <p id="p">
                            At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.
                        </p><br />

                        <h1 id="h1">Why Choose Vivekanand College?</h1>
                        <ul id="h1"><br />
                            <li id="p"><strong>Legacy of Excellence:</strong> Decades of commitment to quality education.</li>
                            <li id="p"><strong>Experienced Faculty:</strong> Learn from renowned experts and passionate educators.</li>
                            <li id="p"><strong>Modern Facilities:</strong> Well-equipped labs, expansive library, and comfortable campus.</li>
                            <li id="p"><strong>Holistic Development:</strong> Focus on co-curricular activities, sports, and community service.</li>
                            <li id="p"><strong>Strong Placements:</strong> Excellent career opportunities with leading companies.</li><br />
                        </ul>

                        <h1 id="h1">Campus Life & Facilities</h1><br />
                        <img id="i" src="images/vck2.jpg" alt="Campus view 1" />
                        <img id="i" src="images/vck3.jpg" alt="Campus view 2" /><br />

                        <p id="p">
                            Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.
                        </p>

                        <div className="call-to-action">
                            <p id="p">Ready to explore our courses?</p>
                            <Link to="/Courses" className="primary-btn">Explore Courses</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer moved upward with custom CSS */}
            <div className="custom-footer">
                <Footer1 />
            </div>
        </div>
    );
};

export default HomePage;

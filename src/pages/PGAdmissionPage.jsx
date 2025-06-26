import Header from "../components/Header/Header";
import Footer1 from "../components/Footer/Footer";

const PGAdmissionPage = () => {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#2fd3d3" }}>
            {/* Header at top */}
            <div style={{ flexShrink: 0 }}>
                <Header />
            </div>

            {/* Scrollable content box */}
            <div
                style={{
                    flexGrow: 1,
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "30px",
                    paddingBottom: "10px" // moved footer upward by reducing bottom padding
                }}
            >
                <div
                    style={{
                        background: "#fff",
                        borderRadius: "10px",
                        padding: "32px 24px",
                        boxShadow: "0 2px 12px #0001",
                        width: "100%",
                        maxWidth: "1000px",
                        height: "100%",
                        maxHeight: "calc(100vh - 160px)", // header + footer adjustment
                        overflowY: "auto"
                    }}
                >
                    <h1 style={{ color: "#0090ff", textAlign: "center", fontWeight: 700, fontSize: "2.7rem", marginBottom: "18px" }}>
                        Postgraduate Admissions at Vivekanand College
                    </h1>
                    <p style={{ fontSize: "1.15rem", marginBottom: "10px" }}>
                        Welcome to the Postgraduate Admissions page of Vivekanand College! We are excited to help you take the next step in your academic journey. Our postgraduate programs are designed to provide advanced knowledge and research opportunities.
                    </p>
                    <p style={{ fontSize: "1.15rem", marginBottom: "28px" }}>
                        Please review the eligibility criteria and key dates below for the upcoming academic year. For any queries, feel free to contact our admissions office.
                    </p>

                    <h2 style={{ fontWeight: 700, fontSize: "2rem", margin: "32px 0 12px 0" }}>
                        Eligibility Criteria for Postgraduate Programs
                    </h2>
                    <hr style={{ marginBottom: "18px" }} />

                    <div style={{ overflowX: "auto" }}>
                        <table style={{
                            width: "100%",
                            borderCollapse: "collapse",
                            background: "#fff",
                            marginBottom: "24px"
                        }}>
                            <thead>
                                <tr style={{ background: "#f5f5f5" }}>
                                    <th style={thStyle}>Program</th>
                                    <th style={thStyle}>Minimum Qualification</th>
                                    <th style={thStyle}>Required Subjects</th>
                                    <th style={thStyle}>Minimum Marks (%)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={tdStyle}>M.Sc. Computer Science</td>
                                    <td style={tdStyle}>Graduation (B.Sc. or equivalent)</td>
                                    <td style={tdStyle}>Computer Science/IT</td>
                                    <td style={tdStyle}>50%</td>
                                </tr>
                                <tr>
                                    <td style={tdStyle}>M.Com. Accounting & Finance</td>
                                    <td style={tdStyle}>Graduation (B.Com or equivalent)</td>
                                    <td style={tdStyle}>Commerce Stream</td>
                                    <td style={tdStyle}>45%</td>
                                </tr>
                                <tr>
                                    <td style={tdStyle}>M.A. English Literature</td>
                                    <td style={tdStyle}>Graduation (B.A. or equivalent)</td>
                                    <td style={tdStyle}>English</td>
                                    <td style={tdStyle}>40%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 style={{ fontWeight: 700, fontSize: "2rem", margin: "32px 0 12px 0" }}>
                        Application Process
                    </h2>
                    <hr style={{ marginBottom: "18px" }} />
                    <ol style={{ fontSize: "1.15rem", marginBottom: "24px", color: "#444" }}>
                        <li><strong>Online Application:</strong> Fill out the application form available on our portal.</li><br />
                        <li><strong>Document Submission:</strong> Upload scanned copies of required documents (mark sheets, ID proof, etc.).</li><br />
                        <li><strong>Entrance Exam (if applicable):</strong> Appear for the college's entrance examination.</li><br />
                        <li><strong>Merit List & Interview:</strong> Check the merit list and attend the interview if shortlisted.</li><br />
                        <li><strong>Fee Payment:</strong> Complete the admission by paying the required fees.</li>
                    </ol>

                    <p style={{ fontSize: "1.1rem", color: "#444" }}>
                        For detailed information on postgraduate program admissions, specific program syllabi, and fee structures, please visit our&nbsp;
                        <a href="/Courses" style={{ color: "purple", textDecoration: "underline" }}>Courses page</a>
                        &nbsp;or&nbsp;
                        <a href="/Contact" style={{ color: "purple", textDecoration: "underline" }}>Contact us</a>
                        &nbsp;directly.
                    </p>
                </div>
            </div>

            {/* Footer at bottom */}
            <div style={{ flexShrink: 0 }}>
                <Footer1 />
            </div>
        </div>
    );
};

const thStyle = {
    padding: "12px",
    border: "1px solid #e0e0e0",
    textAlign: "left",
    fontWeight: 700
};

const tdStyle = {
    padding: "12px",
    border: "1px solid #e0e0e0"
};

export default PGAdmissionPage;

import { BsDownload, BsUpload } from 'react-icons/bs';

export default function Grades() {
    const students = [
        { name: "Jane Adams", scores: { setup: "100%", html: "96.67%", css: "92.18%", bootstrap: "66.22%" } },
        { name: "Christina Allen", scores: { setup: "100%", html: "98.50%", css: "91.00%", bootstrap: "68.22%" } },
        { name: "Samreen Ansari", scores: { setup: "100%", html: "97.30%", css: "89.50%", bootstrap: "70.45%" } },
        { name: "Han Bao", scores: { setup: "100%", html: "95.67%", css: "88.75%", bootstrap: "64.55%" } },
        { name: "Mahi Sai Srinivas Bobbili", scores: { setup: "100%", html: "96.20%", css: "90.30%", bootstrap: "69.25%" } },
        { name: "Siran Cao", scores: { setup: "100%", html: "94.10%", css: "93.85%", bootstrap: "72.15%" } },
        { name: "Kathryn Chalmers", scores: { setup: "100%", html: "96.90%", css: "94.00%", bootstrap: "73.45%" } },
        { name: "Chih-Yang Chen", scores: { setup: "100%", html: "97.50%", css: "92.60%", bootstrap: "75.30%" } }
    ];

    return (
        <div className="container mt-3">
            <div className="d-flex justify-content-between mb-3">
                <input type="text" className="form-control w-25" placeholder="Search Students" />
                <input type="text" className="form-control w-25" placeholder="Search Assignments" />
                <div>
                    <button className="btn btn-outline-primary me-2"><BsUpload /> Import</button>
                    <div className="btn-group">
                        <button className="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <BsDownload /> Export
                        </button>
                        <ul className="dropdown-menu">
                            <li><button className="dropdown-item" type="button">PDF</button></li>
                            <li><button className="dropdown-item" type="button">Excel</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>A1 SETUP</th>
                            <th>A2 HTML</th>
                            <th>A3 CSS</th>
                            <th>A4 BOOTSTRAP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student.name}>
                                <td>{student.name}</td>
                                <td>{student.scores.setup}</td>
                                <td>{student.scores.html}</td>
                                <td>{student.scores.css}</td>
                                <td><input type="text" className="form-control" defaultValue={student.scores.bootstrap} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

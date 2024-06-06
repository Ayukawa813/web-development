
export default function Dashboard() {
    return (
      <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          </div>
          </div>
          <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {/* All courses will follow this format */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg" alt="Principles of Programming Language" />
              <div className="card-body">
                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5400/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS 1234 React JS
                </a>
                <p className="wd-dashboard-course-title card-text">
                </p>
                <a href="#/Kanbas/Courses/5400/Home" className="btn btn-primary">Go</a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/1.jpg" alt="Principles of Programming Language" />
              <div className="card-body">
                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5400/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS 5400 Principles of Programming Language
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <a href="#/Kanbas/Courses/5400/Home" className="btn btn-primary">Go</a>
              </div>
            </div>
          </div>

          {/* Additional courses */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/1.jpg" alt="Software Engineering" />
              <div className="card-body">
                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5500/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS 5500 Foundations of Software Engineering
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Software Development Lifecycles
                </p>
                <a href="#/Kanbas/Courses/5500/Home" className="btn btn-primary">Go</a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/1.jpg" alt="Mobile Apps" />
              <div className="card-body">
                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5520/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS 5520 Mobile Application Development
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Building Mobile Apps
                </p>
                <a href="#/Kanbas/Courses/5520/Home" className="btn btn-primary">Go</a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/1.jpg" alt="Computer Systems" />
              <div className="card-body">
                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5600/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS 5600 Computer Systems
                </a>
                <p className="wd-dashboard-course-title card-text">
                  System Architecture and Performance
                </p>
                <a href="#/Kanbas/Courses/5600/Home" className="btn btn-primary">Go</a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/1.jpg" alt="Web Development" />
              <div className="card-body">
                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5610/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS 5610 Web Development
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack Development Techniques
                </p>
                <a href="#/Kanbas/Courses/5610/Home" className="btn btn-primary">Go</a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/1.jpg" alt="Computer Networking" />
              <div className="card-body">
                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5700/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS 5700 Fundamentals of Computer Networking
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Networking Principles
                </p>
                <a href="#/Kanbas/Courses/5700/Home" className="btn btn-primary">Go</a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/1.jpg" alt="Advanced Software Development" />
              <div className="card-body">
                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/6510/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS 6510 Advanced Software Development
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Advanced Programming Concepts
                </p>
                <a href="#/Kanbas/Courses/6510/Home" className="btn btn-primary">Go</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    );
  }
  
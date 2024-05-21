
export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <hr />
  
        <h2 id="wd-dashboard-published">Published Courses (19)</h2>
        <hr />
  
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home">Go</a>
            </div>
          </div>
  
          {/* Adding 7 new courses */}
          <div className="wd-dashboard-course">
            <img src="/images/1.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5400/Home">
                CS 5400 Principles of Programming Language
              </a>
              <p className="wd-dashboard-course-title">
                Exploring Programming Paradigms
              </p>
              <a href="#/Kanbas/Courses/5400/Home">Go</a>
            </div>
          </div>
  
          <div className="wd-dashboard-course">
            <img src="/images/1.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5500/Home">
                CS 5500 Foundations of Software Engineering
              </a>
              <p className="wd-dashboard-course-title">
                Software Development Lifecycles
              </p>
              <a href="#/Kanbas/Courses/5500/Home">Go</a>
            </div>
          </div>
  
          <div className="wd-dashboard-course">
            <img src="/images/1.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5520/Home">
                CS 5520 Mobile Application Development
              </a>
              <p className="wd-dashboard-course-title">
                Building Mobile Apps
              </p>
              <a href="#/Kanbas/Courses/5520/Home">Go</a>
            </div>
          </div>
  
          <div className="wd-dashboard-course">
            <img src="/images/1.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5600/Home">
                CS 5600 Computer Systems
              </a>
              <p className="wd-dashboard-course-title">
                System Architecture and Performance
              </p>
              <a href="#/Kanbas/Courses/5600/Home">Go</a>
            </div>
          </div>
  
          <div className="wd-dashboard-course">
            <img src="/images/1.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5610/Home">
                CS 5610 Web Development
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack Development Techniques
              </p>
              <a href="#/Kanbas/Courses/5610/Home">Go</a>
            </div>
          </div>
  
          <div className="wd-dashboard-course">
            <img src="/images/1.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5700/Home">
                CS 5700 Fundamentals of Computer Networking
              </a>
              <p className="wd-dashboard-course-title">
                Networking Principles
              </p>
              <a href="#/Kanbas/Courses/5700/Home">Go</a>
            </div>
          </div>
  
          <div className="wd-dashboard-course">
            <img src="/images/1.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/6510/Home">
                CS 6510 Advanced Software Development
              </a>
              <p className="wd-dashboard-course-title">
                Advanced Programming Concepts
              </p>
              <a href="#/Kanbas/Courses/6510/Home">Go</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
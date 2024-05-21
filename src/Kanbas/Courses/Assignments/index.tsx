export default function Assignments() {
  // Enhanced data structure to include additional details
  const assignments = [
    { 
      id: "123", 
      title: "A1 - ENV + HTML", 
      details: "Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts"
    },
    { 
      id: "124", 
      title: "A2 - CSS + BOOTSTRAP", 
      details: "Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts"
    },
    { 
      id: "125", 
      title: "A3 - JAVASCRIPT + REACT", 
      details: "Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts"
    }
  ];

  return (
    <div id="wd-assignments">
      <input id="wd-search-assignment" placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        {assignments.map(assignment => (
          <li key={assignment.id} className="wd-assignment-list-item">
            <a className="wd-assignment-link"
               href={`#/Kanbas/Courses/1234/Assignments/${assignment.id}`}>
              {assignment.title}
            </a>
            <div className="wd-assignment-details">
              {assignment.details}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

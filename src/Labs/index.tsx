import { Route, Routes, Navigate } from 'react-router';
import { Provider } from "react-redux";
import store from "./Store";
import TOC from './TOC';
import Lab1 from './Lab1';
import Lab2 from './Lab2';
import Lab3 from './Lab3';
import Lab4 from './Lab4';
import Lab5 from './Lab5';

export default function Labs() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <h1>Labs</h1>
        <a href="https://github.com/Ayukawa813/kanbas-react-web-app.git" id="wd-github">
          Visit our GitHub Repository
        </a>
        <p>Shuang Liu</p>
        <TOC />
        <Routes>
          <Route path="/" element={<Navigate to="Lab1" />} />
          <Route path="Lab1" element={<Lab1 />} />
          <Route path="Lab2" element={<Lab2 />} />
          <Route path="Lab3/*" element={<Lab3 />} />
          <Route path="Lab4" element={<Lab4 />} />
          <Route path="Lab5" element={<Lab5 />} />
        </Routes>
      </div>
    </Provider>
  );
}

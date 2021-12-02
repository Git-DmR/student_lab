import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavTabs from "./views/navTabs";
import CounterManagerContainer from "./containers/CounterManagerContainer";
import aboutPage from "./views/pages/aboutPage";

import { root, home, about, emptyPage, counters } from "./AppRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavTabs />
        
        <Routes>
          <Route path={root} element={<h2>App is running on 'root' page.</h2>} />
          <Route path={home} element={<h2>App is running on 'home' page.</h2>} />
          <Route path={about} element={<aboutPage />} />
          <Route path={counters} element={<CounterManagerContainer />} />
          <Route path={emptyPage} element={<h2>App is running on '404' page.</h2>} />
          <Route path="*" element={<h2>App is running on '404' page.</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { HashRouter, Route, Routes} from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";

import Navbar from './Navbar'
import Home from './Home'
import Projects from './projects/Projects'
import NotFound from './NotFound'
import ProjectDetails from './projects/ProjectDetails';
import Blogs from './blogs/Blogs';
import Blog from './blogs/Blog';
import Timeline from './Timeline';

function App() {
  return (
    
      <div className="App">
        <HashRouter>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/blogs" element={<Blogs/>} />
            <Route path="/blogs/:id" element={<Blog />} />
            <Route path="/timeline" element={<Timeline/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </div>
        </HashRouter>
        {/* TODO: Add footer */}

        <ScrollToTop smooth />
      </div>
      
  );
}

export default App;

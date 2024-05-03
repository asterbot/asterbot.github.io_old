import Navbar from './Navbar'
import Home from './Home'
import Projects from './Projects'
import NotFound from './NotFound'
import ProjectDetails from './ProjectDetails';

import { HashRouter, Route, Routes} from 'react-router-dom';


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
            <Route path="*" element={<NotFound />} />
          </Routes>

        </div>
        </HashRouter>
        {/* TODO: Add footer */}
      </div>
      
  );
}

export default App;

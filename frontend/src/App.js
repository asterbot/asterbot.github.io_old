import Navbar from './Navbar'
import Home from './Home'
import Projects from './Projects'
import NotFound from './NotFound'

import { HashRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </div>
      </div>
      </HashRouter>
  );
}

export default App;

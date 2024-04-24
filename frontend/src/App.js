import Navbar from './Navbar'
import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'
import NotFound from './NotFound'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </div>
      </div>
      </Router>
  );
}

export default App;

import { Box } from '@mui/material';

// Icons used in this page
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


// Timeline components
import Timeline from './Timeline';


const Home = () => {

    return ( 
        <div className="home">
            <div className="box-header">
                <Box component="section" alignItems="center" justifyContent="center" sx={{ margin: 'auto', p: 2, width:'50%' }}>
                    <h2><span>About me</span> </h2> <br /> 
                    Contact me: <a href="https://github.com/asterbot" target="_blank" rel="noreferrer"><GitHubIcon /> </a>
                    <a href="https://www.linkedin.com/in/arjun-sodhi/" target="_blank" rel="noreferrer"> <LinkedInIcon /> </a>
                    <a href="mailto:as5sodhi@uwaterloo.ca"><EmailIcon /></a>
                    <br /><br />
                    <a href="#/projects">Check out my Projects <DoubleArrowIcon /></a>

                </Box> 
            </div>

            <div className="box-body">
                <Box component="section" textAlign="left" sx={{ p: 2, border: '2px solid grey', margin: 'auto', width: '80%' }}>
                    <div className="responsive-container">
                    <div className="text-container">
                        <p>Hi there! <br />I'm Arjun, and I'm an undergraduate student pursuing a Bachelor's of Computer Science at the <a href="https://uwaterloo.ca" target="_blank" rel="noreferrer">University of Waterloo</a>. <br /> <br />
                        I am doing a specialization in Artificial Intelligence(AI) as well as a minor in Combinatorics and Optimization (C&O).   <br /> <br />
                        <i>Live, Learn, Code!</i>
                        </p>
                    </div>
                    <div className="image-container">
                        {/* NOTE: height is hardcoded, find a better way  */}
                        <img className="responsive" src={require('./img/website.jpg')} alt="hi"/>
                    </div>
                    </div>
                </Box> 
                </div>

            <br />
            <hr />

            <div className="box-header">
                <Box component="section" alignItems="center" justifyContent="center" sx={{ margin: 'auto', p: 2, width:'50%' }}>
                <h2><span>My Journey</span></h2> <br /> 
                </Box> 
            </div>
            

            <Timeline />

        </div>

        

     );
}
 
export default Home;

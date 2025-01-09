import { Box } from '@mui/material';

// Icons used in this page
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faItchIo, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// Timeline components
import Timeline from './Timeline';


const Home = () => {

    return ( 
        <div className="home">
            <div className="box-header">
                <Box component="section" alignItems="center" justifyContent="center" sx={{ margin: 'auto', p: 2, width:'50%' }}>
                    <h2><span>About me</span> </h2> <br /> 
                    Find me on: <br/> 
                    <a href="https://github.com/asterbot" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icons" icon={faGithub} size="2x" /> </a>
                    <a href="https://www.linkedin.com/in/arjun-sodhi/" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="icons" icon={faLinkedin} size="2x" /> </a>
                    <a href="https://asterbot.itch.io/" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="icons" icon={faItchIo} size="2x" /> </a>
                    <br /><br />
                </Box> 
            </div>

            <div className="box-body">
                <table className="intro-table">
                <tbody>
                    <tr>
                        <td>
                            <div className="text-container">
                                Hi there! <br />
                                Who am I? A work in progress, fueled by code and curiosity.<br/> A massive tech nerd, currently studying CS@UWaterloo, in the class of 2027!<br />
                                <br />
                                This website will be a culmination of my professional portfolio and an outlet for me to talk about things I find cool. 
                                Hope you enjoy looking around!
                                <br /><br />
                                <i>Code, chaos, create!</i>
                            </div>
                        </td>
                        <td>
                            <div className="gear-image">
                                <div className="image-container">
                                    {/* HACK: height is hardcoded, find a better way  */}
                                    <img className="responsive" src={require('./img/website.jpg')} loading="lazy" alt="hi"/>
                                    {/* TODO: Get the gear working, plz it is cool */}
                                    {/* <img className="gear" src={require('./img/gear.gif')} loading="lazy" alt="gear"/> */}
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
                </table>
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

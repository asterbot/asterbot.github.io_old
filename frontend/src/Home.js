import { Box } from '@mui/material';

// Icons used in this page
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faItchIo, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// Navigation
import { useNavigate } from 'react-router-dom';

// For the slideshow of pages iframes
import { Slide } from 'react-slideshow-image';

const Home = () => {
    const navigate = useNavigate();

    const pages = ["projects","blogs","timeline"]

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
                                    {/* HACK: height is hardcoded, find a better way - wait no it's not???  */}
                                    <img className="responsive" src={require('./img/website.jpg')} loading="lazy" alt="hi"/>
                                    {/* TODO: Get the gear working, plz it is cool */}
                                    {/* <img className="gear" src={require('./img/gear.gif')} loading="lazy" alt="gear"/>  */}
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
                </table>
                </div>
                

            <br />
            <hr />

            <div className="pages-slideshow box-header">
                <h2><span>Things to look at</span> </h2> <br /> 
            
                <Slide>
                    {pages.map((pageName, index)=> (
                        <div key={index}>
                            <div className="preview-wrapper" onClick={()=>navigate(`/${pageName}`)}>
                                <iframe
                                    src={`#/${pageName}`}
                                    title="Preview of timeline"
                                    className="page-preview"
                                    style={{
                                        pointerEvents: 'none'
                                    }}
                                    loading = "lazy"
                                    onLoad = {
                                        (e)=>{
                                            const iframe = e.target;
                                            try{
                                                iframe.contentWindow.scrollTo(0,100);
                                            } catch (err){
                                                console.log("Failed to scroll iframe", err)
                                            }
                                        }
                                    }
                                />
                            </div>
                        </div>
                    ))} 
                    
                </Slide>
            </div>
    

            {/* <Timeline /> */}

        </div>

        

     );
}
 
export default Home;

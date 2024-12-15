import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './index.css';


import projectData from './data/projects.json';

// Until I find a better solution, I will import all the project pages here
// TODO: try to find a better solution to generalize this - this is too iffy but it works for now 
import Age  from './descriptions/age'
import Memotion from "./descriptions/memotion";
import AiEarth from "./descriptions/ai-earth";
import Music4Mood from "./descriptions/music4mood";

const id_component_map = {
    "age": <Age />,
    "memotion": <Memotion />,
    "ai-earth": <AiEarth />,
    "music4mood": <Music4Mood />
}

const ProjectDetails = () => {

    const { id } = useParams(); // get id from URL

    const data = projectData[id];

    const SLIDES_PATH = './img/projects/' + id;

    const num_slides = data["slides"];

    const tools = data["tnt"];

    const sources = data["sources"];

    let slideImages=[];
    for (let i=1; i<=num_slides; ++i){
        let temp={
            "url": SLIDES_PATH +'/' + i + '.png'
        }   

        slideImages.push(temp);
    }

    return ( 
        <div className="project-details">
            <div className="box-header">
                <Box component="section" alignItems="center" justifyContent="center" sx={{ margin: 'auto', p: 2, width:'50%' }}>
                    <h2><span>{data["title"]}</span></h2>
                </Box>

                {Object.keys(sources).length>0 && "Check it out:"}
                <br />

                {Object.keys(sources).map((source, index)=>{
                    return(
                        <div className="tag">
                            <a href={sources[source]} target="_blank" rel="noreferrer">{source}</a> 
                            {index!== Object.keys(sources).length-1 ? <>&nbsp; &middot; &nbsp;</> : null}
                        </div>
                    )
                })}

                <Slide>
                    {slideImages.map((slideImage, index)=> (
                        <div key={index}>
                        <img className="slideshow-img" src={require(`${slideImage.url}`)} alt="slideshow"/>
                        </div>
                    ))} 
                </Slide>

                <Box component="section" alignItems="center" justifyContent="center" sx={{ margin: 'auto', p: 2, width:'50%' }}>
                    <h3><span>Tools & Techniques</span></h3>
                </Box>
                
                <ul className="tools-and-stuff">
                {tools.map((tool)=>{
                    return(
                        <li key={tool}>{tool}</li>
                    )
                })}
                </ul>
                
                <Box component="section" alignItems="center" justifyContent="center" sx={{ margin: 'auto', p: 2, width:'50%' }}>
                    <h3><span>Description</span></h3>
                </Box>

                {id_component_map[id]}
                
            </div>
        </div>
     );
}
 
export default ProjectDetails;

import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


import projectData from './data/projects.json';


const ProjectDetails = () => {

    const { id } = useParams(); // get id from URL

    const data = projectData[id];

    const SLIDES_PATH = './img/projects/' + data["id"];

    const num_slides = data["slides"];

    const tools = data["tnt"];
    const description = data["description"]

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

                <Slide>
                    {slideImages.map((slideImage, index)=> (
                        <div key={index}>
                        <img src={require(`${slideImage.url}`)} alt="slideshow"/>
                        </div>
                    ))} 
                </Slide>

                <Box component="section" alignItems="center" justifyContent="center" sx={{ margin: 'auto', p: 2, width:'50%' }}>
                    <h3><span>Tools & Technologies</span></h3>
                </Box>
                
                <ul className="tools-and-stuff">
                {tools.map((tool)=>{
                    return(
                        <li>{tool}</li>
                    )
                })}
                </ul>
                
                <Box component="section" alignItems="center" justifyContent="center" sx={{ margin: 'auto', p: 2, width:'50%' }}>
                    <h3><span>Tools & Technologies</span></h3>
                </Box>
                {description}
                
            </div>
        </div>
     );
}
 
export default ProjectDetails;

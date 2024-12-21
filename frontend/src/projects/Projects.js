import { Box } from '@mui/material';
import { Gallery } from "react-grid-gallery";
import { useNavigate } from 'react-router-dom';

import projectData  from "./data/projectsData.json";

import './index.css';

const Projects = () => {

    const navigate = useNavigate();

    const PROJECT_IMAGES = "./img/project-thumbnails/" //folder where project images are stored

    const tagStyle = {
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '0.4em',
        border: '2px solid blue'
    };

   // Creating the images array
    let images=[]
    for (var project in projectData){
        let temp={
            key: project,
            src: require(PROJECT_IMAGES + project+".png"),
            width: 280,
            height: 174,
            caption: projectData[project]["title"],
            thumbnailCaption: projectData[project]["title"],
            // TODO: Maybe add tags at some point with an actually nice formatting
            // tags: [
            //     { value: "Ocean", title: "Ocean" },
            //     { value: "People", title: "People" },
            //  ],
            customOverlay:(
                <div className="custom-overlay__caption">
                    {projectData[project]["title"]}
                </div>
            ) 
        }

        images.push(temp);
    }

     const openProject = (index,image)=>{
        navigate('/projects/' + image.key);
     }
     
    return ( 
        <div className="projects">
            <div className="box-header">
                <Box component="section" alignItems="center" justifyContent="center" sx={{ margin: 'auto', p: 2, width:'50%' }}>
                    <h2><span>Project Gallery</span></h2>
                </Box>
            </div>
            <Gallery images={images} margin={120} enableImageSelection={false} tagStyle={tagStyle} onClick={openProject}/>
        </div>
     );
}
 
export default Projects;

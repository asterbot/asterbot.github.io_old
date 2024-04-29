import { Box } from '@mui/material';

import { Gallery } from "react-grid-gallery";

import { useNavigate } from 'react-router-dom';

const Projects = () => {

    const navigate = useNavigate();

    const PROJECT_IMAGES = "./img/project-thumbnails/" //folder where project images are stored

    const tagStyle = {
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '0.4em',
        border: '2px solid blue'
    };

    const images = [
        {
           key: "age",
           src: require(PROJECT_IMAGES+"age.png"),
           tags: [
            { value: "C++", title: "C++" },
            { value: "OOP", title: "OOP" },
         ],
           caption: "ASCII Game Engine",
           customOverlay: (
            <div className="custom-overlay__caption">
              <div>ASCII Game Engine</div>
            </div>
          ),
        },
        {
           src: require(PROJECT_IMAGES+"age.png"),
           tags: [
            { value: "C++", title: "C++" },
            { value: "OOP", title: "OOP" },
         ],
        },
        {
           src: require(PROJECT_IMAGES+"age.png"),
           tags: [
            { value: "C++", title: "C++" },
            { value: "OOP", title: "OOP" },
         ],
        },
        {
            src: require(PROJECT_IMAGES+"age.png"),
            caption: "After Rain (Jeshu John - designerspics.com)",
         },
         {
            src: require(PROJECT_IMAGES+"age.png"),
            tags: [
               { value: "Ocean", title: "Ocean" },
               { value: "People", title: "People" },
            ],
            alt: "Boats (Jeshu John - designerspics.com)",
         },
         {
            src: require(PROJECT_IMAGES+"age.png"),
         },
     ];

     const openProject = (index,image)=>{
        console.log(image.key);
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

import { Box } from '@mui/material';
import { auto } from '@popperjs/core';

import { Gallery } from "react-grid-gallery";

const Projects = () => {
    const tagStyle = {
        backgroundColor: 'lightblue',
        color: 'black',
        borderRadius: '0.4em',
    };

    const images = [
        {
           src: require("./img/project-thumbnails/age.png"),
           width: auto,
           height: auto,
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
           src: require("./img/project-thumbnails/age.png"),
           width: auto,
           height: auto,
           tags: [
            { value: "C++", title: "C++" },
            { value: "OOP", title: "OOP" },
         ],
        },
        {
           src: require("./img/project-thumbnails/age.png"),
           width: auto,
           height: auto,
           tags: [
            { value: "C++", title: "C++" },
            { value: "OOP", title: "OOP" },
         ],
        },
        {
            src: require("./img/project-thumbnails/age.png"),
            width: auto,
           height: auto,
            caption: "After Rain (Jeshu John - designerspics.com)",
         },
         {
            src: require("./img/project-thumbnails/age.png"),
            width: auto,
           height: auto,
            tags: [
               { value: "Ocean", title: "Ocean" },
               { value: "People", title: "People" },
            ],
            alt: "Boats (Jeshu John - designerspics.com)",
         },
         {
            src: require("./img/project-thumbnails/age.png"),
            width: auto,
           height: auto,
         },
     ];
     
    return ( 
        <div className="projects">
            <div className="box-header">
                <Box component="section" alignItems="center" justifyContent="center" sx={{ margin: 'auto', p: 2, width:'50%' }}>
                    <h2><span>Project Gallery</span></h2>
                </Box>
            </div>
            <Gallery images={images} margin={120} enableImageSelection={false} tagStyle={tagStyle} />
        </div>
     );
}
 
export default Projects;

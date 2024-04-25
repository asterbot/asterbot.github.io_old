import { Box } from '@mui/material';

// Icons used in this page
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import OutlinedFlagRoundedIcon from '@mui/icons-material/OutlinedFlagRounded';

// Timeline components
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Home = () => {

    // This is for the list elements colors
    const color_map={
        "CS":"success",
        "MATH": "primary",
        "STAT": "primary",
        "CO": "primary",
        "PHYS": "info"
    }

    // Update all of these as you keep going
    const courses = {
        "2B": ["CS 241: Foundations of Sequential Programs", "CS 240: Data Structures and Data Management", "MATH 235: Linear Algebra II", "PHYS 234: Quantum Physics I", "FR 151: Basic French I", "COMMST 225: Interviewing"],
        "WT2": ["STAT 231: Statistics"],
        "2A": ["CS 246E: Object-Oriented Software Development (Enriched)", "CS 245: Logic & Computation", "CS 251: Computer Organization and Design", "MATH 249: Introduction to Combinatorics (Advanced Level)", "STAT 230: Probability", "ECON 102: Introduction to Macroeconomics"],
        "WT1": ["CO 250: Introduction to Optimization", "ECON 101: Introduction to Microeconomics"],
        "1B": ["CS 146: Elementary Algorithm Design and Data Abstraction (Advanced Level)", "CS 136L: Tools and Techniques for Software Development", "MATH 136: Linear Algebra I", "MATH 138: Calculus II", "PHYS 122: Waves, Electricity and Magnetism"],
        "1A": ["CS 145: Designing Functional Programs (Advanced Level)","MATH 135: Algebra I", "MATH 137: Calculus I", "PHYS 121: Mechanics", "SPCOM 223: Public Speaking"]    
    }

    const work_term_positions = {
        "WT1": "Finance Project: Financial Investment Coach @ WEA Program",
        "WT2":"CS136(L) Instructional Support Assistant @ University of Waterloo"
    }

    const timelines = {
        "2B": "Spring 2024 (May 2024-Present)",
        "WT2": "Winter 2024 (Jan - Apr 2024)",
        "2A": "Fall 2023 (Sep - Dec 2023)",
        "WT1": "Spring 2023 (May - Aug 2023)",
        "1B": "Winter 2023 (Jan - Apr 2023)",
        "1A": "Fall 2022 (Sept - Dec 2022)"    
    }


    return ( 
        <div className="home">
            <div className="box-header">
                <Box component="section" alignItems="center" justifyContent="center" sx={{ margin: 'auto', p: 2, border: '1px dashed red', width:'50%' }}>
                    <h2>About me </h2> <br /> 
                    <a href="https://github.com/asterbot" target="_blank" rel="noreferrer"><GitHubIcon /> </a>
                    <a href="https://www.linkedin.com/in/arjun-sodhi/" target="_blank" rel="noreferrer"> <LinkedInIcon /> </a>

                </Box> 
            </div>

            <div className="box-body">
                <Box component="section" textAlign="left" sx={{ p: 2, border: '1px dashed grey', margin: 'auto', width: '80%' }}>
                    <p>Hi there! <br />I'm Arjun, and I'm an undergraduate student pursuing a Bachelor's of Computer Science at the <a href="https://uwaterloo.ca">University of Waterloo</a>. <br /> <br />
                    I am doing a specialization in Artificial Intelligence(AI) as well as a minor in Combinatorics and Optimization (C&O).   <br /> <br />
                    (a little more yapping)
                    </p>
                </Box> 
            </div>

            <br />
            <hr />

            <div className="box-header">
                <Box component="section" alignItems="center" justifyContent="center" sx={{ margin: 'auto', p: 2, border: '1px dashed red', width:'50%' }}>
                    <h2>My Journey </h2> <br /> 
                </Box> 
            </div>
            

            <div className="timeline">
            <VerticalTimeline lineColor='white'>
            {Object.entries(courses).map(([term,temp])=>{
                // go through the terms
                return (
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#0e0f0f', color: 'white', border:'2px solid rgb(33, 150, 243)' }}
                date={timelines[term]}
                icon={term.slice(0,2)==="WT" ? <WorkOutlineOutlinedIcon /> :  <SchoolOutlinedIcon />} // using the right icon for study/work term
                >
                {/* This needed to be hard-coded with slicing but will work in the general sense */}
                <h3 className="vertical-timeline-element-title">{term.slice(0,2)==="WT" ? "Work Term " + term[2]:  term}</h3>
                <p className="vertical-timeline-element-subtitle">{term.slice(0,2)==="WT" ? work_term_positions[term] :  "Study Term"}</p>
                <br />
                Courses taken:
                <ul className="list-group">
                {courses[term].map((course)=>{
                    let res = "list-group-item list-group-item-warning";
                    if (course.slice(0,3)==="CS " || course.slice(0,3)==="CO "){
                        res="list-group-item list-group-item-" + color_map[course.slice(0,2)];
                    }
                    else if (course.slice(0,4)==="MATH" || course.slice(0,4)==="PHYS" || course.slice(0,4)==="STAT"){
                        res="list-group-item list-group-item-" + color_map[course.slice(0,4)]
                    }
                    return (
                        <li className={res}>{course}</li>
                    )

                })}
                </ul>
                </VerticalTimelineElement>
                )
            })}

            <VerticalTimelineElement
                icon={<OutlinedFlagRoundedIcon />}
            />
            </VerticalTimeline>
            </div>

        </div>

        

     );
}
 
export default Home;
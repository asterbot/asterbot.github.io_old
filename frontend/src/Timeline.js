// Timeline components
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Icons for timeline
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import OutlinedFlagRoundedIcon from '@mui/icons-material/OutlinedFlagRounded';

const Timeline = () => {
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
        "WT3": [],
        "2B": ["CS 241: Foundations of Sequential Programs", "CS 240: Data Structures and Data Management", "MATH 235: Linear Algebra II", "PHYS 234: Quantum Physics I", "FR 151: Basic French I", "ENGL 210E: Genres of Technical Communication"],
        "WT2": ["STAT 231: Statistics"],
        "2A": ["CS 246E: Object-Oriented Software Development (Enriched)", "CS 245: Logic & Computation", "CS 251: Computer Organization and Design", "MATH 249: Introduction to Combinatorics (Advanced Level)", "STAT 230: Probability", "ECON 102: Introduction to Macroeconomics"],
        "WT1": ["CO 250: Introduction to Optimization", "ECON 101: Introduction to Microeconomics"],
        "1B": ["CS 146: Elementary Algorithm Design and Data Abstraction (Advanced Level)", "CS 136L: Tools and Techniques for Software Development", "MATH 136: Linear Algebra I", "MATH 138: Calculus II", "PHYS 122: Waves, Electricity and Magnetism"],
        "1A": ["CS 145: Designing Functional Programs (Advanced Level)","MATH 135: Algebra I", "MATH 137: Calculus I", "PHYS 121: Mechanics", "SPCOM 223: Public Speaking"]    
    }

    const work_term_positions = {
        "WT1": "Azure Project Developer @ University of Waterloo (WEA)",
        "WT2": "CS136(L) Instructional Support Assistant @ University of Waterloo",
        "WT3": "Software Developer - Performance Intern @ Ford Canada",
    }

    const timelines = {
        "WT3": "Fall 2024 (Sep 2024 - Dec 2024)",
        "2B": "Spring 2024 (May 2024 - Aug 2024)",
        "WT2": "Winter 2024 (Jan 2024 - Apr 2024)",
        "2A": "Fall 2023 (Sep 2023 - Dec 2023)",
        "WT1": "Spring 2023 (May 2023 - Aug 2023)",
        "1B": "Winter 2023 (Jan 2023 - Apr 2023)",
        "1A": "Fall 2022 (Sept 2022 - Dec 2022)"    
    }

    return ( 
        <div className="timeline">
            <VerticalTimeline lineColor='white'>
            {Object.entries(courses).map(([term,temp])=>{
                // go through the terms
                return (
                <VerticalTimelineElement
                    key={term}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#0e0f0f', color: 'white', border:'2px solid rgb(33, 150, 243)' }}
                    date={timelines[term]}
                    icon={term.slice(0,2)==="WT" ? <WorkOutlineOutlinedIcon /> :  <SchoolOutlinedIcon />} // using the right icon for study/work term
                >
                {/* This needed to be hard-coded with slicing but will work in the general sense */}
                <h3 className="vertical-timeline-element-title">{term.slice(0,2)==="WT" ? "Work Term " + term[2] :  term}</h3>
                <p className="vertical-timeline-element-subtitle">{term.slice(0,2)==="WT" ? work_term_positions[term] :  "Study Term"}</p>
                <br />
                Courses:
                <ul className="list-group">
                {courses[term].map((course)=>{
                    let res = "list-group-item list-group-item-warning";
                    if (course.split(" ")[0]==="CS" || course.split(" ")[0]==="CO"){
                        res="list-group-item list-group-item-" + color_map[course.split(" ")[0]];
                    }
                    else if (course.split(" ")[0]==="MATH" || course.split(" ")[0]==="PHYS" || course.split(" ")[0]==="STAT"){
                        res="list-group-item list-group-item-" + color_map[course.split(" ")[0]]
                    }
                    return (
                        <li className={res} key={course}>{course}</li>
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
     );
}
 
export default Timeline;

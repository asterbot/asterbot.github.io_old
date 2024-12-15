const AiEarth = () => {
    return ( 
        <div className="project-description">
            This is a web-app aimed at finding the best circular economy problems and solutions, measured by various factors like relevance, feasibility, innovation and scalability.
            <br />
            Utilized <a href="https://en.wikipedia.org/wiki/Zero-shot_learning" target="_blank" rel="noreferrer">Zero Shot Learning</a> AI algorithm to classify problem/solution dataset for the submissions 
            from the D^3 Institute's "Creating a Sustainable Future" challenge. <br />
            This was used since the given dataset did not have any "pre-classified" results, so this could train on the data without relying on the training set.
            <br />
            The AI filters out any results it deems irrelevant, and provides it to the frontend where users can search by keyword and sort
            the results using the above metrics. Furthermore, the user may ask questions relating to circular economies and the AI will prompt a solution.
            <br />
            Worked with various open-source libraries from <a href="https://huggingface.co/" target="_blank" rel="noreferrer">Hugging Face</a>, including:
            <ul className="normal-list">
                <li key='1'>Google's T5 LLM</li>
                <li key='2'>GPT-2</li>
            </ul>
            <br />
            These were used to handle complex computations in the backend and send the results obtained to the frontend.
            <br /><br />
            Developed the backend with python and used an API endpoint with <code>Flask</code> and integrated it with the frontend of <code>React.js</code> for smooth communication between the layers.
            <br /><br />
            This was a submission to <a href="https://www.genaicompetition.com/">AI Earth Hack 2024</a>.
        </div>
     );
}
 
export default AiEarth;
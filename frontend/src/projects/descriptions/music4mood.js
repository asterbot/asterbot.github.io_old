const Music4Mood = () => {
    return ( 
        <div className="project-description">
            This is a <code>Flask</code> web application that uses <a href="https://en.wikipedia.org/wiki/Natural_language_processing">Natural Language Processing</a> to suggest
            personalized songs based on the text entered by the user.
            <br/>
            The backend of the website is developed in <code>Flask</code> and <code>JavaScript</code> and uses the <a href="https://developer.spotify.com/documentation/web-api">Spotify Web API</a> to suggest songs based on mood scores. 
            <br /><br/>
            This was a submission to <a href="https://robohacks2.devpost.com/">RoboHacks 2, 2022</a>
        </div>
     );
}
 
export default Music4Mood;

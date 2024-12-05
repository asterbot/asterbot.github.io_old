const Memotion = () => {
    return ( 
        <div className="project-description">
            mEmotion is an AI-powered app that lets you journal anywhere, anytime! 
            <br /><br />
            This app was built to make journaling easier, where the user can record voice memos (instead of writing or typing) for convenience. 
            <br />
            The app allows for the following:
            <ul className="normal-list">
                <li key='1'>Record memos and get relatively fast AI analysis</li>
                <li key='2'>Save and organize old memos</li>
            </ul>
            <br />
            The app provides user-friendly AI generated graphs, which include sentimental analysis. 
            <br />
            We used various open source libraries to build this
            such as <code>VADER</code> and <code>Vokaturi</code>. Transcription was done using a <code>python</code> open-source speech recognition library,
            and the summarization uses the facebook BART large CNN model. These make up the back-end, which run on the <code>Flask</code> server.
            <br />
            The frontend was built with <code>React TS</code>. The user audio is sent as a <code>wav</code> file to the backend which does the analysis
            and sends the data back to the frontend.
            <br /><br />
            This was a submission to <a href="https://serenityhacks.devpost.com/">Serenity Hacks 2024</a>.
        </div>
     );
}
 
export default Memotion;
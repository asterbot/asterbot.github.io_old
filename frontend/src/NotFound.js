import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
                <h1>Sorry!</h1>
                <p>Page Not Found</p>
                <br />
                <img src={require("./img/404.png")} alt="404"/>
                <br /><br />
                <Link to="/">Back to the homepage...</Link>
        </div>
     );
}
 
export default NotFound;

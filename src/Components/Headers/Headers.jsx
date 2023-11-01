import { Link } from "react-router-dom";

const Headers = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to=""></Link>
            </nav>
        </div>
    );
};

export default Headers;
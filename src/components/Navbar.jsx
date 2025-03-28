import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <h2>Movie Watchlist</h2>
            <div>
                <Link to="/">Home</Link>
                <Link to="/watchlist">Watchlist</Link>
            </div>
        </nav>
    );
};

export default Navbar;

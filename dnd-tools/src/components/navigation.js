import { Link } from 'react-router';
import '../App.css';


export default function Navigation() {
    return (
        <div className="nav">
            <div className="navLeft">
                <Link to="/" className="navLink" >/Home</Link>
                <Link to="/library" className="navLink" >/Library</Link>
            </div>
            <div className="navRight">
                <button className="userBtn login">Login</button>
                <button className="userBtn createAccount">Create Account</button>
            </div>
        </div>
    )
}